import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: #f4f4f4;

  padding: 32px 28px 31px 28px;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    padding: 47px 56px 54px 56px;
  }

  .footer-links{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      flex-direction: row;
      margin-bottom: 28px;
    }

    .footer-links-utility{
      order: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0 28px;

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        order: 0;
        flex-direction: row;
        width: auto;
        padding: 0;
      }

      a{
        color: #989aa0;
        font-size: 16px;
        line-height: 2;
        text-align: center;
        display: block;
        padding: 24px 0;
        border-top: 1px solid #cacbce;
        width: 100%;

        &:first-child{
          border-top: 0;
        }

        &:hover{
          text-decoration: none;
        }

        @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
          font-size: 15px;
          padding: 0 20px;
          border-top: 0;
          border-left: 1px solid #cacbce;
          width: auto;

          &:first-child{
            padding-left: 0;
            border-left: 0;
          }
        }
      }
    }

    .footer-links-social{
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        margin-bottom: 0;
      }

      a{
        display: block;
        width: 40px;

        &:last-child{
          margin-left: 15px;

          @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
            margin-left: 13px;
          }
        }

        &:hover{
          img{
            opacity: .8;
          }
        }
      }
    }
  }

  .copyright{
    color: #989aa0;
    font-size: 13px;
    text-align: center;
    margin: 0;

    .visible-xs{
      display: block;

      @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
        display: none;
      }
    }
  }

`;

export default StyledFooter;
