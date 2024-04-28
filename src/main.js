import BoardPresenter from './presenter/board-presenter';
import { render } from './render';
import FilterView from './view/filter-view';
import NewPointButtonView from './view/new-point-button-view';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const controlsFiltersElement = siteHeaderElement.querySelector(
  '.trip-controls__filters'
);
const boardContainerElement = siteMainElement.querySelector(
  '.page-body__container'
);

const boardPresenter = new BoardPresenter({
  boardContainer: boardContainerElement,
});

render(new FilterView(), controlsFiltersElement);
render(new NewPointButtonView(), siteHeaderElement);

boardPresenter.init();
