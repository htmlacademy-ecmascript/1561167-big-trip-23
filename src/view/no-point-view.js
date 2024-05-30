import { NoPointsTextType } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createNoPointTemplate = (filterType) => `
    <p class="trip-events__msg">${NoPointsTextType[filterType]}</p>
  `;

export default class NoPointView extends AbstractView {
  #filterType = null;

  constructor({ filterType }) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointTemplate(this.#filterType);
  }
}
