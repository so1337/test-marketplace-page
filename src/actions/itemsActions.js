export const ADD_ITEM = 'ADD_ITEM';
export const SET_ITEMS = 'SET_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

export function setItems(itemsArray) {
  return { type: SET_ITEMS, value: itemsArray };
}
export function addItem(item) {
  return { type: ADD_ITEM, value: item };
}
export function deleteItem(index) {
  return { type: DELETE_ITEM, value: index };
}
