import { Method, UrlHandle } from './const';
import ApiService from './framework/api-service';

export default class TripApiService extends ApiService {
  get points() {
    return this._load({ url: UrlHandle.READ_POINTS }).then(
      ApiService.parseResponse
    );
  }

  get destinations() {
    return this._load({ url: UrlHandle.READ_DESTINATIONS }).then(
      ApiService.parseResponse
    );
  }

  get offers() {
    return this._load({ url: UrlHandle.READ_OFFERS }).then(
      ApiService.parseResponse
    );
  }

  updatedPoint = async (point) => {
    const response = await this._load({
      url: `${UrlHandle.UPDATE}/${point.id}`,
      method: Method.PUT,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  };

  #adaptToServer = (point) => {
    const adaptedPoin = {
      ...point,
      ['base_price']: point.basePrice,
      ['date_from']:
        point.dateFrom instanceof Date ? point.dateFrom.toISOString() : null,
      ['date_to']:
        point.dateTo instanceof Date ? point.dateTo.toISOString() : null,
      ['is_favorite']: point.isFavorite,
    };

    delete adaptedPoin.basePrice;
    delete adaptedPoin.dateFrom;
    delete adaptedPoin.dateTo;
    delete adaptedPoin.isFavorite;

    return adaptedPoin;
  };
}
