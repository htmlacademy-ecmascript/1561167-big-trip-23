import { SortType } from '../const';
import { createElement } from '../render';

const createSortItemTemplate = (sortType, isCurrent) => `
  <div class="trip-sort__item  trip-sort__item--${sortType}">
    <input id="sort-${sortType}"
      class="trip-sort__input visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-${sortType}"
      ${isCurrent ? 'checked' : ''}>
    <label class="trip-sort__btn" for="sort-${sortType}">${sortType}</label>
  </div>
`;

const createSortTemplate = () => {
  const sortItemTemplate = Object.values(SortType)
    .map((sort, index) => createSortItemTemplate(sort, index === 0))
    .join('');

  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortItemTemplate}
    </form>
  `;
};

export default class SortView {
  getTemplate = () => createSortTemplate();

  getElement = () => {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  };

  removeElement = () => (this.element = null);
}
