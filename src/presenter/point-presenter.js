import { ModeCard, UpdateType, UserAction } from '../const';
import { remove, render, replace } from '../framework/render';
import { isDatesEqual } from '../utils/utils';
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

  #mode = ModeCard.CARD;
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
      onFormDeleteClick: this.#handleDeleteClick,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#mode === ModeCard.CARD) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === ModeCard.EDITING) {
      replace(this.#pointComponent, prevPointEditComponent);
      this.#mode = ModeCard.CARD;
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  };

  setAborting() {
    if (this.#mode === ModeCard.CARD) {
      this.#pointComponent.shake();
      return;
    }

    const resetFormState = () => {
      this.#pointEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#pointEditComponent.shake(resetFormState);
  }

  setSaving = () => {
    if (this.#mode === ModeCard.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  };

  setDeleting = () => {
    if (this.#mode === ModeCard.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  };

  resetView = () => {
    if (this.#mode !== ModeCard.CARD) {
      this.#pointEditComponent.reset(this.#point);
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
    this.#mode = ModeCard.CARD;
  };

  #handleFavoriteClick = () =>
    this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.PATCH, {
      ...this.#point,
      isFavorite: !this.#point.isFavorite,
    });

  #handleFormCloseClick = () => {
    this.#pointEditComponent.reset(this.#point);
    this.#replaceFormToCard();
  };

  #handleFormSubmit = (update) => {
    const isMinorUpdate =
      !isDatesEqual(this.#point.dateFrom, update.dateFrom) ||
      !isDatesEqual(this.#point.dateTo, update.dateTo);

    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
      update
    );
    // this.#replaceFormToCard();
  };

  #handleEditClick = () => this.#replaceCardToForm();

  #escKeyDownHandler = (evt) => {
    if (evt.key !== 'Escape' || evt.key === 'Esc') {
      return;
    }

    evt.preventDefault();
    this.#pointEditComponent.reset(this.#point);
    this.#replaceFormToCard();
  };

  #handleDeleteClick = (point) =>
    this.#handleDataChange(UserAction.DELETE_POINT, UpdateType.MINOR, point);
}
