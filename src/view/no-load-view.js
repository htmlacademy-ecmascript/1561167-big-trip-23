import { TEXT_SHOW_FAILED_LOAD } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createLoadingTemplate = () => `
    <p class="trip-events__msg">${TEXT_SHOW_FAILED_LOAD}</p>
  `;

export default class NoLoadView extends AbstractView {
  get template() {
    return createLoadingTemplate();
  }
}
