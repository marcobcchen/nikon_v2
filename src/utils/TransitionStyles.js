import { css } from 'styled-components';

const TransitionStyles = css`
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    opacity: 1;
    transition: opacity .6s;
  }
  .fadeIn-exit{
    opacity: 1;
  }
  .fadeIn-exit-active{
    opacity: 0;
    transition: opacity .6s;
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 400ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 400ms;
  }
`;

export default TransitionStyles;
