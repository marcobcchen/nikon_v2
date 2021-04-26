import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import parse from 'html-react-parser';

import { NewsData } from '@/data/';
import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';
import CallToAction from '@/components/CallToAction/';
import {
  StyledContainerFluid, StyledWrapper, StyledContainer, StyledSuperTitle,
} from '@/components/Global/';

import xsKvImg from '@/assets/images/home/kv_xs.jpg';
import mdKvImg from '@/assets/images/home/kv_md.jpg';

import {
  StyledVideo, StyledBg1, StyledBg2, StyledNewsContainter, StyledNewsList, StyledNewsItem,
} from './style';

function Home() {
  const NewsItem = ({
    pictrue,
    date,
    title,
    description,
    link,
    linkTarget,
  }) => (
    <StyledNewsItem>
      <a href={link} target={linkTarget}>
        <img src={pictrue} alt="" />
      </a>
      <div className="detail">
        <p className="date">{date}</p>
        <p className="title">{parse(title)}</p>
        <p className="description">{parse(description)}</p>
      </div>
    </StyledNewsItem>
  );

  const VideoIframe = ({ url }) => <iframe title="video" width="100%" height="auto" src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />;

  return (
    <>
      <Hero xsImg={xsKvImg} mdImg={mdKvImg} text="Nikon鏡片視光體驗中心" />

      <StyledContainer>
        <StyledWrapper>
          <StyledSuperTitle>
            <h2>最新消息</h2>
          </StyledSuperTitle>
          <StyledNewsContainter>
            <div className="visible-xs visible-sm visible-md">
              <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} showArrows={false}>
                {
                NewsData.filter((news) => news.id < 3).map((news) => (
                  <NewsItem
                    key={news.id}
                    pictrue={news.pictrue}
                    date={news.date}
                    title={news.title}
                    description={news.description}
                    link={news.link}
                    linkTarget={news.linkTarget}
                  />
                ))
              }
              </Carousel>
            </div>
            <StyledNewsList>
              {
              NewsData.filter((news) => news.id < 3).map((news) => (
                <NewsItem
                  key={news.id}
                  pictrue={news.pictrue}
                  date={news.date}
                  title={news.title}
                  description={news.description}
                  link={news.link}
                  linkTarget={news.linkTarget}
                />
              ))
            }
            </StyledNewsList>
          </StyledNewsContainter>
        </StyledWrapper>
      </StyledContainer>

      <StyledContainerFluid>
        <StyledBg1>
          <StyledContainer>
            <StyledWrapper>
              <StyledSuperTitle>
                <h2>細節成就「舒適體驗」</h2>
                <p>配好一付眼鏡並不簡單，從您的用眼習慣到生活型態，從您的臉型到鏡框戴的位置，從視覺偏好到光線敏感度，這些微小細節差異都影響舒適度，我們在乎每個細節，我們的精確量測將給您絕佳的配戴體驗。</p>
              </StyledSuperTitle>

              <div className="visible-xs visible-sm visible-md carousel-container">
                <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} showArrows={false}>
                  <CallToAction shape="square">
                    <Link className="about" to="/about"><p>關於我們</p></Link>
                  </CallToAction>
                  <CallToAction shape="square">
                    <Link className="about" to="/expertise"><p>專業配鏡</p></Link>
                  </CallToAction>
                  <CallToAction shape="square">
                    <Link className="about" to="/locations"><p>搜尋店鋪&預約</p></Link>
                  </CallToAction>
                </Carousel>
              </div>
              <div className="visible-lg visible-xl visible-xxl">
                <CallToAction shape="square">
                  <Link className="about" to="/about"><p>關於我們</p></Link>
                  <Link className="expertise" to="/expertise"><p>專業配鏡</p></Link>
                  <Link className="locations" to="/locations"><p>搜尋店鋪&預約</p></Link>
                </CallToAction>
              </div>
            </StyledWrapper>
          </StyledContainer>
        </StyledBg1>
      </StyledContainerFluid>

      <StyledContainerFluid>
        <StyledBg2 />
      </StyledContainerFluid>

      <StyledContainer>
        <StyledWrapper>
          <StyledSuperTitle>
            <h2>精彩影片</h2>
          </StyledSuperTitle>
          <StyledVideo>
            <div className="item">
              <div className="mask">
                <VideoIframe url="https://www.youtube.com/embed/5Va_n_93SJA" />
              </div>
            </div>
            <div className="item">
              <div className="mask">
                <VideoIframe url="https://www.youtube.com/embed/BghhCWBfQXY" />
              </div>
            </div>
            <div className="item">
              <div className="mask">
                <VideoIframe url="https://www.youtube.com/embed/nNbv9POHYQM" />
              </div>
            </div>
          </StyledVideo>
          <BasicButton text="更多影片" to="https://www.youtube.com/channel/UCG5J4loB2N699PAxeyrLCSg/featured" link="_blank" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Home;
