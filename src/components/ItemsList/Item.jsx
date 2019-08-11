import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import SocialReach from './SocialReach';

const Item = ({
  reward, title, cover, logo, reach,
}) => (
  <div className="marketplace-item">
    <div className="cover">
      <img src={cover} alt="item cover" />
    </div>
    <div className="description">
      <div className="info">
        <p className="title">{title}</p>
        <span className="reward">{reward}</span>
      </div>
      <div className="logo">
        <img src={logo} alt="company logo" />
      </div>
    </div>
    <div className="reach">
      {reach.map(media => <SocialReach key={uuid()} type={media.channel.slug} amount={media.reach} />)}
    </div>
  </div>
);
Item.propTypes = {
  reward: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  reach: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    reach: PropTypes.string,
    channel: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
  })),
};

Item.defaultProps = {
  reach: [],
};

export default Item;
