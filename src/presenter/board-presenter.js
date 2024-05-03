import { render } from '../render';
import BoardView from '../view/board-view';
import PointEditView from '../view/point-edit-view';
import PointView from '../view/point-view';
import PointListView from '../view/point-list-view';
import SortView from '../view/sort-view';

export default class BoardPresenter {
  boardComponent = new BoardView();
  pointListComponent = new PointListView();

  constructor({ boardContainer, tripModel }) {
    this.boardContainer = boardContainer;
    this.tripModel = tripModel;
  }

  init = () => {
    this.boardPoints = [...this.tripModel.points];
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.pointListComponent, this.boardComponent.getElement());

    render(
      new PointEditView({
        point: this.boardPoints[11],
        destinations: this.tripModel.destinations,
        offers: this.tripModel.offers,
      }),
      this.pointListComponent.getElement()
    );
    for (let i = 1; i < this.boardPoints.length; i++) {
      render(
        new PointView({
          point: this.boardPoints[i],
          destinations: this.tripModel.destinations,
          offers: this.tripModel.offers,
        }),
        this.pointListComponent.getElement()
      );
    }
  };
}
