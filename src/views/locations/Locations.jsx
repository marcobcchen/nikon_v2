import React from 'react';
import {
  StyledWrapper,
  StyledContainer,
  StyledSuperTitle,
} from '@/components/Global/';
import {
  StyledLocationsConatiner,
} from './style';

function Locations() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLocationsConatiner>
          <StyledSuperTitle>
            <h2>搜尋店舖與預約</h2>
          </StyledSuperTitle>
          Locations
        </StyledLocationsConatiner>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Locations;
