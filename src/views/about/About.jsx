import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction/';
import BasicButton from '@/components/Button/BasicButton';
import {
  StyledContainerFluid,
  StyledWrapper,
  StyledContainer,
  StyledArticle,
  StyledArticlePic,
  StyledTitle,
} from '@/components/Global/';

import xsKvImg from '@/assets/images/about/kv_xs.jpg';
import mdKvImg from '@/assets/images/about/kv_md.jpg';
import content1XSImg from '@/assets/images/about/content_1_xs.jpg';
import content1MDImg from '@/assets/images/about/content_1_md.jpg';
import content2XSImg from '@/assets/images/about/content_2_xs.jpg';
import content2MDImg from '@/assets/images/about/content_2_md.jpg';
import bgImg from '@/assets/images/about/content_bg_md.jpg';

const StyledBg = styled.div`
    height: 320px;
    background: url(${bgImg}) no-repeat center top;
    background-attachment: fixed;
`;

function About() {
  return (
    <div>
      <Hero xsImg={xsKvImg} mdImg={mdKvImg} text="關於我們" />

      <StyledContainer>
        <StyledWrapper>

          <StyledArticle>
            <section>
              <article>
                <h2>Nikon鏡片視光體驗中心是什麼</h2>
                <p>我們的成立源自於日本東京的Nikon眼鏡專門店，引進日本Nikon的高階科技和體驗流程，為您解析視力數據，並綜合您的配戴體驗，為您提供專業的解決方案。</p>
              </article>
            </section>
            <figure>
              <img className="visible-xs visible-sm" src={content1XSImg} alt="" />
              <img className="hidden-xs hidden-sm" src={content1MDImg} alt="" />
            </figure>
          </StyledArticle>

          <StyledArticlePic>
            <section>
              <article>
                <h2>舒適的眼鏡</h2>
                <p>
                  眼睛是相當複雜的光學系統，許多潛在的因子牽動著視力問題，
                  我們致力於解決您的視力問題，以提供舒適的配戴體驗，當您試戴新處方和鏡框時感到舒適， 我們才會著手訂製眼鏡。
                </p>
              </article>
            </section>
            <figure>
              <img className="visible-xs visible-sm" src={content2XSImg} alt="" />
              <img className="hidden-xs hidden-sm" src={content2MDImg} alt="" />
            </figure>
          </StyledArticlePic>

          <StyledTitle>
            <h2>我們的理念</h2>
            <p>我們相信每個視力困擾的成因不盡相同，用眼習慣也大不同，我們在乎這些配鏡數據的微小差異，要讓您從這裡帶走清晰舒適的好視力。</p>
          </StyledTitle>
          <BasicButton text="專業配鏡" to="/expertise" />

        </StyledWrapper>
      </StyledContainer>

      <StyledContainerFluid>
        <StyledBg />
      </StyledContainerFluid>

      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>
            <h2>合格驗光人員</h2>
            <p>我們的驗光人員經過政府考照認定， 我們的驗光所亦領有登記證照，我們的視光專業將給予您配眼鏡上的專業建議，只要發現您有超出視力上的問題，我們也能為您轉介眼科診所。</p>
          </StyledTitle>

          <CallToAction>
            <Link className="products" to="/products"><p>嚴選鏡片</p></Link>
            <Link className="locations" to="/locations"><p>搜尋店鋪&預約</p></Link>
          </CallToAction>
        </StyledWrapper>
      </StyledContainer>
    </div>
  );
}

export default About;
