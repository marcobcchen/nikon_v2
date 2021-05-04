import styled from 'styled-components';
import bg1 from '@/assets/images/home/links_bg.jpg';
import bg2 from '@/assets/images/about/content_bg_md.jpg';

export const StyledBg2 = styled.div`
    height: 320px;
    background: url(${bg2}) no-repeat center top;
    background-attachment: scroll;
    background-size: cover;

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      background-attachment: fixed;
    }
`;

export const StyledBg1 = styled.div`
  background: url(${bg1}) no-repeat center top;
  background-size: cover;
  padding-bottom: 8%;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    padding-bottom: 4%;
  }

  .carousel-container{
    padding: 0 24px;
  }
`;

export const StyledNewsContainter = styled.div`
  margin-bottom: 8%;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    margin-bottom: 4%;
  }
`;

export const StyledNewsList = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    display: flex; 
    flex-direction: row;
    margin: 0 16px;
  }
`;

export const StyledNewsItem = styled.div`
  /* box-shadow: 0 0 30px 0 rgb(0 0 0 / 15%); */
  background-color: #eee;
  margin: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    width: ${100 / 3}%;
    margin: 0 16px;
    margin-bottom: 0;
  }

  .detail{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-height: 410px;
    padding: 32px 16px;
    text-align: justify;

    .date{
      color: ${({ theme }) => theme.color.secondary};
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 30px;
    }

    .title{
      font-size: 16px;
      font-weight: 700;
      line-height: 1.58;
      margin-bottom: 30px;
    }

    .description{
      font-size: 14px;
      font-weight: 300;
      line-height: 2.14;

      a{
        color: #3b404b;
        text-decoration: underline;
      }
    }
  }
`;

export const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    flex-direction: row;
    margin: 16px -8px;
    padding: 0;
  }

  .item{
    width: 100%;
    margin-bottom: 16px;

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      width: ${100 / 3}%;
      margin: 0 8px;
      margin-bottom: 0;
    }

    .mask{
      width: 100%;
      padding-top: 56.25%;
      overflow: hidden;
      position: relative;

      iframe{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
