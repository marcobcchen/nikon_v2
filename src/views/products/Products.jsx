import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction/';
import {
  StyledWrapper,
  StyledContainer,
  StyledTitle,
} from '@/components/Global/';

import xsKvImg from '@/assets/images/products/kv_xs.jpg';
import mdKvImg from '@/assets/images/products/kv_md.jpg';
import {
  StyledTab,
  StyledSeriesList,
  StyledSubTitle,
} from './style';

// import './style.css';

function Products() {
  const [seriesId, setSeriesId] = useState(1);

  const handleSeries = (id) => {
    setSeriesId(id);
  };

  return (
    <div>
      <Hero xsImg={xsKvImg} mdImg={mdKvImg} text="嚴選鏡片" />

      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>
            <p>
              我們為您嚴選Nikon量身訂製鏡片，由Nikon日本原廠打造，提供清晰舒適的視覺。
              除網上所列鏡片外，我們亦提供Nikon全系列鏡片(請逕至官網查詢)，為不同經濟考量的客戶都提供合適的鏡片。
            </p>
          </StyledTitle>

          <StyledTab onClick={() => handleSeries(1)}>嚴選日本製鏡片</StyledTab>
          <StyledTab onClick={() => handleSeries(2)}>鏡片鍍膜與材質</StyledTab>
          <p>now series id : {seriesId}</p>

          <CSSTransition in={seriesId === 1} timeout={400} classNames="fade" unmountOnExit>
            <p hidden={seriesId !== 1}>series 1</p>
          </CSSTransition>
          <CSSTransition in={seriesId === 2} timeout={400} classNames="fade" unmountOnExit>
            <p hidden={seriesId !== 2}>series 2</p>
          </CSSTransition>

          <StyledSubTitle>單焦點鏡片</StyledSubTitle>
          <StyledSeriesList>
            <Link to="/expertise">
              <div className="icon" />
              <p>視逸客製化2.0單焦點鏡片</p>
            </Link>
            <Link to="/expertise">
              <div className="icon" />
              <p>視逸客製化2.0單焦點鏡片</p>
            </Link>
          </StyledSeriesList>
          <StyledSubTitle>漸進鏡片</StyledSubTitle>
          <StyledSeriesList>
            <Link to="/expertise">
              <div className="icon" />
              <p>視逸客製化2.0單焦點鏡片</p>
            </Link>
            <Link to="/expertise">
              <div className="icon" />
              <p>視逸客製化2.0單焦點鏡片</p>
            </Link>
            <Link to="/expertise">
              <div className="icon" />
              <p>視逸客製化2.0單焦點鏡片</p>
            </Link>
          </StyledSeriesList>

          <CallToAction>
            <Link className="expertise" to="/expertise"><p>專業配鏡</p></Link>
            <Link className="locations" to="/locations"><p>搜尋店鋪&預約</p></Link>
          </CallToAction>
        </StyledWrapper>
      </StyledContainer>
    </div>
  );
}

export default Products;
