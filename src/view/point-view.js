import {
  FULL_MACHINE_DATE_TEMPLATE,
  MACHINE_DATE_TEMPLATE,
  TIME_TEMPLATE,
} from '../const';
import { createElement } from '../render';
import { humanizeDateFormat, humanizeDurationEvent } from '../utils/utils';

const createSelectedOffersItemTemplate = ({ title, price }) => `
  <li class="event__offer">
    <span class="event__offer-title">${title}</span>
    +€&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>
`;

const createSelectedOffersTemplate = (selectedOffers) => {
  if (selectedOffers.length === 0) {
    return '';
  }
  const offersTemplate = selectedOffers
    .map(({ title, price }) =>
      createSelectedOffersItemTemplate({ title, price })
    )
    .join('');

  return `
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offersTemplate}
    </ul>
  `;
};

const createPointTemplate = ({ point, nameDestination, selectedOffers }) => {
  const { dateFrom, dateTo, type, basePrice, isFavorite } = point;
  const machineDateTemplate = humanizeDateFormat(
    dateFrom,
    MACHINE_DATE_TEMPLATE
  );
  const shortDateTemplate = humanizeDateFormat(dateFrom);
  const startTimeTemplate = humanizeDateFormat(dateFrom, TIME_TEMPLATE);
  const endTimeTemplate = humanizeDateFormat(dateTo, TIME_TEMPLATE);
  const fullMachineDateFromTemplate = humanizeDateFormat(
    dateFrom,
    FULL_MACHINE_DATE_TEMPLATE
  );
  const fullMachineDateToTemplate = humanizeDateFormat(
    dateTo,
    FULL_MACHINE_DATE_TEMPLATE
  );
  const durationTemplate = humanizeDurationEvent({ dateFrom, dateTo });
  const selectedOffersTemplate = createSelectedOffersTemplate(selectedOffers);
  const favoriteButtonActiveClass = isFavorite
    ? 'event__favorite-btn--active'
    : '';

  return `
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${machineDateTemplate}">${shortDateTemplate}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${nameDestination}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${fullMachineDateFromTemplate}">${startTimeTemplate}</time>
            —
            <time class="event__end-time" datetime="${fullMachineDateToTemplate}">${endTimeTemplate}</time>
          </p>
          <p class="event__duration">${durationTemplate}</p>
        </div>
        <p class="event__price">
          €&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        ${selectedOffersTemplate}
        <button class="event__favorite-btn ${favoriteButtonActiveClass}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
};

export default class PoinView {
  constructor({ point, destinations, offers }) {
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate = () => {
    const nameDestination = this.destinations.find(
      (item) => this.point.destination === item.id
    ).name;
    const offersByType = this.offers.find(
      ({ type }) => this.point.type === type
    ).offers;
    const selectedOffers = offersByType.filter(({ id }) =>
      this.point.offers.includes(id)
    );

    return createPointTemplate({
      point: this.point,
      nameDestination,
      selectedOffers,
    });
  };

  getElement = () => {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  };

  removeElement = () => (this.element = null);
}
