import { SortTypes } from '../const';

const sort = SortTypes.reduce(
  (result, { type }) => ({ ...result, [type.toUpperCase()]: type }),
  {}
);

export { sort };
