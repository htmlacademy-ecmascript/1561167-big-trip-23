import { RenderPosition, render } from './framework/render';
import TripModel from './model/trip-model';
import BoardPresenter from './presenter/board-presenter';
import FilterModel from './model/filter-model';
import NewPointButtonView from './view/new-point-button-view';
import TripInfoView from './view/trip-info-view';
import FilterPresenter from './presenter/filter-presenter';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const controlsFiltersElement = siteHeaderElement.querySelector(
  '.trip-controls__filters'
);
const boardContainerElement = siteMainElement.querySelector(
  '.page-body__container'
);

const tripModel = new TripModel();
const filterModel = new FilterModel();
const filterPresenter = new FilterPresenter({
  filterContainer: controlsFiltersElement,
  tripModel,
  filterModel,
});
const boardPresenter = new BoardPresenter({
  boardContainer: boardContainerElement,
  tripModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose,
});
const newPointButtonComponent = new NewPointButtonView({
  onNewPointClick: handleNewPointButtonClick,
});
function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}
function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(
  new TripInfoView({
    points: tripModel.points,
    offers: tripModel.offers,
    destinations: tripModel.destinations,
  }),
  siteHeaderElement,
  RenderPosition.AFTERBEGIN
);

render(newPointButtonComponent, siteHeaderElement);

filterPresenter.init();
boardPresenter.init();
