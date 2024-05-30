import { DAY_MONTH_TEMPLATE, SHORT_DATE_TEMPLATE } from '../const';
import AbstractView from '../framework/view/abstract-view';
import {
  getNameDestination,
  getSelectedOffers,
  humanizeDateFormat,
  isDatesOneMonth,
} from '../utils/utils';

const createTitleInfoTemplate = ({ points, destinations }) => {
  const titles = points.map((point) =>
    getNameDestination({
      destinationId: point.destination,
      destinations,
    })
  );

  switch (titles.length) {
    case 1:
      return titles[0];
    case 2:
    case 3:
      return titles.join(' — ');
    default:
      return `${titles[0]} — ... — ${titles[titles.length - 1]}`;
  }
};

const createDatesInfoTemplate = (points) => {
  const dateFrom = points[0].dateFrom;
  const dateTo = points[points.length - 1].dateTo;

  if (points.length === 1) {
    return humanizeDateFormat(dateFrom, SHORT_DATE_TEMPLATE);
  }

  const startingDateTemplate = isDatesOneMonth(dateFrom, dateTo)
    ? DAY_MONTH_TEMPLATE
    : SHORT_DATE_TEMPLATE;
  const startingDate = humanizeDateFormat(dateFrom, startingDateTemplate);
  const endingDate = humanizeDateFormat(dateTo, SHORT_DATE_TEMPLATE);

  return `${startingDate}&nbsp;—&nbsp;${endingDate}`;
};

const createTotalInfoTemplate = ({ points, offers }) => {
  const totalBasePrice = points.reduce((result, point) => {
    const selectedOffers = getSelectedOffers({ point, offers });
    const totalSelectedOffers = selectedOffers.reduce(
      (resultOffers, offer) => resultOffers + offer.price,
      0
    );
    return result + point.basePrice + totalSelectedOffers;
  }, 0);

  return totalBasePrice;
};

const createTripInfoTemplate = ({ points, offers, destinations }) => {
  if (points.length === 0) {
    return '';
  }

  const titleInfoTemplate = createTitleInfoTemplate({ points, destinations });
  const datesInfoTemplate = createDatesInfoTemplate(points);
  const totalInfoTemplate = createTotalInfoTemplate({ points, offers });

  return `
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${titleInfoTemplate}</h1>
        <p class="trip-info__dates">${datesInfoTemplate}</p>
      </div>
      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">${totalInfoTemplate}</span>
      </p>
    </section>
  `;
};

export default class TripInfoView extends AbstractView {
  #points = null;
  #offers = null;
  #destinations = null;

  constructor({ points, offers, destinations }) {
    super();
    this.#points = points;
    this.#offers = offers;
    this.#destinations = destinations;
  }

  get template() {
    return createTripInfoTemplate({
      points: this.#points,
      offers: this.#offers,
      destinations: this.#destinations,
    });
  }
}
