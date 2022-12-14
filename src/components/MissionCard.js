import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <h3 data-testid="mission-name">{name}</h3>
        <h3 data-testid="mission-year">{year}</h3>
        <h3 data-testid="mission-country">{country}</h3>
        <h3 data-testid="mission-destination">{destination}</h3>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};

export default MissionCard;
