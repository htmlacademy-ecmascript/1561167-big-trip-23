import { SortingType } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createSortItemTemplate = ({ type, isExecutable }, isChecked) => `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}"
      class="trip-sort__input visually-hidden"
      type="radio"
      name="tri p-sort"
      value="sort-${type}"
      ${isChecked ? 'checked' : ''}
      ${isExecutable ? '' : 'disabled'}>
    <label class="trip-sort__btn"
      for="sort-${type}"
      data-sort-type="${type}">${type}</label>
  </div>
  `;

const createSortTemplate = (defaultSortType) => {
  const sortItemTemplate = Object.entries(SortingType)
    .map(([sorting, [type, isExecutable]]) =>
      createSortItemTemplate(
        { type, isExecutable },
        sorting.toLowerCase() === defaultSortType
      )
    )
    .join('');

  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortItemTemplate}
    </form>
  `;
};

export default class SortView extends AbstractView {
  #defaultSortType = null;
  #handleSortTypeChange = null;
  #sortInputElements = null;

  constructor({ onSortTypeChange, defaultSortType }) {
    super();
    this.#defaultSortType = defaultSortType;
    this.#handleSortTypeChange = onSortTypeChange;

    this.#sortInputElements = [
      ...this.element.querySelectorAll('.trip-sort__input'),
    ];

    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#defaultSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    if (!evt.target.dataset.sortType) {
      return;
    }

    const targetSortType = evt.target.dataset.sortType;
    const [type, isExecutable] = SortingType[targetSortType.toUpperCase()];
    evt.preventDefault();

    if (isExecutable) {
      this.#sortInputElements.forEach((element) => {
        element.checked = element.id === `sort-${targetSortType}`;
      });
      this.#handleSortTypeChange(type);
    }
  };
}
