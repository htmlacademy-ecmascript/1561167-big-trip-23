import { BLANK_POINT, PointType } from '../const';
import AbstractView from '../framework/view/abstract-view';
import {
  getNameDestination,
  getOffersByType,
  getSelectedDestination,
  humanizeDateCalendarFormat,
} from '../utils/utils';

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
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${lastOfferWord}-1" type="checkbox" name="event-offer-${lastOfferWord}"
      ${isChecked ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-${lastOfferWord}-1">
        <span class="event__offer-title">${title}</span>
        +€&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>
  `;
};

const createPointOffersTemplate = ({ point, offers }) => {
  const offersByType = getOffersByType({ point, offers });
  const offerSelectorTemplate = offersByType
    .map((offer) => createOfferSelectorTemplate({ point, offer }))
    .join('');

  if (!offersByType.length) {
    return '';
  }

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

const createPointDestinationTemplate = ({ point, destinations }) => {
  const selectedDestination = getSelectedDestination({ point, destinations });
  const description = selectedDestination?.description ?? '';
  const destinationPhotos = selectedDestination?.pictures ?? [];
  const destinationPicture = createDestinationPhotoTemplate(destinationPhotos);

  if (!description.length && !destinationPhotos.length) {
    return '';
  }

  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
      ${destinationPicture}
    </section>
  `;
};

const createPointEditTemplate = ({ point, destinations, offers }) => {
  const nameDestination = getNameDestination({
    destinationId: point.destination,
    destinations: destinations,
  });
  const destinationList = destinations.map(({ name }) => name);
  const offersTemplate = createPointOffersTemplate({ point, offers });
  const destinationTemplate = createPointDestinationTemplate({
    point,
    destinations,
  });
  const isShowDetails =
    offersTemplate.length !== 0 || destinationTemplate.length !== 0;
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
                src="img/icons/${point.type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            ${createPointTypeListTemplate(point.type)}
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${point.type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${nameDestination}" list="destination-list-1">
            ${createDestinationListTemplate(destinationList)}
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1"
              type="text"
              name="event-start-time"
              value="${humanizeDateCalendarFormat(point.dateFrom)}">
            —
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1"
              type="text"
              name="event-end-time"
              value="${humanizeDateCalendarFormat(point.dateTo)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              €
            </label>
            <input class="event__input  event__input--price" id="event-price-1"
              type="text"
              name="event-price"
              value="${point.basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
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

export default class PointEditView extends AbstractView {
  #point = null;
  #destinations = null;
  #offers = null;

  #handleFormSubmit = null;
  #handleFormCloseClick = null;

  constructor({
    point = BLANK_POINT,
    destinations,
    offers,
    onFormSubmit,
    onFormCloseClick,
  }) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormCloseClick = onFormCloseClick;

    this.element
      .querySelector('.event--edit')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#formCloseClickHandler);
  }

  get template() {
    return createPointEditTemplate({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
    });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this.#point);
  };

  #formCloseClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormCloseClick();
  };
}
