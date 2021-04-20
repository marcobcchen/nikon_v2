import styled from 'styled-components';

export const StyledContainerFluid = styled.div`
  width: 100%;
  background-color: lightgreen;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0;
  /* background-color: #cfade6; */

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    padding: 0 24px;
  }
`;

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  /* background-color: lightblue; */
  /* height: 3000px; */
  overflow: hidden;
`;

// 左文右圖排列的文章
export const StyledArticle = styled.article`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 12% auto;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0% auto;
  }

  section, figure{
    width: 100%;
    margin-bottom: 8%;
    
    @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
      width: 50%;
      margin-bottom: 0%;
    }
  }

  section{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    padding: 0 24px;

    @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
      padding: 0;
    }

    article{
      width: 100%;

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        width: 80%;
      }
    }

    h2{
      font-size: 26px;
      font-weight: 700;
      line-height: 1.54;
      text-align: center;
      margin-bottom: 7%;

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        text-align: left;
      }
    }

    p{
      font-size: 16px;
      text-align: justify;
    }
  }
`;

// 左圖右文排列的文章
export const StyledArticlePic = styled(StyledArticle)`
  figure{
    order: 1;

    @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
      order: 0;
    }
  }

  section{
    justify-content: flex-end;
    order: 0;

    @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
      order: 1;
    }
  }
`;

// 標題與內文區塊
export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 12% auto;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    margin: 4% auto;
    padding: 0;
  }

  h2{
    font-size: 26px;
    font-weight: 700;
    line-height: 1.54;
    text-align: center;
    margin-bottom: 2%;

    @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
      text-align: left;
    }
  }

  p{
    font-size: 16px;
    text-align: justify;
  }
`;
