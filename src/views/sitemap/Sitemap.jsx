import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledWrapper, StyledContainer, StyledSuperTitle } from '@/components/Global/';

const SitemapConatiner = styled.div`
  padding: 0 32px;
  padding-top: 68px;
  margin: 0 auto;
  margin-bottom: 12%;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    max-width: 1260px;
    padding: 0;
    padding-top: 72px;
  }

  ul{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
      flex-direction: row;
    }

    li{
      margin-bottom: 56px;
      margin-right: 74px;

      @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
        margin-bottom: 165px;
      }

      a{
        border-left: 4px solid #ffd800;
        padding-left: 6px;
        color: #3b404b;
        font-size: 19px;
        font-weight: 700;
      }
    }

    .sub-list{
      display: flex;
      flex-direction: column;
      list-style: disc;
      padding-left: 19px;
      margin-top: 20px;
      white-space: nowrap;

      li{
        margin-right: 0;
        margin-bottom: 0;

        a{
          border-left: none;
        }
      }
    }
  }
`;

function Sitemap() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <SitemapConatiner>
          <StyledSuperTitle>
            <h2>網站地圖</h2>
          </StyledSuperTitle>

          <ul>
            <li><Link to="/">首頁</Link></li>
            <li><Link to="/about">關於我們</Link></li>
            <li><Link to="/expertise">專業配鏡</Link></li>
            <li>
              <Link to="/products">嚴選鏡片</Link>
              <ul className="sub-list">
                <li><Link to="/products/1">嚴選日本製鏡片</Link></li>
                <li><Link to="/products/2">鏡片鍍膜與材質</Link></li>
              </ul>
            </li>
            <li><Link to="/locations">搜尋店舖&預約</Link></li>
            <li><Link to="/news">最新消息</Link></li>
            <li><Link to="/terms">服務條款</Link></li>
            <li><Link to="/privacy">隱私權政策</Link></li>
            <li><Link to="/contact">聯絡我們</Link></li>
          </ul>
        </SitemapConatiner>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Sitemap;
