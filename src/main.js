import { RenderPosition, render } from './framework/render';
import { generateFilter } from './mock/filter';
import TripModel from './model/trip-model';
import BoardPresenter from './presenter/board-presenter';
import FilterView from './view/filter-view';
import NewPointButtonView from './view/new-point-button-view';
import TripInfoView from './view/trip-info-view';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const controlsFiltersElement = siteHeaderElement.querySelector(
  '.trip-controls__filters'
);
const boardContainerElement = siteMainElement.querySelector(
  '.page-body__container'
);

const tripModel = new TripModel();
const boardPresenter = new BoardPresenter({
  boardContainer: boardContainerElement,
  tripModel,
});
const filters = generateFilter(tripModel.points);

render(
  new TripInfoView({
    points: tripModel.points,
    offers: tripModel.offers,
    destinations: tripModel.destinations,
  }),
  siteHeaderElement,
  RenderPosition.AFTERBEGIN
);
render(new FilterView({ filters }), controlsFiltersElement);
render(new NewPointButtonView(), siteHeaderElement);

boardPresenter.init();
