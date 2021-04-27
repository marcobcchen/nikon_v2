import styled from 'styled-components';

export const StyledLocationsConatiner = styled.div`
  padding-top: 68px;
  
  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    padding-top: 72px;
  }
`;

export const StyledMapContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 8%;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    margin-bottom: 4%;
    padding: 0;
  }
`;

export const StyledMap = styled.div`
  width: 100%;
  height: 640px;
`;

export const StyledController = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
