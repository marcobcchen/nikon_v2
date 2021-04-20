import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';
import useScreenSize from '@/hooks/useScreenSize';

import LogoImg from '@/assets/images/global/header_logo.png';

import {
  StyledHeader, StyledLogo, StyledHamburger, StyledNav,
} from './style';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { width } = useScreenSize();
  const { pathname } = useLocation();

  const handleNavOpen = () => {
    setIsOpen(!isOpen);
  };

  const getClassName = (path) => (pathname === path ? 'active' : undefined);

  const handleWindowScroll = (e) => {
    const st = e.target.documentElement.scrollTop;
    setScrollTop(st);
  };

  useEffect(() => {
    if (width >= 992) setIsOpen(false);
  }, [width]);

  useEffect(() => {
    setIsOpen(false);

    if (scrollTop !== 0) {
      animateScrollTo(0, { speed: 1000 });
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  });

  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/"><img src={LogoImg} alt="" /></Link>
      </StyledLogo>

      <StyledHamburger className={isOpen ? 'open' : undefined} onClick={handleNavOpen}>
        <div />
        <div />
        <div />
        <div />
      </StyledHamburger>

      <StyledNav className={isOpen ? 'open' : undefined}>
        <Link className={getClassName('/')} to="/">首頁</Link>
        <Link className={getClassName('/about')} to="/about">關於我們</Link>
        <Link className={getClassName('/expertise')} to="/expertise">專業配鏡</Link>
        <Link className={getClassName('/products')} to="/products">嚴選鏡片</Link>
        <Link className={getClassName('/locations')} to="/locations">搜尋店舖＆預約</Link>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
