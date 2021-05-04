import React from 'react';
import styled from 'styled-components';
import { StyledWrapper, StyledContainer, StyledSuperTitle } from '@/components/Global/';

const ContactConatiner = styled.div`
  padding-top: 68px;
  margin-bottom: 12%;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    padding-top: 72px;
  }

  h3{
    font-size: 16px;
    font-weight: 900;
    text-align: center;
    margin-top: 12%;
    margin-bottom: 4%;

    @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
      font-size: 24px;
    }
  }

  p{
    font-size: 14px;
    text-align: center;

    a{
      color: ${({ theme }) => theme.color.primary};
      text-decoration: underline;
    }
  }
`;

function Contact() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <ContactConatiner>
          <StyledSuperTitle>
            <h2>聯絡我們</h2>
          </StyledSuperTitle>

          <h3>想進一步了解Nikon鏡片視光體驗中心嗎?</h3>
          <p>歡迎來信：<a href="mailto:service1@essilor.com.tw">service1@essilor.com.tw</a></p>
        </ContactConatiner>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Contact;
