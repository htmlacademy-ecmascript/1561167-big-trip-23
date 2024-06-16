import { render } from './framework/render';
import TripModel from './model/trip-model';
import BoardPresenter from './presenter/board-presenter';
import FilterModel from './model/filter-model';
import NewPointButtonView from './view/new-point-button-view';
import FilterPresenter from './presenter/filter-presenter';
import TripInfoPresenter from './presenter/trip-info-presenter';
import TripApiService from './trip-api-service';
import { AUTHORIZATION, END_POINT } from './const';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const controlsFiltersElement = siteHeaderElement.querySelector(
  '.trip-controls__filters'
);
const boardContainerElement = siteMainElement.querySelector(
  '.page-body__container'
);

const tripModel = new TripModel({
  tripApiService: new TripApiService(END_POINT, AUTHORIZATION),
});
const filterModel = new FilterModel();
const filterPresenter = new FilterPresenter({
  filterContainer: controlsFiltersElement,
  tripModel,
  filterModel,
});
const tripInfoPresenter = new TripInfoPresenter({
  tripModel,
  tripInfoContainer: siteHeaderElement,
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
  newPointButtonComponent.element.toggleAttribute('disabled', false);
}
function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.toggleAttribute('disabled', true);
}

newPointButtonComponent.element.toggleAttribute('disabled', true);
render(newPointButtonComponent, siteHeaderElement);

tripInfoPresenter.init();
filterPresenter.init();
boardPresenter.init();

tripModel.init().finally(() => {
  if (!tripModel.isServerUnavailable) {
    newPointButtonComponent.element.toggleAttribute('disabled', false);
  }
});
