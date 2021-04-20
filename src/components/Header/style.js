import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.primary};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 68px;
  z-index: 500;
  margin: auto;
  padding: 0 24px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    height: 72px;
    padding: 0 40px;
  } 
`;

export const StyledLogo = styled.h1`
  width: 50%;
  max-width: 221px;
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    width: 16.5%;
    max-width: 264px;
    margin: 0 16px;
  } 
`;

export const StyledHamburger = styled.div`
  display: flex;
  flex-direction: column;
  width: 28px;
  z-index: 1000;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    display: none;
  }

  div{
    margin-top: 6px;
    height: 2px;
    width: 100%;
    list-style: none;
    background-color: #fff;
    transition: .3s;
    animation: 4s ease-in infinite hamburgerAnimation;

    &:first-child{
      margin-top: 0;
      animation-delay: 0.06667s;
    }

    &:nth-child(2){
      animation-delay: 0.13333s;
    }

    &:nth-child(3){
      display: none;

      @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
        animation-delay: 0.2s;
        display: block;
      }
    }

    &:nth-child(4){
      animation-delay: 0.26667s;
    }
  }

  &.open{
    div{
      animation: none;

      &:first-child{
        opacity: 0;
      }

      &:nth-child(2){
        transform: rotate(45deg) translate(0, 1px);
        margin: 0;
      }
      
      &:nth-child(3){
        display: block;
        transform: rotate(-45deg) translate(0, -1px);
        margin: 0;
      }

      &:nth-child(4){
        opacity: 0;
      }
    }
  }

  @keyframes hamburgerAnimation {
    0% {
      width: 100%;
    }
    10% {
      width: 70%;
    }
    20% {
      width: 100%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const StyledNav = styled.nav`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;

  overflow: hidden;
  padding-top: 0;
  width: 100vw;
  height: 0vh;
  background-color: ${({ theme }) => theme.color.primary};
  transition: .3s ease-in-out;

  &.open{
    padding-top: 100px;
    height: 100vh;
  }
      
  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    position: relative;
    z-index: 0;

    margin-right: 14px;
    padding-top: 0px;
    width: auto;
    height: auto;
    background-color: transparent;
  }
  
  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    margin-right: 28px;
  }

  a{
    display: block;
    color: #fff;
    font-size: 19px;
    font-weight: 300;
    letter-spacing: 0.8px;
    text-align: center;
    white-space: nowrap;
    width: calc(100% - 114px);
    margin: 0 57px;
    padding: 30px 0;
    border-bottom: 1px solid #fff;

    &:hover, &:active, &:focus{
      text-decoration: none;
      font-weight: 700;
    }

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      font-size: 16px;
      width: auto;
      margin: 0 20px;
      padding: 0;
      border-bottom: 0;
    }

    @media (min-width: ${({ theme }) => theme.breakPoint.xl}) {
      margin: 0 40px;
    }

    &.active{
      font-weight: 700;
    }
  }
`;
