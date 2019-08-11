import React from 'react';

import DropdownSelector from '../../components/DropdownSelector/DropdownSelector';
import ItemsList from '../../components/ItemsList/ItemsList';

function Marketplace() {
  return (
    <div className="marketplace-content">
      <div className="controls">
        <h1 className="title">Marketplace</h1>
        <DropdownSelector />
      </div>
      <ItemsList />
    </div>
  );
}

export default Marketplace;
