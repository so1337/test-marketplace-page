
import {
  ADD_ITEM,
  SET_ITEMS,
  DELETE_ITEM,
} from '../actions/itemsActions';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_ITEM: {
      return [
        ...state,
        action.value,
      ];
    }
    case SET_ITEMS: {
      return action.value;
    }
    case DELETE_ITEM: {
      const clonedState = [...state];
      clonedState.splice(action.value, 1);
      return clonedState;
    }
    default: {
      return [...state];
    }
  }
};
