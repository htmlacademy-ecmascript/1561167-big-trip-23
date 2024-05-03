const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

const DAY_MONTH_TEMPLATE = 'DD';
const SHORT_DATE_TEMPLATE = 'DD MMM';
const INVERTED_SHORT_DATE_TEMPLATE = 'MMM DD';
const TIME_TEMPLATE = 'HH:mm';
const LONG_EVENT_DURATION_TEMPLATE = 'DD[D] HH[H] mm[M]';
const AVERAGE_EVENT_DURATION_TEMPLATE = 'HH[H] mm[M]';
const SHORT_EVENT_DURATION_TEMPLATE = 'mm[M]';
const DATE_EVENT_TEMPLATE = 'DD/MM/YY hh:mm';
const MACHINE_DATE_TEMPLATE = 'YYYY-MM-DD';
const FULL_MACHINE_DATE_TEMPLATE = `${MACHINE_DATE_TEMPLATE}[T]${TIME_TEMPLATE}`;

const PointType = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECK: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant',
};

const DEFAULT_POINT_TYPE = PointType.FLIGHT;

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

const BLANK_POINT = {
  id: null,
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_POINT_TYPE,
};

export {
  MSEC_IN_DAY,
  MSEC_IN_HOUR,
  AVERAGE_EVENT_DURATION_TEMPLATE,
  LONG_EVENT_DURATION_TEMPLATE,
  INVERTED_SHORT_DATE_TEMPLATE,
  SHORT_EVENT_DURATION_TEMPLATE,
  TIME_TEMPLATE,
  DATE_EVENT_TEMPLATE,
  DAY_MONTH_TEMPLATE,
  SHORT_DATE_TEMPLATE,
  MACHINE_DATE_TEMPLATE,
  FULL_MACHINE_DATE_TEMPLATE,
  PointType,
  DEFAULT_POINT_TYPE,
  FilterType,
  SortType,
  BLANK_POINT,
};
