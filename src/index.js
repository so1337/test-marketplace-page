import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import Marketplace from './pages/Marketplace/Marketplace';
import MainLayout from './layout/MainLayout';
import * as serviceWorker from './serviceWorker';
import { getItems } from './services/api';
import { setItems } from './actions/itemsActions';

const store = createStore(rootReducer);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getItems();
        dispatch(setItems(items.data.campaigns));
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, [dispatch]);

  return (
    <MainLayout><Marketplace /></MainLayout>
  );
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
