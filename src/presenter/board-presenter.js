import BoardView from '../view/board-view';
import PointListView from '../view/point-list-view';
import SortView from '../view/sort-view';
import { render } from '../framework/render';
import NoPointView from '../view/no-point-view';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common';
import { DEFAULT_SORTING_TYPE, SortingType } from '../const';
import { compareByDuration, compareByPrice } from '../utils/utils';

export default class BoardPresenter {
  #boardContainer = null;
  #tripModel = null;

  #boardComponent = new BoardView();
  #pointListComponent = new PointListView();

  #boardPoints = [];
  #sourcedBoardPoints = [];
  #pointPresenters = new Map();

  #sortComponent = null;
  #currentSortType = DEFAULT_SORTING_TYPE;

  #noPointComponent = new NoPointView();

  constructor({ boardContainer, tripModel }) {
    this.#boardContainer = boardContainer;
    this.#tripModel = tripModel;
  }

  get points() {
    return this.#tripModel.points;
  }

  init = () => {
    this.#boardPoints = [...this.#tripModel.points];
    this.#sourcedBoardPoints = [...this.#tripModel.points];
    this.#renderBoard();
  };

  #sortPoints = (sortType) => {
    switch (sortType) {
      case SortingType.TIME:
        this.#boardPoints.sort(compareByDuration);
        break;
      case SortingType.PRICE:
        this.#boardPoints.sort(compareByPrice);
        break;
      default:
        this.#boardPoints = [...this.#sourcedBoardPoints];
    }
    this.#currentSortType = sortType;
  };

  #clearPointList = () => {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  };

  #renderBoard = () => {
    render(this.#boardComponent, this.#boardContainer);

    if (this.#boardPoints.length === 0) {
      this.#renderNoPoint();
      return;
    }

    this.#renderSort();
    this.#renderPointList();
  };

  #renderPointList = () => {
    render(this.#pointListComponent, this.#boardComponent.element);
    this.#renderPoints();
  };

  #renderPoints = () =>
    this.#boardPoints.forEach((point) => this.#renderPoint(point));

  #renderSort = () => {
    this.#sortComponent = new SortView({
      defaultSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(this.#sortComponent, this.#boardComponent.element);
  };

  #renderNoPoint = () =>
    render(this.#noPointComponent, this.#boardComponent.element);

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListComponent.element,
      offers: this.#tripModel.offers,
      destinations: this.#tripModel.destinations,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #handlePointChange = (updatedPoint) => {
    this.#boardPoints = updateItem(updatedPoint, this.#boardPoints);
    this.#sourcedBoardPoints = updateItem(
      updatedPoint,
      this.#sourcedBoardPoints
    );
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPoints();
  };

  #handleModeChange = () =>
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
}
