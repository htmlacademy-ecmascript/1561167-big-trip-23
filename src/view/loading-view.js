import { TEXT_SHOW_LOADING } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createLoadingTemplate = () => `
    <p class="trip-events__msg">${TEXT_SHOW_LOADING}</p>
  `;

export default class LoadingView extends AbstractView {
  get template() {
    return createLoadingTemplate();
  }
}
