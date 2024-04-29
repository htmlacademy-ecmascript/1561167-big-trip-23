import { loadDestinations, loadOffers, loadPoints } from '../mock/mock';

export default class tripModel {
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
