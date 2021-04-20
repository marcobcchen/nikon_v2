import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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
import experience1Img from '@/assets/images/expertise/experience_1.jpg';
import experience2Img from '@/assets/images/expertise/experience_2.jpg';
import experience3Img from '@/assets/images/expertise/experience_3.jpg';
import experience4Img from '@/assets/images/expertise/experience_4.jpg';

import {
  StyledExperienceList, StyledExperiencePhase, StyledExperienceNav, StyledReason, StyledImg,
} from './style';

const phaseData = [
  {
    id: 0,
    img: experience1Img,
    title: '問診與驗光',
    step: [
      {
        id: 1,
        order: '第1步',
        title: '問診',
        description: '驗光人員會詢問用眼習慣，了解您的視力需求，並且釐清有哪些視力的困擾。',
      },
      {
        id: 2,
        order: '第2步',
        title: '精密驗光',
        description: '我們引進高階驗光設備，量測水晶體透明度、光線進入瞳孔的角度、日夜像差、眩光敏感度、調節力等，全方位評估視力問題。',
      },
    ],
  },
  {
    id: 1,
    img: experience2Img,
    title: '評估與體驗',
    step: [
      {
        id: 3,
        order: '第3步',
        title: '視力評估',
        description: '綜合檢查結果，為您解讀視力問題成因與可行解決方案。',
      },
      {
        id: 4,
        order: '第4步',
        title: '視覺體驗',
        description: '鏡片種類玲瑯滿目，眼見為憑最重要，戴上試鏡架並動手試試展示工具，親自看看什麼鏡片最符合您的需要。',
      },
    ],
  },
  {
    id: 2,
    img: experience3Img,
    title: '客製化方案',
    step: [
      {
        id: 5,
        order: '第5步',
        title: '客製化方案',
        description: '除了專業驗光技術，我們也是解決視力問題的專家，我們擅長推薦最符合您需求的鏡片。',
      },
    ],
  },
  {
    id: 3,
    img: experience4Img,
    title: '鏡框定位與文宣',
    step: [
      {
        id: 6,
        order: '第6步',
        title: '鏡框與定位',
        description: '鏡框戴在臉上的角度也會影響眼前清晰程度，用準確的鏡框定位數據，為您量身打造鏡片。',
      },
      {
        id: 7,
        order: '第7步',
        title: '文宣介紹',
        description: '最後您會拿到一份文宣簡介，回家後還可細讀剛才的檢測介紹。',
      },
    ],
  },
];

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
    console.log(newArr);

    setListStatus(newArr);
  };

  return (
    <div>
      <Hero xsImg={xsKvImg} mdImg={mdKvImg} text="專業配鏡" />

      <StyledContainer>
        <StyledWrapper>
          <div className="visible-xs visible-sm visible-md">
            {
              phaseData.map((phase) => (
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
              phaseData.map((phase) => (
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
              <Item id={0} img={experience1Img} text="問診與驗光" />
              <div className="arrow" />
              <Item id={1} img={experience2Img} text="評估與體驗" />
              <div className="arrow" />
              <Item id={2} img={experience3Img} text="客製化方案" />
              <div className="arrow" />
              <Item id={3} img={experience4Img} text="鏡框定位與文宣" />
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
