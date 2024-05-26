import BoardView from '../view/board-view';
import PointListView from '../view/point-list-view';
import SortView from '../view/sort-view';
import { remove, render } from '../framework/render';
import NoPointView from '../view/no-point-view';
import PointPresenter from './point-presenter';
import {
  DEFAULT_SORTING_TYPE,
  SortingType,
  UpdateType,
  UserAction,
} from '../const';
import { compareByDuration, compareByPrice } from '../utils/utils';
import { filter } from '../utils/filter';

export default class BoardPresenter {
  #boardContainer = null;

  #tripModel = null;
  #filterModel = null;

  #boardComponent = new BoardView();
  #pointListComponent = new PointListView();

  #pointPresenters = new Map();

  #sortComponent = null;
  #currentSortType = DEFAULT_SORTING_TYPE;

  #noPointComponent = new NoPointView();

  constructor({ boardContainer, tripModel, filterModel }) {
    this.#boardContainer = boardContainer;
    this.#tripModel = tripModel;
    this.#filterModel = filterModel;

    this.#tripModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    const currentFilter = this.#filterModel.filter;
    const points = this.#tripModel.points;
    const filteredPoints = filter[currentFilter](points);

    switch (this.#currentSortType) {
      case SortingType.TIME:
        return filteredPoints.sort(compareByDuration);
      case SortingType.PRICE:
        return filteredPoints.sort(compareByPrice);
      default:
        return filteredPoints;
    }
  }

  init = () => {
    this.#renderBoard();
  };

  #renderBoard = () => {
    render(this.#boardComponent, this.#boardContainer);

    if (this.points.length === 0) {
      this.#renderNoPoint();
      return;
    }

    this.#renderSort();
    render(this.#pointListComponent, this.#boardComponent.element);
    this.#renderPoints(this.points);
  };

  #renderPoints = (points) =>
    points.forEach((point) => this.#renderPoint(point));

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListComponent.element,
      offers: this.#tripModel.offers,
      destinations: this.#tripModel.destinations,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #renderSort = () => {
    this.#sortComponent = new SortView({
      defaultSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(this.#sortComponent, this.#boardComponent.element);
  };

  #renderNoPoint = () =>
    render(this.#noPointComponent, this.#boardComponent.element);

  #clearBoard = (resetSortType = false) => {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#noPointComponent);

    if (resetSortType) {
      this.#currentSortType = SortingType.DEFAULT;
    }
  };

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#tripModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#tripModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#tripModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard(true);
        this.#renderBoard();
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearBoard();
    this.#renderBoard();
  };

  #handleModeChange = () =>
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
}
