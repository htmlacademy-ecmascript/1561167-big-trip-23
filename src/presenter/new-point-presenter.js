import { nanoid } from 'nanoid';
import PointEditView from '../view/point-edit-view';
import { RenderPosition, remove, render } from '../framework/render';
import { UpdateType, UserAction } from '../const';

export default class NewPointPresenter {
  #pointListContainer = null;

  #destinatios = null;
  #offers = null;
  #pointEditComponent = null;

  #handleDataChange = null;
  #handleDestroy = null;

  constructor(parameters) {
    const {
      pointListContainer,
      destinations,
      offers,
      onDataChange,
      onDestroy,
    } = parameters;

    this.#pointListContainer = pointListContainer;
    this.#destinatios = destinations;
    this.#offers = offers;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init() {
    if (this.#pointEditComponent !== null) {
      return;
    }

    this.#pointEditComponent = new PointEditView({
      destinations: this.#destinatios,
      offers: this.#offers,
      isNewPoint: true,
      onFormSubmit: this.#handleFormSubmit,
      onFormDeleteClick: this.#handleDeleteClick,
    });

    render(
      this.#pointEditComponent,
      this.#pointListContainer,
      RenderPosition.AFTERBEGIN
    );

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#pointEditComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#pointEditComponent);
    this.#pointEditComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (point) => {
    const newPoint = {
      id: nanoid(),
      ...point,
    };
    this.#handleDataChange(UserAction.ADD_POINT, UpdateType.MINOR, newPoint);
    this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
