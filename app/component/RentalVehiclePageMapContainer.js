import PropTypes from 'prop-types';
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import StopPageMap from './map/StopPageMap';
import { rentalVehicleShape } from '../util/shapes';

const RentalVehiclePageMapContainer = ({ rentalVehicle }) => {
  if (!rentalVehicle) {
    return false;
  }
  return <StopPageMap stop={rentalVehicle} scooter />;
};

RentalVehiclePageMapContainer.contextTypes = {
  config: PropTypes.shape({
    map: PropTypes.shape({
      tileSize: PropTypes.number,
      zoom: PropTypes.number,
    }),
  }),
};

RentalVehiclePageMapContainer.propTypes = {
  rentalVehicle: rentalVehicleShape,
};

RentalVehiclePageMapContainer.defaultProps = {
  rentalVehicle: undefined,
};

const containerComponent = createFragmentContainer(
  RentalVehiclePageMapContainer,
  {
    rentalVehicle: graphql`
      fragment RentalVehiclePageMapContainer_rentalVehicle on RentalVehicle {
        lat
        lon
        name
      }
    `,
  },
);

export {
  containerComponent as default,
  RentalVehiclePageMapContainer as Component,
};
