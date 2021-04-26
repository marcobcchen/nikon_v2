import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import icon11 from '@/assets/images/products/icon_1_1.png';
import icon12 from '@/assets/images/products/icon_1_2.png';
import icon13 from '@/assets/images/products/icon_1_3.png';
import icon14 from '@/assets/images/products/icon_1_4.png';
import icon15 from '@/assets/images/products/icon_1_5.png';
import icon21 from '@/assets/images/products/icon_2_1.png';
import icon22 from '@/assets/images/products/icon_2_2.png';
import icon23 from '@/assets/images/products/icon_2_3.png';
import icon24 from '@/assets/images/products/icon_2_4.png';

import {
  StyledTabs,
  StyledTab,
  StyledSeries,
  StyledSeriesList,
  StyledSubTitle,
} from './style';

function Products() {
  const [seriesId, setSeriesId] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    if (id) { setSeriesId(parseInt(id, 10)); }
  }, [id]);

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

          <StyledTabs>
            <StyledTab className={seriesId === 1 ? 'active' : undefined} onClick={() => setSeriesId(1)}>
              <p>嚴選<br className="visible-xs" />日本製鏡片</p>
            </StyledTab>
            <StyledTab className={seriesId === 2 ? 'active' : undefined} onClick={() => setSeriesId(2)}>
              <p>鏡片<br className="visible-xs" />鍍膜與材質</p>
            </StyledTab>
          </StyledTabs>

          <CSSTransition in={seriesId === 1} timeout={400} classNames="fade">
            <StyledSeries hidden={seriesId !== 1}>
              <StyledSubTitle>單焦點鏡片</StyledSubTitle>
              <StyledSeriesList>
                <Link to="/products/series1/1">
                  <div className="icon"><img src={icon11} alt="" /></div>
                  <p>視逸客製化2.0單焦點鏡片</p>
                </Link>
                <Link to="/products/series1/2">
                  <div className="icon"><img src={icon12} alt="" /></div>
                  <p>頂級客製化舒壓鏡片</p>
                </Link>
              </StyledSeriesList>
              <StyledSubTitle>漸進鏡片</StyledSubTitle>
              <StyledSeriesList>
                <Link to="/products/series1/3">
                  <div className="icon"><img src={icon13} alt="" /></div>
                  <p>視逸客製化頂級型漸進鏡片</p>
                </Link>
                <Link to="/products/series1/4">
                  <div className="icon"><img src={icon14} alt="" /></div>
                  <p>視逸客製化2.0漸進鏡片</p>
                </Link>
                <Link to="/products/series1/5">
                  <div className="icon"><img src={icon15} alt="" /></div>
                  <p>客製化經典型漸進鏡片</p>
                </Link>
              </StyledSeriesList>
            </StyledSeries>
          </CSSTransition>

          <CSSTransition in={seriesId === 2} timeout={400} classNames="fade">
            <StyledSeries hidden={seriesId !== 2}>
              <StyledSeriesList>
                <Link to="/products/series2/1">
                  <div className="icon"><img src={icon21} alt="" /></div>
                  <p>鑽石鍍膜第4代</p>
                </Link>
                <Link to="/products/series2/2">
                  <div className="icon"><img src={icon22} alt="" /></div>
                  <p>睛亮鑽石鍍膜第4代</p>
                </Link>
              </StyledSeriesList>
              <StyledSeriesList>
                <Link to="/products/series2/3" className="special">
                  <div className="icon"><img src={icon23} alt="" /></div>
                  <p>全視線第8代</p>
                </Link>
                <Link to="/products/series2/4">
                  <div className="icon"><img src={icon24} alt="" /></div>
                  <p>睛粹濾藍光</p>
                </Link>
              </StyledSeriesList>
            </StyledSeries>
          </CSSTransition>

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
