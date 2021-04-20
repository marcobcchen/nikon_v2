import styled from 'styled-components';

export const StyledExperienceList = styled.div`
    background-color: ${({ theme }) => theme.color.primary};
    margin-bottom: 8px;
    position: relative;

    &.active{
      &::before{
        transform: rotate(90deg);
      }

      .text{
        h3{
          display: none;
        }

        .detail{
          display: block;
        }
      }

      .pic{
        display: block;
      }
    }

    &::before{
      content: '';
      position: absolute;
      right: 32px;
      top: 48px;
      width: 3px;
      height: 24px;
      margin: 0 auto;
      background: #fff;
      transition: .3s;
    }

    &::after{
      content: '';
      position: absolute;
      right: 22px;
      top: 59px;
      width: 24px;
      height: 3px;
      margin: 0 auto;
      background: #fff;
      transition: .3s;
    }

    .text{
      padding: 38px 24px;

      p{
        color: #fff;
        font-size: 16px;
        text-align: justify;
        margin-bottom: 30px;

        &:last-child{
          margin-bottom: 0px;
        }
        
        span{
          font-size: 24px;
            font-weight: 500;

          &.highlight{
            color: ${({ theme }) => theme.color.secondary};
            margin-left: 10px;
          }
        }
      }

      h3{
        color: ${({ theme }) => theme.color.secondary};
        font-size: 24px;
        font-weight: 500;
      }

      .detail{
        display: none;
      }
    }

    .pic{
      display: none;
    }
`;

export const StyledExperiencePhase = styled.div`
  position: relative;
  margin-top: 8%;
  display: none;

  &.active{
    display: block;
  }

  .phase-step{
    background-color: rgba(59, 64, 75, 0.85);
    padding: 30px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

    p{
      color: #fff;
      font-size: 16px;
      text-align: justify;
      margin-bottom: 30px;

      &:last-child{
        margin-bottom: 0;
      }

      span{
        font-size: 19px;
        font-weight: 500;

        &.highlight{
          color: ${({ theme }) => theme.color.secondary};
          margin-left: 10px;
        }
      }
    }
  }
`;

export const StyledExperienceNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .item{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    .nowStep{
      width: 40px;
      height: 28px;
      margin-bottom: 10px;
      border-style: solid;
      border-width: 28px 20px 0 20px;
      border-color: transparent transparent transparent transparent;

      &.active{
        border-color: ${({ theme }) => theme.color.primary} transparent transparent transparent;
      }
    }

    .navStep{
      position: relative;

      &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: calc(100%);
        background-color: rgba(59, 64, 75, 0.85);
      }

      p{
        color: ${({ theme }) => theme.color.secondary};
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        z-index: 1;
        transform: translateY(-50%);
      }
    }
  }

  .arrow{
    margin: 0 8px;
    margin-top: 40px;
    /* width: 12px; */
    /* height: 18px; */
    border-style: solid;
    border-width: 8px 0px 8px 12px;
    border-color: transparent transparent transparent ${({ theme }) => theme.color.primary};
  }
`;

export const StyledReason = styled.h2`
  color: #ffffff;
  background-color: ${({ theme }) => theme.color.primary};
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  padding: 3% 0;
  margin-top: 8%;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    font-size: 35px;
    margin-top: 4%;
  }
`;

export const StyledImg = styled.img`
  padding: 8%;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    padding: 10% 10% 0 30%;
  }
`;
