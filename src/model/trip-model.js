import Observable from '../framework/observable';
import { loadDestinations, loadOffers, loadPoints } from '../mock/mock';

export default class TripModel extends Observable {
  #points = loadPoints();
  #offers = loadOffers();
  #destinations = loadDestinations();

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  updatePoint = (updateType, update) => {
    const index = this.#points.findIndex(({ id }) => id === update.id);

    if (index === -1) {
      throw new Error('Unable to update a non-existent point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  };

  addPoint = (updateType, update) => {
    this.#points = [update, ...this.#points];
    this._notify(updateType, update);
  };

  deletePoint = (updateType, update) => {
    const index = this.#points.findIndex(({ id }) => id === update.id);

    if (index === -1) {
      throw new Error('Unable to delete a non-existent point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  };
}
