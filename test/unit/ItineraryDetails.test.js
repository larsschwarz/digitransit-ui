import { expect } from 'chai';
import { describe, it } from 'mocha';
import React from 'react';
import { shallowWithIntl } from './helpers/mock-intl-enzyme';
import { mockContext } from './helpers/mock-context';

import { Component as ItineraryDetails } from '../../app/component/itinerary/ItineraryDetails';
import SecondaryButton from '../../app/component/SecondaryButton';
import dt2830 from './test-data/dt2830';

const followItinerary = () => {};

describe('<ItineraryDetails />', () => {
  it('should render the container div', () => {
    const props = {
      itinerary: dt2830,
      focusToPoint: () => {},
      focusToLeg: () => {},
      openSettings: () => {},
      showCanceledLegsBanner: false,
      plan: {
        date: 19700101,
      },
      isMobile: false,
      currentTime: 0,
      lang: 'fi',
    };
    const wrapper = shallowWithIntl(<ItineraryDetails {...props} />, {
      context: { ...mockContext },
    });
    expect(wrapper.find('.itinerary-tab').length).to.equal(1);
  });

  it('should show secondary button', () => {
    const wrapper = shallowWithIntl(
      <SecondaryButton
        ariaLabel="follow"
        buttonName="followtheitinerary"
        buttonClickAction={followItinerary}
        buttonIcon="icon.icon_mapMarker-via-map"
        smallSize
      />,
      { context: { ...mockContext } },
    );
    expect(wrapper.find('.secondary-button').length).to.equal(1);
  });
});
