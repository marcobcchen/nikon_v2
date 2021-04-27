import React from 'react';
import GoogleMapReact from 'google-map-react';

import {
  StyledWrapper,
  StyledContainer,
  StyledSuperTitle,
} from '@/components/Global/';
import {
  StyledLocationsConatiner, StyledMapContainer, StyledController, StyledMap,
} from './style';

import MapStyle from './mapStyle';

function Locations() {
  const AnyReactComponent = ({ text }) => (
    <p>{text}</p>
  );

  const handleApiLoaded = (map, maps) => {
    console.log(map, maps);
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLocationsConatiner>
          <StyledSuperTitle>
            <h2>搜尋店舖與預約</h2>
          </StyledSuperTitle>

          <StyledMapContainer>
            <StyledController>
              controller
            </StyledController>
            <StyledMap>
              <GoogleMapReact
                className="map"
                bootstrapURLKeys={{ key: 'AIzaSyCETbdHb2ETD9PAQ086JgtYE6p_ItV1za4' }}
                defaultCenter={{
                  lat: 25.048766179979573,
                  lng: 121.53667648104674,
                }}
                defaultZoom={13}
                options={{
                  fullscreenControl: false,
                  styles: MapStyle,
                }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
              >
                <AnyReactComponent
                  lat={25.048766179979573}
                  lng={121.53667648104674}
                  text="My Marker"
                />
              </GoogleMapReact>
            </StyledMap>
          </StyledMapContainer>
        </StyledLocationsConatiner>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Locations;
