import { loadDestinations, loadOffers, loadPoints } from '../mock/mock';

export default class TripModel {
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
}
