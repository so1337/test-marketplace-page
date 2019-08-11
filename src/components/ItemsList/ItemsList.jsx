
import { useSelector } from 'react-redux';
import React from 'react';
import uuid from 'uuid/v4';
import Item from './Item';

function ItemsList() {
  const items = useSelector(state => state.items);
  return (
    <div className="items">
      {items && items.map(item => (<Item key={uuid()} logo={item.brand.image} reach={item.channels} cover={item.image} reward={item.reward} title={item.title} />))}
    </div>
  );
}

export default ItemsList;
