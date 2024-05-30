import { FilterType, UpdateType } from '../const';
import { remove, render, replace } from '../framework/render';
import { filter } from '../utils/filter';
import FilterView from '../view/filter-view';

export default class FilterPresenter {
  #filterContainer = null;
  #filterComponent = null;

  #filterModel = null;
  #tripModel = null;

  constructor({ filterContainer, filterModel, tripModel }) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#tripModel = tripModel;

    this.#filterModel.addObserver(this.#handleModelEvent);
    this.#tripModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const points = this.#tripModel.points;

    return Object.values(FilterType).map((type) => ({
      type,
      count: filter[type](points).length,
    }));
  }

  init = () => {
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters: this.filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange,
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  };

  #handleModelEvent = () => this.init();

  #handleFilterTypeChange = (filterType) => {
    if (filterType === this.#filterModel.filter) {
      return;
    }

    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
