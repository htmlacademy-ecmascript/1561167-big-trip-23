import { createElement } from '../render';

const createBoardTemplate = () => `
  <section class="trip-events">
    <h2 class="visually-hidden">Trip events</h2>
  </section>
`;

export default class BoardView {
  getTemplate = () => createBoardTemplate();

  getElement = () => {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  };

  removeElement = () => (this.element = null);
}
