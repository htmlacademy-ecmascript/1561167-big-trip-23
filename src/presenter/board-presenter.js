import BoardView from '../view/board-view';
import PointEditView from '../view/point-edit-view';
import PointView from '../view/point-view';
import PointListView from '../view/point-list-view';
import SortView from '../view/sort-view';
import { render } from '../framework/render';

export default class BoardPresenter {
  #boardContainer = null;
  #tripModel = null;

  #boardComponent = new BoardView();
  #pointListComponent = new PointListView();

  #boardPoints = null;

  constructor({ boardContainer, tripModel }) {
    this.#boardContainer = boardContainer;
    this.#tripModel = tripModel;
  }

  init = () => {
    this.#boardPoints = [...this.#tripModel.points];
    render(this.#boardComponent, this.#boardContainer);
    render(new SortView(), this.#boardComponent.element);
    render(this.#pointListComponent, this.#boardComponent.element);

    render(
      new PointEditView({
        point: this.#boardPoints[11],
        destinations: this.#tripModel.destinations,
        offers: this.#tripModel.offers,
      }),
      this.#pointListComponent.element
    );
    for (let i = 1; i < this.#boardPoints.length; i++) {
      render(
        new PointView({
          point: this.#boardPoints[i],
          destinations: this.#tripModel.destinations,
          offers: this.#tripModel.offers,
        }),
        this.#pointListComponent.element
      );
    }
  };
}
