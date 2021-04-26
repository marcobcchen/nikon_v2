import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import CallToAction from '@/components/CallToAction/';
import {
  StyledWrapper,
  StyledContainer,
  StyledSuperTitle,
} from '@/components/Global/';

import { NewsData } from '@/data/';
import {
  StyledNewsConatiner, StyledNewsList, StyledNewsItem, StyledPageLinks, StyledLink,
} from './style';

function News() {
  const amount = 10;
  const pageAmout = Math.ceil(NewsData.length / amount);
  const nowPage = useRef(0);
  const [newsData, setNewsData] = useState(NewsData);

  function setPage(now) {
    const start = now * amount;
    const end = now * amount + amount;
    const newAry = [...NewsData].slice(start, end);
    setNewsData(newAry);
  }

  const handlePrevPage = () => {
    if (nowPage.current < 1) return;
    nowPage.current -= 1;
    setPage(nowPage.current);
  };

  const handleNextPage = () => {
    if (nowPage.current >= pageAmout - 1) return;
    nowPage.current += 1;
    setPage(nowPage.current);
  };

  useEffect(() => {
    setPage(nowPage.current);
  }, []);

  const NewsItem = ({
    pictrue,
    date,
    title,
    description,
    link,
    linkTarget,
  }) => (
    <StyledNewsItem>
      <a className="picture" href={link} target={linkTarget}>
        <img src={pictrue} alt="" />
      </a>
      <div className="detail">
        <p className="date">{date}</p>
        <p className="title">{parse(title)}</p>
        <p className="description">{parse(description)}</p>
      </div>
    </StyledNewsItem>
  );

  return (
    <StyledContainer>
      <StyledWrapper>

        <StyledNewsConatiner>
          <StyledSuperTitle>
            <h2>最新消息一覽表</h2>
          </StyledSuperTitle>

          <StyledNewsList>
            {
              newsData.map((news) => (
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

          <StyledPageLinks>
            <StyledLink onClick={handlePrevPage}>上一頁</StyledLink>
            <StyledLink onClick={handleNextPage}>下一頁</StyledLink>
          </StyledPageLinks>

          <CallToAction>
            <Link className="expertise" to="/expertise"><p>專業配鏡</p></Link>
            <Link className="locations" to="/locations"><p>搜尋店鋪&預約</p></Link>
          </CallToAction>
        </StyledNewsConatiner>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default News;
