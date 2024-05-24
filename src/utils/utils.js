import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  ALLOWED_SORTING_TYPES,
  AVERAGE_EVENT_DURATION_TEMPLATE,
  DATE_EVENT_TEMPLATE,
  INVERTED_SHORT_DATE_TEMPLATE,
  LONG_EVENT_DURATION_TEMPLATE,
  MSEC_IN_DAY,
  MSEC_IN_HOUR,
  SHORT_EVENT_DURATION_TEMPLATE,
} from '../const';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const getDurationEvent = (dateFrom, dateTo) =>
  dayjs(dateTo).diff(dayjs(dateFrom));

const humanizeDateCalendarFormat = (date) =>
  date ? dayjs(date).format(DATE_EVENT_TEMPLATE) : '';

const humanizeDateFormat = (date, template = INVERTED_SHORT_DATE_TEMPLATE) =>
  date ? dayjs(date).format(template) : '';

const humanizeDurationEvent = ({ dateFrom, dateTo }) => {
  if (dateFrom === null || dateTo === null) {
    return '';
  }

  const diffTimeshtamp = getDurationEvent(dateFrom, dateTo);

  if (diffTimeshtamp >= MSEC_IN_DAY) {
    return dayjs.duration(diffTimeshtamp).format(LONG_EVENT_DURATION_TEMPLATE);
  }
  if (diffTimeshtamp >= MSEC_IN_HOUR) {
    return dayjs
      .duration(diffTimeshtamp)
      .format(AVERAGE_EVENT_DURATION_TEMPLATE);
  }

  return dayjs.duration(diffTimeshtamp).format(SHORT_EVENT_DURATION_TEMPLATE);
};

const isDatesEqual = (dateA, dateB) =>
  (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB);

const getSelectedDestination = ({ point, destinations }) =>
  destinations.find(({ id }) => id === point.destination);

const getNameDestination = ({ destinationId, destinations }) =>
  destinations.find((item) => destinationId === item.id)?.name ?? '';

const getDestinationIdByName = ({ name, destinations }) =>
  destinations.find(
    ({ name: nameDectination }) =>
      nameDectination.toLowerCase() === name.toLowerCase()
  )?.id ?? '';

const getOffersByType = ({ point, offers }) =>
  offers.find(({ type }) => point.type === type)?.offers ?? [];

const getSelectedOffers = ({ point, offers }) => {
  const offersByType = getOffersByType({ offers, point });

  if (offersByType.length === 0) {
    return [];
  }

  return offersByType.filter(({ id }) => point.offers.includes(id));
};

const hasDetailsDestination = ({ point, destinations }) => {
  const { description = '', pictures = [] } =
    getSelectedDestination({
      point,
      destinations,
    }) ?? {};
  return description.length !== 0 || pictures.length !== 0;
};

const hasNameInDestinations = ({ name, destinations }) =>
  Boolean(
    destinations.find(
      ({ name: nameDestination }) =>
        nameDestination.toLowerCase() === name.toLowerCase()
    )
  );

const isPointFuture = ({ dateFrom }) => dayjs().isBefore(dateFrom);

const isPointPresent = ({ dateFrom, dateTo }) =>
  dayjs().isAfter(dateFrom) && dayjs().isBefore(dateTo);

const isPointPast = ({ dateTo }) => dayjs().isAfter(dateTo);

const getDurationPoint = (dateFrom, dateTo) =>
  dayjs(dateTo).diff(dayjs(dateFrom));

const compareByDuration = (pointA, pointB) => {
  const durrationPointA = getDurationPoint(pointA.dateFrom, pointA.dateTo);
  const durrationPointB = getDurationPoint(pointB.dateFrom, pointB.dateTo);

  return durrationPointB - durrationPointA;
};

const isAllowedSortingType = (sortingType) =>
  ALLOWED_SORTING_TYPES.includes(sortingType);

const compareByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

export {
  humanizeDateCalendarFormat,
  humanizeDateFormat,
  humanizeDurationEvent,
  isDatesEqual,
  getNameDestination,
  getOffersByType,
  getSelectedOffers,
  getSelectedDestination,
  isPointFuture,
  isPointPresent,
  isPointPast,
  compareByPrice,
  compareByDuration,
  hasDetailsDestination,
  getDestinationIdByName,
  hasNameInDestinations,
  isAllowedSortingType,
};
