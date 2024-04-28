import { FilterType } from '../const';
import { createElement } from '../render';

const createFiltetItemTemplate = (filterType, isCurrent) => `
  <div class="trip-filters__filter">
    <input id="filter-${filterType}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio" name="trip-filter"
      value="${filterType}"
      ${isCurrent ? 'checked' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-${filterType}">${filterType}</label>
  </div>
`;

const createFilterTemplate = () => {
  const filterItemTemplate = Object.values(FilterType)
    .map((filter, index) => createFiltetItemTemplate(filter, index === 0))
    .join('');

  return `
    <form class="trip-filters" action="#" method="get">
      ${filterItemTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
};

export default class FilterView {
  getTemplate = () => createFilterTemplate();

  getElement = () => {
    if (this.element !== null) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  };

  removeElement = () => (this.element = null);
}
