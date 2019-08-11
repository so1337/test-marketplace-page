import reducer from '../itemsReducer';
import { setItems, addItem, deleteItem } from '../../actions/itemsActions';

describe('itemsReducer reducer tests', () => {
  const testArray = [1, 2, 3];
  it('returns proper initial state on init call', () => {
    expect(reducer()).toEqual([]);
  });
  it('setting item on setItems action', () => {
    expect(reducer([], setItems(testArray))).toEqual(testArray);
  });
  it('adding item on addItem action', () => {
    const testItem = 4;
    expect(reducer(testArray, addItem(testItem))).toEqual([...testArray, testItem]);
  });
  it('removing item on deleteItem action', () => {
    const index = 0;
    expect(reducer(testArray, deleteItem(index))).toEqual(testArray.slice(1));
  });
});
