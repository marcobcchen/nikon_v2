import styled from 'styled-components';

export const StyledTabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4%;
`;

export const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 110px;
  background-color: #d1d1d1;
  cursor: pointer;

  &.active{
    background-color: ${({ theme }) => theme.color.primary};

    p{
      &::after{
        border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
        border-right: 2px solid ${({ theme }) => theme.color.secondary};
      }
    }
  }

  &:active, &:focus{
    text-decoration: none;
  }

  &:hover{
    text-decoration: none;

    p{
      &::after{
        transform: translateY(4px) rotate(45deg);
      }
    }
  }

  p{
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.36;
    text-align: center;
    position: relative;

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      font-size: 26px;
    }

    &::after{
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      margin: 0 auto;
      border-bottom: 2px solid #fff;
      border-right: 2px solid #fff;
      transform: translateY(0px) rotate(45deg);
      transition: .2s ease-out;
    }
  }
`;

export const StyledSeries = styled.div`
  margin-bottom: 4%; 
`;

export const StyledSubTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: 26px;
  font-weight: 900;
  text-align: center;
  margin: 4% 0;
`;

export const StyledSeriesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.amount === 1 ? 'center' : 'space-between')};
  align-items: center;
  margin: 0px 0;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    flex-direction: row;
    margin: 0px -8px;
  }

  a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 180px;
    margin: 8px 0;
    background-color: ${({ theme }) => theme.color.primary};

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      flex-direction: row;
      justify-content: flex-start;
      align-self: flex-start;

      width: calc(50% - 8px);
      height: 144px;
    }

    &:active, &:focus{
      text-decoration: none;
    }

    &:hover{
      text-decoration: none;

      p{
        &::after{
          transform: translateX(4px) rotate(-45deg);
        }
      }
    }

    .icon{
      width: 75px;
      height: 75px;
      margin: 0;
      margin-bottom: 24px;

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        margin: 0;
        margin-left: 22px;
        margin-right: 11px;
      }

      @media (min-width: ${({ theme }) => theme.breakPoint.xl}) {
        margin: 0;
        margin-left: 112px;
        margin-right: 41px;
      }
    }

    p{
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      line-height: 0;
      text-align: center;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      position: relative;
      margin: 0;

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        font-size: 26px;
      }

      &::after{
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        margin-left: 10px;
        border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
        border-right: 2px solid ${({ theme }) => theme.color.secondary};
        transform: translateX(0px) rotate(-45deg);
        transition: .2s ease-out;
      }
    }

    &.special{
      .icon{
        width: 114px;
        transform: translateX(0px);

        @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
          transform: translateX(-19.5px);
        }
      }

      p{
        transform: translateX(0px);

        @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
          transform: translateX(-39px);
        }
      }
    }
  }
`;
