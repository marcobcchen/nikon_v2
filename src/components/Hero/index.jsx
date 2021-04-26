import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import animateScrollTo from 'animated-scroll-to';
import useScreenSize from '@/hooks/useScreenSize';

const HeroContainer = styled.div`
  width: 100%;
  height: calc(100vh - 68px);
  margin-top: 68px;
  background: url(${(props) => props.xsImg}) no-repeat center center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    height: calc(100vh - 72px);
    margin-top: 72px;
    background: url(${(props) => (props.smImg ? props.smImg : props.mdImg)}) no-repeat center center;
    background-size: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    background: url(${(props) => props.mdImg}) no-repeat center center;
    background-size: cover;
    justify-content: ${(props) => props.justify};
  }

  h1{
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: 1.53px;
    margin: 0;
    
    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      font-size: 54px;
      letter-spacing: 2.7px;
    }

    p{
      margin-bottom: 10px;
      text-align: center;

      @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
        margin-bottom: 24px;
      }

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        margin-bottom: 27px;
      }
    }
    
    .hello-text-jp{
      font-size: 24px;
      font-weight: 300;

      @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
        font-size: 30px;
      }

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        font-size: 33px;
      }
    }

    .hello-text-tw{
      font-size: 24px;
      font-weight: 500;

      @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
        font-size: 30px;
        font-weight: 700;
      }

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        font-size: 33px;
      }
    }

    hr{
      height: 2px;
      margin-bottom: 10px;
      border: none;
      background: #FFD800;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #FFD800 30%, #FFD800 70%, rgba(0, 0, 0, 0) 100%);

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        margin-bottom: 27px;
      }
    }
  }
`;

const Anchor = styled.div`
  position: absolute;
  display: block;
  width: 24px;
  height: 24px;
  bottom: 48px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-bottom: 3px solid ${({ theme }) => theme.color.secondary};
  border-right: 3px solid ${({ theme }) => theme.color.secondary};
  border-radius: 3px;
  transform: rotate(45deg);
  animation: 3s linear infinite kvArrow;
  cursor: pointer;

  @keyframes kvArrow {
    0%, 20%, 50%, 80%, 100% {
      bottom: 48px;
    }
    40% {
      bottom: 32px;
    }
    60% {
      bottom: 40px;
    }
  }
`;

const Icon = styled.div`
  width: ${(props) => (props.special ? '193px' : '100px')};
  margin-left: 0;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    width: ${(props) => (props.special ? '275px' : '178px')};
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    width: ${(props) => (props.special ? '275px' : '138px')};
    margin-left: ${(props) => (props.special ? '131px' : '100px')};
  }
`;

function Hero(props) {
  const {
    xsImg, smImg, mdImg, text, iconImg, special,
  } = props;
  const { height } = useScreenSize();
  const { pathname } = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);
  const [isProductPage, setIsProductPage] = useState(false);

  const handleAnchor = () => {
    animateScrollTo(height, { speed: 1000 });
  };

  useEffect(() => {
    if (pathname === '/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }

    if (pathname.includes('products/series')) {
      setIsProductPage(true);
    } else {
      setIsProductPage(false);
    }
  }, [pathname]);

  const HeroText = () => (
    <h1>
      {
        isHomePage
          ? (
            <>
              <p className="hello-text-jp">ようこそ</p>
              <p className="hello-text-tw">歡迎光臨</p>
              <hr />
            </>
          )
          : null
      }
      {text || '預設'}
    </h1>
  );

  return (
    <HeroContainer xsImg={xsImg} smImg={smImg} mdImg={mdImg} justify={isProductPage ? 'flex-start' : 'center'}>
      {
        isProductPage
          ? (
            <Icon special={special}>
              <img src={iconImg} alt="" />
            </Icon>
          )
          : <HeroText />
      }
      <Anchor onClick={handleAnchor} />
    </HeroContainer>
  );
}

export default Hero;
