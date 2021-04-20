import styled from 'styled-components';

export const StyledSubTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: 26px;
  font-weight: 900;
  text-align: center;
  margin: 4% 0;
`;

export const StyledTab = styled.div`
`;

export const StyledSeriesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.amount === 1 ? 'center' : 'space-between')};
  align-items: center;
  margin: 16px 0;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    flex-direction: row;
    margin: 16px -8px;
  }

  a{
    /* text-align: center; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 180px;
    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.color.primary};

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      flex-direction: row;
      justify-content: flex-start;
      align-self: flex-start;

      width: calc(50% - 8px);
      height: 144px;
      /* margin: 0 8px; */
      /* margin-bottom: 0; */
    }

    &:last-child{
      margin-bottom: 0;
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
  }
`;
