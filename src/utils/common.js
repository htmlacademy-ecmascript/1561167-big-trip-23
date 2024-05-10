const updateItem = (update, items) =>
  items.map((item) => (item.id === update.id ? update : item));

export { updateItem };
