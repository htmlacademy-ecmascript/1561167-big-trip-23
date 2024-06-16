import BoardView from '../view/board-view';
import PointListView from '../view/point-list-view';
import SortView from '../view/sort-view';
import { remove, render } from '../framework/render';
import NoPointView from '../view/no-point-view';
import PointPresenter from './point-presenter';
import {
  DEFAULT_FILTER_TYPE,
  DEFAULT_SORTING_TYPE,
  SortingType,
  TimeLimit,
  UpdateType,
  UserAction,
} from '../const';
import {
  compareByDate,
  compareByDuration,
  compareByPrice,
} from '../utils/utils';
import { filter } from '../utils/filter';
import NewPointPresenter from './new-point-presenter';
import LoadingView from '../view/loading-view';
import UiBlocker from '../framework/ui-blocker/ui-blocker';
import NoLoadView from '../view/no-load-view';

export default class BoardPresenter {
  #boardContainer = null;

  #tripModel = null;
  #filterModel = null;

  #boardComponent = new BoardView();
  #pointListComponent = new PointListView();
  #loadingComponent = new LoadingView();
  #noLoadComponent = new NoLoadView();
  #noPointComponent = null;

  #pointPresenters = new Map();
  #newPointPresenter = null;

  #sortComponent = null;
  #currentSortType = DEFAULT_SORTING_TYPE;
  #filterType = DEFAULT_FILTER_TYPE;

  #onNewPointDestroy = null;

  #isLoading = true;

  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT,
  });

  constructor({ boardContainer, tripModel, filterModel, onNewPointDestroy }) {
    this.#boardContainer = boardContainer;
    this.#tripModel = tripModel;
    this.#filterModel = filterModel;
    this.#onNewPointDestroy = onNewPointDestroy;

    this.#tripModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    const points = this.#tripModel.points;
    this.#filterType = this.#filterModel.filter;
    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortingType.TIME:
        return filteredPoints.sort(compareByDuration);
      case SortingType.PRICE:
        return filteredPoints.sort(compareByPrice);
      default:
        return filteredPoints.sort(compareByDate);
    }
  }

  get destinations() {
    return this.#tripModel.destinations;
  }

  get offers() {
    return this.#tripModel.offers;
  }

  init = () => {
    this.#renderBoard();
  };

  createPoint = () => {
    render(this.#pointListComponent, this.#boardComponent.element);
    this.#currentSortType = DEFAULT_SORTING_TYPE;
    this.#filterModel.setFilter(UpdateType.MAJOR, DEFAULT_FILTER_TYPE);
    this.#newPointPresenter.init();
  };

  #renderBoard = (isCreate = false) => {
    render(this.#boardComponent, this.#boardContainer);

    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    if (
      this.#tripModel.isServerUnavailable ||
      (this.points.length === 0 && !isCreate)
    ) {
      this.#renderNoPoint();
      return;
    }

    this.#renderSort();
    render(this.#pointListComponent, this.#boardComponent.element);
    this.#renderPoints(this.points);
  };

  #renderPoints = (points) =>
    points.forEach((point) => this.#renderPoint(point));

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListComponent.element,
      offers: this.offers,
      destinations: this.destinations,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #renderSort = () => {
    this.#sortComponent = new SortView({
      defaultSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(this.#sortComponent, this.#boardComponent.element);
  };

  #renderNoPoint = () => {
    this.#noPointComponent = new NoPointView({ filterType: this.#filterType });
    render(this.#noPointComponent, this.#boardComponent.element);
  };

  #renderLoading = () =>
    render(this.#loadingComponent, this.#boardComponent.element);

  #renderNoLoad = () =>
    render(this.#noLoadComponent, this.#boardComponent.element);

  #clearBoard = (resetSortType = false) => {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#loadingComponent);
    if (this.#noPointComponent !== null) {
      remove(this.#noPointComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortingType.DEFAULT;
    }
  };

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenters.get(update.id).setSaving();
        try {
          await this.#tripModel.updatePoint(updateType, update);
        } catch (error) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#tripModel.addPoint(updateType, update);
        } catch (error) {
          this.#newPointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenters.get(update.id).setDeleting();
        try {
          await this.#tripModel.deletePoint(updateType, update);
        } catch (error) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
    }
    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard(true);
        this.#renderBoard(true);
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);

        if (this.#tripModel.isServerUnavailable) {
          this.#renderNoLoad();
          return;
        }

        this.#newPointPresenter = new NewPointPresenter({
          pointListContainer: this.#pointListComponent.element,
          destinations: this.destinations,
          offers: this.offers,
          onDataChange: this.#handleViewAction,
          onDestroy: this.#onNewPointDestroy,
        });
        this.#renderBoard();
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearBoard();
    this.#renderBoard();
  };

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}
