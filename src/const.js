const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

const DAY_MONTH_TEMPLATE = 'DD';
const MONTH_TEMPLATE = 'MMM';
const SHORT_DATE_TEMPLATE = `${DAY_MONTH_TEMPLATE} ${MONTH_TEMPLATE}`;
const INVERTED_SHORT_DATE_TEMPLATE = `${MONTH_TEMPLATE} ${DAY_MONTH_TEMPLATE}`;
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

const DEFAULT_FILTER_TYPE = FilterType.EVERYTHING;

const NoPointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
};

const SortingType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

const ALLOWED_SORTING_TYPES = [
  SortingType.DAY,
  SortingType.TIME,
  SortingType.PRICE,
];

const DEFAULT_SORTING_TYPE = SortingType.DAY;

const BLANK_POINT = {
  basePrice: 0,
  dateFrom: new Date(),
  dateTo: new Date(),
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_POINT_TYPE,
};

const ModeCard = {
  CARD: 'card',
  EDITING: 'editing',
};

const UserAction = {
  UPDATE_POINT: 'update_point',
  ADD_POINT: 'add_point',
  DELETE_POINT: 'delete_point',
};

const UpdateType = {
  PATCH: 'patch',
  MINOR: 'minor',
  MAJOR: 'major',
  INIT: 'init',
};

const AUTHORIZATION = 'Basic kAq4CpbjRySqr5wWRQ';
const END_POINT = 'https://23.objects.htmlacademy.pro';

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const UrlHandle = {
  READ_POINTS: 'big-trip/points',
  READ_DESTINATIONS: 'big-trip/destinations',
  READ_OFFERS: 'big-trip/offers',
  CREATE: 'big-trip/points',
  UPDATE: 'big-trip/points',
  DELETE: 'big-trip/points',
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const TEXT_SHOW_LOADING = 'Loading...';
const TEXT_SHOW_FAILED_LOAD = 'Failed to load latest route information';

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
  MONTH_TEMPLATE,
  SHORT_DATE_TEMPLATE,
  MACHINE_DATE_TEMPLATE,
  FULL_MACHINE_DATE_TEMPLATE,
  PointType,
  DEFAULT_POINT_TYPE,
  FilterType,
  DEFAULT_FILTER_TYPE,
  NoPointsTextType,
  SortingType,
  DEFAULT_SORTING_TYPE,
  BLANK_POINT,
  ModeCard,
  ALLOWED_SORTING_TYPES,
  UserAction,
  UpdateType,
  AUTHORIZATION,
  END_POINT,
  Method,
  UrlHandle,
  TEXT_SHOW_LOADING,
  TEXT_SHOW_FAILED_LOAD,
  TimeLimit,
};
