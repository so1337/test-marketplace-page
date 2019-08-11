import React from 'react';
import PropTypes from 'prop-types';

import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import google from '../../assets/images/google.svg';
import { formatNumberToK } from '../../helpers/formatters';

function SocialReach({ type, amount }) {
  let logo;
  let stats;
  const maxAmount = amount.split('_')[1];
  switch (type) {
    case 'instagram': logo = instagram; stats = `${formatNumberToK(maxAmount)} followers`;
      break;
    case 'facebook': logo = facebook; stats = `${formatNumberToK(maxAmount)} likes`;
      break;
    case 'google-analytics': logo = google; stats = `${formatNumberToK(maxAmount)} views`;
      break;
    default: logo = google; stats = '0';
  }
  return (
    <div className="media-item">
      <img src={logo} className="media-logo" alt="social media logo" />
      <span className="media-amount">{stats}</span>
    </div>
  );
}

SocialReach.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
};

SocialReach.defaultProps = {
  type: 'google',
  amount: '0',
};


export default SocialReach;
