import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import animateScrollTo from 'animated-scroll-to';
import useScreenSize from '@/hooks/useScreenSize';

const StyledBackToTop = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    bottom: 5vh;
    left: 93vw;
    width: 50px;
    height: 50px;
    z-index: 1000;
    padding: 10px;
    margin-top: -50px;
    cursor: pointer;
    transition: .3s;
    border: 2px solid transparent;
    border-radius: 100%;
    opacity: 0;
    visibility: hidden;

    &.active{
      opacity: 1;
      visibility: visible;
    }

    &:hover{
      transform: scale3d(1.3, 1.3, 1.3);
    }

    &::before{
      transform: rotate(45deg);
      right: 2px;
    }

    &::after{
      transform: rotate(-45deg);
      right: 18px;
    }
    
    &::before, &::after{
      position: absolute;
      bottom: 21px;
      width: 24px;
      height: 3px;
      content: '';
      transition: .3s;
      background-color: #3B404B;
      border-radius: 3px;
      transition: .3s;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.xl}) {
    left: 95vw;
  }
`;

function BackToTop() {
  const [isActive, setIsActive] = useState(false);
  const { height } = useScreenSize();

  const handleBackToTop = () => {
    animateScrollTo(0, { speed: 1000 });
  };

  const handleWindowScroll = (e) => {
    const st = e.target.documentElement.scrollTop;
    if (st > height) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  });

  return (
    <StyledBackToTop className={isActive ? 'active' : undefined} onClick={handleBackToTop} />
  );
}

export default BackToTop;
