import styled from 'styled-components';

export const StyledNewsConatiner = styled.div`
  padding-top: 68px;
  
  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    padding-top: 72px;
  }
`;

export const StyledNewsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    
  }
`;

export const StyledNewsItem = styled.div`
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 15%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 8%;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 4%;
  }

  &:last-child{
    margin-bottom: 0%;
  }

  .picture{
    display: block;
    width: 100%;
    flex-shrink: 0;

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      width: 450px;
    }
  }

  .detail{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-height: 390px;
    padding: 32px 16px;
    text-align: justify;

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      min-height: 0;
    }

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

export const StyledPageLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4% 0;
`;

export const StyledLink = styled.div`
  color: #d1d1d1;
  font-size: 16px;
  line-height: 1;
  padding: 0 9px;
  cursor: pointer;

  &:first-child{
    border-right: 1px solid #d1d1d1;
  }
`;
