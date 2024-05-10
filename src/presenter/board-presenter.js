import BoardView from '../view/board-view';
import PointListView from '../view/point-list-view';
import SortView from '../view/sort-view';
import { render } from '../framework/render';
import NoPointView from '../view/no-point-view';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common';

export default class BoardPresenter {
  #boardContainer = null;
  #tripModel = null;

  #boardComponent = new BoardView();
  #pointListComponent = new PointListView();

  #boardPoints = [];
  #pointPresenters = new Map();

  #sortComponent = new SortView();
  #noPointComponent = new NoPointView();

  constructor({ boardContainer, tripModel }) {
    this.#boardContainer = boardContainer;
    this.#tripModel = tripModel;
  }

  init = () => {
    this.#boardPoints = [...this.#tripModel.points];
    this.#renderBoard();
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

  #clearPointList = () => {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  };

  #renderPoints = () =>
    this.#boardPoints.forEach((point) => this.#renderPoint(point));

  #renderSort = () => render(this.#sortComponent, this.#boardComponent.element);

  #renderNoPoint = () =>
    render(this.#noPointComponent, this.#boardComponent.element);

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListComponent.element,
      offers: this.#tripModel.offers,
      destinations: this.#tripModel.destinations,
      onDataChange: this.#handlePointChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #handlePointChange = (updatedPoint) => {
    this.#boardPoints = updateItem(updatedPoint, this.#boardPoints);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };
}
