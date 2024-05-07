import { SortType } from '../const';
import AbstractView from '../framework/view/abstract-view';

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

export default class SortView extends AbstractView {
  get template() {
    return createSortTemplate();
  }
}
