import { css } from 'styled-components';

const CarouselStyles = css`
  .carousel.carousel-slider {
    overflow: inherit;
  }

  .carousel .control-next.control-arrow, .carousel .control-next.control-arrow:hover{
    background-color: transparent;
    right: 10px;
  }

  .carousel .control-prev.control-arrow, .carousel .control-prev.control-arrow:hover {
    background-color: transparent;
    left: 10px;
  }

  .carousel .control-arrow, .carousel.carousel-slider .control-arrow{
    opacity: 1;
  }

  .carousel .control-next.control-arrow:before {
    content: '';
    border: solid #ededed;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .carousel .control-prev.control-arrow:before {
    content: '';
    border: solid #ededed;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  .carousel .control-dots .dot{
    background: #fff;
    opacity: 1;
  }

  .carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover{
    background: #ffd800;
    opacity: 1;
  }
`;

export default CarouselStyles;
