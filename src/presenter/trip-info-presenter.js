import { RenderPosition, remove, render, replace } from '../framework/render';
import TripInfoView from '../view/trip-info-view';

export default class TripInfoPresenter {
  #tripInfoContainer = null;
  #tripModel = null;

  #tripInfoComponent = null;

  constructor({ tripModel, tripInfoContainer }) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#tripModel = tripModel;

    this.#tripModel.addObserver(this.#handleModelEvent);
  }

  init = () => {
    const prevTripInfoComponent = this.#tripInfoComponent;

    this.#tripInfoComponent = new TripInfoView({
      points: this.#tripModel.points,
      offers: this.#tripModel.offers,
      destinations: this.#tripModel.destinations,
    });

    if (prevTripInfoComponent === null) {
      render(
        this.#tripInfoComponent,
        this.#tripInfoContainer,
        RenderPosition.AFTERBEGIN
      );
      return;
    }

    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  };

  #handleModelEvent = () => {
    this.init();
  };
}
