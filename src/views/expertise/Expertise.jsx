import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { PhaseData } from '@/data/';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction/';
import {
  StyledWrapper,
  StyledContainer,
  StyledArticle,
  StyledArticlePic,
} from '@/components/Global/';

import xsKvImg from '@/assets/images/expertise/kv_xs.jpg';
import mdKvImg from '@/assets/images/expertise/kv_md.jpg';
import content1Img from '@/assets/images/expertise/content_1.png';
import content2XSImg from '@/assets/images/expertise/content_2_xs.jpg';
import content2MDImg from '@/assets/images/expertise/content_2_md.jpg';
import content3XSImg from '@/assets/images/expertise/content_3_xs.jpg';
import content3MDImg from '@/assets/images/expertise/content_3_md.jpg';
import content4XSImg from '@/assets/images/expertise/content_4_xs.jpg';
import content4MDImg from '@/assets/images/expertise/content_4_md.jpg';
import content5XSImg from '@/assets/images/expertise/content_5_xs.jpg';
import content5MDImg from '@/assets/images/expertise/content_5_md.jpg';
import content6XSImg from '@/assets/images/expertise/content_6_xs.jpg';
import content6MDImg from '@/assets/images/expertise/content_6_md.jpg';

import {
  StyledExperienceList, StyledExperiencePhase, StyledExperienceNav, StyledReason, StyledImg,
} from './style';

function Expertise() {
  const [phaseId, setPhaseId] = useState(0);
  const [listStatus, setListStatus] = useState([false, false, false, false]);

  const getClassName = (id) => (id === phaseId ? 'active' : '');

  const Item = ({ id, img, text }) => (
    /* eslint-disable-next-line */
    <div className="item" onClick={() => setPhaseId(id)}>
      <div className={`nowStep ${getClassName(id)}`} />
      <div className="navStep">
        <img src={img} alt="" />
        <p>{text}</p>
      </div>
    </div>
  );

  const handleListStatus = (id) => {
    const newArr = [...listStatus];
    newArr[id] = !newArr[id];

    setListStatus(newArr);
  };

  return (
    <div>
      <Hero xsImg={xsKvImg} mdImg={mdKvImg} text="專業配鏡" />

      <StyledContainer>
        <StyledWrapper>
          <div className="visible-xs visible-sm visible-md">
            {
              PhaseData.map((phase) => (
                <StyledExperienceList
                  key={phase.id}
                  className={listStatus[phase.id] ? 'active' : undefined}
                  onClick={() => handleListStatus(phase.id)}
                >
                  <div className="text">
                    <h3>{phase.title}</h3>
                    {
                      phase.step.map((step) => (
                        <p key={step.id} className="detail">
                          <span>{step.order}</span><span className="highlight">{step.title}</span><br />
                          {step.description}
                        </p>
                      ))
                    }
                  </div>
                  <div className="pic">
                    <img src={phase.img} alt="" />
                  </div>
                </StyledExperienceList>
              ))
            }
          </div>

          <div className="visible-lg visible-xl visible-xxl">
            {
              PhaseData.map((phase) => (
                <CSSTransition key={phase.id} in={phaseId === phase.id} timeout={400} classNames="fade">
                  <StyledExperiencePhase
                    className={getClassName(phase.id)}
                    hidden={phaseId !== phase.id}
                  >
                    <img src={phase.img} alt="" />
                    <div className="phase-step">
                      {
                        phase.step.map((step) => (
                          <p key={step.id}>
                            <span>{step.order}</span><span className="highlight">{step.title}</span><br />
                            {step.description}
                          </p>
                        ))
                      }
                    </div>
                  </StyledExperiencePhase>
                </CSSTransition>
              ))
            }

            <StyledExperienceNav>
              {
                PhaseData.map((phase) => {
                  if (phase.id < PhaseData.length - 1) {
                    return (
                      <React.Fragment key={phase.id}>
                        <Item id={phase.id} img={phase.img} text={phase.title} />
                        <div className="arrow" />
                      </React.Fragment>
                    );
                  }
                  return <Item key={phase.id} id={phase.id} img={phase.img} text={phase.title} />;
                })
              }
            </StyledExperienceNav>
          </div>

          <StyledReason>值得信賴的6個理由</StyledReason>

          <StyledArticle>
            <section>
              <article>
                <h2>高規格精密測量</h2>
                <p>我們是視力健康專家，我們重視任何微小差異，透過精密測量不放過任何影響視力的變因。</p>
              </article>
            </section>
            <figure>
              <StyledImg src={content1Img} alt="" />
            </figure>
          </StyledArticle>
          <StyledArticlePic>
            <section>
              <article>
                <h2>安心驗光環境</h2>
                <p>我們無時無刻都保持安心的衛生空間，隨時隨手完成消毒工作，在您踏進店裡之前，即已做好防疫準備。</p>
              </article>
            </section>
            <figure>
              <img className="visible-xs visible-sm" src={content2XSImg} alt="" />
              <img className="hidden-xs hidden-sm" src={content2MDImg} alt="" />
            </figure>
          </StyledArticlePic>
          <StyledArticle>
            <section>
              <article>
                <h2>精細視力評析</h2>
                <p>我們不單讓您知道視力度數，還會為您剖析眼睛狀況，就像體適能檢查報告一般，您的視力分析數據交由我們的視光專家們為您判讀解析。</p>
              </article>
            </section>
            <figure>
              <img className="visible-xs visible-sm" src={content3XSImg} alt="" />
              <img className="hidden-xs hidden-sm" src={content3MDImg} alt="" />
            </figure>
          </StyledArticle>
          <StyledArticlePic>
            <section>
              <article>
                <h2>量身訂製鏡片</h2>
                <p>我們的量身訂製服務，為您打造專屬您的鏡片，讓每個踏入視光中心的顧客都戴走清晰舒適的眼鏡。</p>
              </article>
            </section>
            <figure>
              <img className="visible-xs visible-sm" src={content4XSImg} alt="" />
              <img className="hidden-xs hidden-sm" src={content4MDImg} alt="" />
            </figure>
          </StyledArticlePic>
          <StyledArticle>
            <section>
              <article>
                <h2>精準鏡框定位</h2>
                <p>藉由我們準確的鏡框定位，取得個人化配鏡數據，並以此來製作鏡片，讓您的視覺不但清晰更看得舒適。</p>
              </article>
            </section>
            <figure>
              <img className="visible-xs visible-sm" src={content5XSImg} alt="" />
              <img className="hidden-xs hidden-sm" src={content5MDImg} alt="" />
            </figure>
          </StyledArticle>
          <StyledArticlePic>
            <section>
              <article>
                <h2>國家認定合格驗光人員</h2>
                <p>我們的驗光人員領有國家考試認證執照，並持續進修吸取專業新知。</p>
              </article>
            </section>
            <figure>
              <img className="visible-xs visible-sm" src={content6XSImg} alt="" />
              <img className="hidden-xs hidden-sm" src={content6MDImg} alt="" />
            </figure>
          </StyledArticlePic>

          <CallToAction>
            <Link className="products" to="/products"><p>嚴選鏡片</p></Link>
            <Link className="locations" to="/locations"><p>搜尋店鋪&預約</p></Link>
          </CallToAction>
        </StyledWrapper>
      </StyledContainer>
    </div>
  );
}

export default Expertise;
