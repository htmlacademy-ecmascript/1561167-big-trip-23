import { BLANK_POINT, PointType } from '../const';
import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import {
  getNameDestination,
  getOffersByType,
  getSelectedDestination,
  hasNameInDestinations,
  hasDetailsDestination,
  humanizeDateCalendarFormat,
  getDestinationIdByName,
} from '../utils/utils';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const createDestinationListTemplate = (destinationList) => {
  const optionItemTemplate = destinationList
    .map((item) => `<option value="${item}"></option>`)
    .join('');

  return `
    <datalist id="destination-list-1">
      ${optionItemTemplate}
    </datalist>
  `;
};

const createPointTypeItemTemplate = (pointType, isChecked) => `
  <div class="event__type-item">
    <input
      id="event-type-${pointType}-1"
      class="event__type-input  visually-hidden"
      type="radio"
      name="event-type"
      value="${pointType}"
      ${isChecked ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${pointType}"
      for="event-type-${pointType}-1">${pointType}</label>
  </div>
`;

const createPointTypeListTemplate = (selectedPointType) => {
  const pointTypeItemsTemplate = Object.values(PointType)
    .map((pointType) =>
      createPointTypeItemTemplate(pointType, pointType === selectedPointType)
    )
    .join('');
  return `
    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${pointTypeItemsTemplate}
      </fieldset>
    </div>`;
};

const createOfferSelectorTemplate = ({
  point,
  offer: { id, title, price },
}) => {
  const lastOfferWord = title.trim().split(' ').pop();
  const isChecked = point.offers.includes(id);

  return `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="${id}" type="checkbox" name="event-offer-${lastOfferWord}"
      ${isChecked ? 'checked' : ''}>
      <label class="event__offer-label" for="${id}">
        <span class="event__offer-title">${title}</span>
        +€&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>
  `;
};

const createPointOffersTemplate = ({ state, offers }) => {
  if (!state.isShowOffers) {
    return '';
  }

  const offersByType = getOffersByType({ point: state, offers });
  const offerSelectorTemplate = offersByType
    .map((offer) => createOfferSelectorTemplate({ point: state, offer }))
    .join('');

  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${offerSelectorTemplate}
      </div>
    </section>
  `;
};

const createDestinationPhotoItemTemplate = ({ src, description }) =>
  `<img class="event__photo" src="${src}" alt="${description}">`;

const createDestinationPhotoTemplate = (photos) => {
  const destinationPicture = photos
    .map((photo) => createDestinationPhotoItemTemplate(photo))
    .join('');

  if (!destinationPicture.length) {
    return '';
  }

  return `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${destinationPicture}
      </div>
    </div>
  `;
};

const createPointDestinationTemplate = ({ state, destinations }) => {
  if (!state.isShowDestination) {
    return '';
  }

  const selectedDestination = getSelectedDestination({
    point: state,
    destinations,
  });
  const description = selectedDestination?.description ?? '';
  const destinationPhotos = selectedDestination?.pictures ?? [];
  const destinationPicture = createDestinationPhotoTemplate(destinationPhotos);

  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
      ${destinationPicture}
    </section>
  `;
};

const createPointEditTemplate = ({ state, destinations, offers }) => {
  const nameDestination = getNameDestination({
    destinationId: state.destination,
    destinations,
  });
  const destinationList = destinations.map(({ name }) => name);
  const offersTemplate = createPointOffersTemplate({
    state,
    offers,
  });
  const destinationTemplate = createPointDestinationTemplate({
    state,
    destinations,
  });
  const isShowDetails = state.isShowDestination || state.isShowOffers;
  const detailsTemplate = `
    <section class="event__details">
      ${offersTemplate}
      ${destinationTemplate}
    </section>`;
  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17"
                src="img/icons/${state.type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            ${createPointTypeListTemplate(state.type)}
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${state.type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${nameDestination}" list="destination-list-1">
            ${createDestinationListTemplate(destinationList)}
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1"
              type="text"
              name="event-start-time"
              value="${humanizeDateCalendarFormat(state.dateFrom)}">
            —
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1"
              type="text"
              name="event-end-time"
              value="${humanizeDateCalendarFormat(state.dateTo)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              €
            </label>
            <input class="event__input  event__input--price" id="event-price-1"
              type="text"
              name="event-price"
              value="${state.basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue"
						type="submit"
						${state.isDisabledSubmit ? 'disabled' : ''}
						>Save
					</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        ${isShowDetails ? detailsTemplate : ''}
      </form>
    </li>
  `;
};

export default class PointEditView extends AbstractStatefulView {
  #destinations = null;
  #offers = null;

  #handleFormSubmit = null;
  #handleFormCloseClick = null;

  #offerElements = null;

  #dateFromPicker = null;
  #dateToPicker = null;

  constructor({
    point = BLANK_POINT,
    destinations,
    offers,
    onFormSubmit,
    onFormCloseClick,
  }) {
    super();
    this.#destinations = destinations;
    this._setState(
      PointEditView.parsePointToState({
        point,
        destinations: this.#destinations,
      })
    );
    this.#offers = offers;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormCloseClick = onFormCloseClick;

    this._restoreHandlers();
  }

  get template() {
    return createPointEditTemplate({
      state: this._state,
      offers: this.#offers,
      destinations: this.#destinations,
    });
  }

  reset = (point) =>
    this.updateElement(
      PointEditView.parsePointToState({
        point,
        destinations: this.#destinations,
      })
    );

  removeElement = () => {
    super.removeElement();

    this.#dateFromPicker.destroy();
    this.#dateFromPicker = null;

    this.#dateToPicker.destroy();
    this.#dateToPicker = null;
  };

  _restoreHandlers = () => {
    const sectionOffersElement = this.element.querySelector(
      '.event__section--offers'
    );

    this.element
      .querySelector('.event--edit')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#formCloseClickHandler);
    this.element
      .querySelector('.event__type-list')
      .addEventListener('change', this.#pointTypeToggleHandler);
    this.element
      .querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationToggleHandler);
    this.element
      .querySelector('.event__input--price')
      .addEventListener('input', this.#priceInputHandler);

    if (sectionOffersElement !== null) {
      sectionOffersElement.addEventListener(
        'change',
        this.#offersChangeHandler
      );

      this.#offerElements = sectionOffersElement.querySelectorAll(
        '.event__offer-checkbox'
      );
    }

    this.#initDatePicker();
  };

  #initDatePicker = () => {
    const KEY = 'time_24hr';
    const commonParameter = {
      dateFormat: 'd/m/y H:i',
      enableTime: true,
      locale: { firstDayOfWeek: 1 },
      [KEY]: true,
    };

    this.#dateFromPicker = flatpickr(
      this.element.querySelector('input[name="event-start-time"]'),
      {
        ...commonParameter,
        defaultDate: this._state.dateFrom,
        onClose: this.#dateFromCloseHandler,
        maxDate: this._state.dateTo,
      }
    );
    this.#dateToPicker = flatpickr(
      this.element.querySelector('input[name="event-end-time"]'),
      {
        ...commonParameter,
        defaultDate: this._state.dateTo,
        onClose: this.#dateToCloseHandler,
        minDate: this._state.dateFrom,
      }
    );
  };

  #dateFromCloseHandler = ([userDate]) => {
    this._setState({ dateFrom: userDate });
    this.#dateToPicker.set('minDate', this._state.dateFrom);
  };

  #dateToCloseHandler = ([userDate]) => {
    this._setState({ dateTo: userDate });
    this.#dateFromPicker.set('maxDate', this._state.dateTo);
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(PointEditView.parseStateToPoint(this._state));
  };

  #formCloseClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormCloseClick();
  };

  #pointTypeToggleHandler = (evt) => {
    if (!evt.target.closest('.event__type-input')) {
      return;
    }

    evt.preventDefault();
    this.updateElement({ type: evt.target.value, isShowOffers: true });
  };

  #destinationToggleHandler = (evt) => {
    evt.preventDefault();

    const name = evt.target.value;
    const isNameInDestination = hasNameInDestinations({
      name,
      destinations: this.#destinations,
    });
    const destinationId = getDestinationIdByName({
      name,
      destinations: this.#destinations,
    });

    this.updateElement({
      destination: destinationId,
      isShowDestination: isNameInDestination,
      isDisabledSubmit: !isNameInDestination,
    });
  };

  #priceInputHandler = (evt) => {
    const price = +evt.target.value;

    if (isNaN(price)) {
      evt.target.value = evt.target.value.slice(0, -1);
      return;
    }

    this._setState({ basePrice: price });
  };

  #offersChangeHandler = (evt) => {
    const offers = [];

    evt.preventDefault();

    this.#offerElements.forEach((element) => {
      if (element.checked) {
        offers.push(element.id);
      }
    });

    this._setState({ offers });
  };

  static parsePointToState = ({ point, destinations }) => {
    const isDestination =
      point.destination !== null &&
      hasDetailsDestination({
        point,
        destinations,
      });
    return {
      ...point,
      isShowOffers: point.offers.length !== 0,
      isShowDestination: isDestination,
      isDisabledSubmit:
        point.destination === null || point.destination.length === 0,
    };
  };

  static parseStateToPoint = (state) => {
    const point = { ...state };

    if (!point.isShowOffers) {
      point.offers = [];
    }

    if (!point.isShowDestination) {
      point.destination = point.destination || '';
    }

    delete point.isShowOffers;
    delete point.isShowDestination;
    delete point.isDisabledSubmit;

    return point;
  };
}
