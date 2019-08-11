import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation/Navigation';

const MainLayout = ({ children }) => (
  <div className="app">
    <Navigation />
    <main>
      {children}
    </main>
  </div>
);
MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
    PropTypes.array,
  ]).isRequired,
};
export default MainLayout;
