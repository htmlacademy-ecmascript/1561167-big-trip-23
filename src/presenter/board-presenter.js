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

export default class BoardPresenter {
  #boardContainer = null;
  #tripModel = null;

  #boardComponent = new BoardView();
  #pointListComponent = new PointListView();

  #pointPresenters = new Map();

  #sortComponent = null;
  #currentSortType = DEFAULT_SORTING_TYPE;

  #noPointComponent = new NoPointView();

  constructor({ boardContainer, tripModel }) {
    this.#boardContainer = boardContainer;
    this.#tripModel = tripModel;

    this.#tripModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    switch (this.#currentSortType) {
      case SortingType.TIME:
        return [...this.#tripModel.points].sort(compareByDuration);
      case SortingType.PRICE:
        return [...this.#tripModel.points].sort(compareByPrice);
      default:
        return this.#tripModel.points;
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

  // #renderPointList = () => {
  //   render(this.#pointListComponent, this.#boardComponent.element);
  //   this.#renderPoints(this.points);
  // };

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

  // #clearPointList = () => {
  //   this.#pointPresenters.forEach((presenter) => presenter.destroy());
  //   this.#pointPresenters.clear();
  // };
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
        // this.#clearPointList();
        this.#clearBoard();
        // this.#renderPointList();
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
    // this.#clearPointList();
    this.#clearBoard();
    // this.#renderPointList();
    this.#renderBoard();
  };

  #handleModeChange = () =>
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
}
