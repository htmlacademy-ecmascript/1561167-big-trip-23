import { loadDestinations, loadOffers, loadPoints } from '../mock/mock';

export default class TripModel {
  get points() {
    return loadPoints();
  }

  get offers() {
    return loadOffers();
  }

  get destinations() {
    return loadDestinations();
  }
}
