import { createGlobalStyle } from 'styled-components';
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 300;
    line-height: 1.88;
    letter-spacing: 1.3px;
    color: #3b404b;
    background-color: #ffffff;
  }

  .visible-xs,
  .visible-sm,
  .visible-md,
  .visible-lg,
  .visible-xl,
  .visible-xxl
  {
    display: none;
  }

  /* Breakpoint XS */
  @media (max-width: ${({ theme }) => parseInt(theme.breakPoint.sm, 10) - 1}px)
  {
    .visible-xs{
      display: block;
    }
    .hidden-xs{
      display: none;
    }
  }

  /* Breakpoint SM */
  @media 
  (min-width: ${({ theme }) => theme.breakPoint.sm}) and 
  (max-width: ${({ theme }) => parseInt(theme.breakPoint.md, 10) - 1}px)
  {
    .visible-sm{
      display: block;
    } 
    .hidden-xs{
      display: none;
    }
  }

  /* Breakpoint MD */
  @media 
  (min-width: ${({ theme }) => theme.breakPoint.md}) and 
  (max-width: ${({ theme }) => parseInt(theme.breakPoint.lg, 10) - 1}px)
  {
    .visible-md{
      display: block;
    } 
    .hidden-md{
      display: none;
    }
  }

  /* Breakpoint LG */
  @media 
  (min-width: ${({ theme }) => theme.breakPoint.lg}) and 
  (max-width: ${({ theme }) => parseInt(theme.breakPoint.xl, 10) - 1}px)
  {
    .visible-lg{
      display: block;
    } 
    .hidden-lg{
      display: none;
    }
  }

  /* Breakpoint XL */
  @media 
  (min-width: ${({ theme }) => theme.breakPoint.xl}) and 
  (max-width: ${({ theme }) => parseInt(theme.breakPoint.xxl, 10) - 1}px)
  {
    .visible-xl{
      display: block;
    } 
    .hidden-xl{
      display: none;
    }
  }

  /* Breakpoint XXL */
  @media (min-width: ${({ theme }) => theme.breakPoint.xxl})
  {
    .visible-xxl{
      display: block;
    } 
    .hidden-xxl{
      display: none;
    }
  }

  ${TransitionStyles}
`;

export default GlobalStyle;
