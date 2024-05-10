import { ModeCard } from '../const';
import { remove, render, replace } from '../framework/render';
import PointEditView from '../view/point-edit-view';
import PoinView from '../view/point-view';

export default class PointPresenter {
  #pointListContainer = null;

  #point = null;
  #offers = [];
  #destinatios = [];

  #pointComponent = null;
  #pointEditComponent = null;

  #handleDataChange = null;

  #mode = ModeCard.DEFAULT;
  #handleModeChange = null;

  constructor({
    pointListContainer,
    offers,
    destinations,
    onDataChange,
    onModeChange,
  }) {
    this.#pointListContainer = pointListContainer;
    this.#offers = offers;
    this.#destinatios = destinations;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init = (point) => {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PoinView({
      point: this.#point,
      destinations: this.#destinatios,
      offers: this.#offers,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new PointEditView({
      point: this.#point,
      destinations: this.#destinatios,
      offers: this.#offers,
      onFormSubmit: this.#handleFormSubmit,
      onFormCloseClick: this.#handleFormCloseClick,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#mode === ModeCard.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === ModeCard.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  };

  resetView = () => {
    if (this.#mode !== ModeCard.DEFAULT) {
      this.#replaceFormToCard();
    }
  };

  destroy = () => {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  };

  #replaceCardToForm = () => {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = ModeCard.EDITING;
  };

  #replaceFormToCard = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = ModeCard.DEFAULT;
  };

  #handleFavoriteClick = () =>
    this.#handleDataChange({
      ...this.#point,
      isFavorite: !this.#point.isFavorite,
    });

  #handleFormCloseClick = () => this.#replaceFormToCard();

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToCard();
  };

  #handleEditClick = () => this.#replaceCardToForm();

  #escKeyDownHandler = (evt) => {
    if (evt.key !== 'Escape') {
      return;
    }

    evt.preventDefault();
    this.#replaceFormToCard();
  };
}
