import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import parse from 'html-react-parser';

const SuperTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  line-height: 1.37;
  letter-spacing: 0.65px;
  text-align: center;
  padding: 0 24px;
  margin: 8% 0;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    font-size: 35px;
    margin: 4% 0;
  }

  span{
    font-size: 26px;
  }
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9e9e9;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    flex-direction: row;
  }

  .title{
    font-size: 26px;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    width: 100%;
    height: auto;
    position: relative;
    background-color: ${({ theme }) => theme.color.secondary};

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      width: 360px;
    }

    &::after{
      content: '';
      display: none;
      position: absolute;
      right: -15px;
      top: 50%;
      width: 30px;
      height: 30px;
      background-color: ${({ theme }) => theme.color.secondary};
      transform: translateY(-50%) rotate(45deg);

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        display: block;
      }
    }
  }

  .list{
    font-size: 18px;
    text-align: justify;
    width: 100%;
    margin: 8%;
    padding: 0 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      flex-grow: 1;
      font-size: 24px;
      width: auto;
      margin: 4%;
      justify-content: flex-start;
    }

    ol{
      list-style: decimal;
      padding-left: 8%;
    }
  }
`;

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8% 24px;
  margin-top: 0;
  background-color: ${({ theme }) => theme.color.primary};

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    flex-direction: row;
    padding: 4% 24px;
    margin-top: 4%;
  }

  p{
    color: #fff;
    font-size: 18px;
    text-align: justify;
    
    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      font-size: 24px;
    }

    &.highlight{
      color: ${({ theme }) => theme.color.secondary};
      font-size: 24px;
      white-space: nowrap;

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        margin-right: 10px;
      }
    }
  }
`;

function ProductTemplate(props) {
  const {
    title, description, features, experience,
  } = props;

  const titleText = () => {
    if (title.includes('<br>')) {
      return title.replace('<br>', '<br class="visible-xs" />');
    }
    return title;
  };

  const experienceText = () => {
    if (experience.includes('<br>')) {
      return experience.replace('<br>', '<br />');
    }
    return experience;
  };

  return (
    <>
      {
        title
          ? <SuperTitle>{parse(titleText())}<br /><span>{description}</span></SuperTitle>
          : null
      }
      {
        features
          ? (
            <Features>
              <p className="title">優點</p>
              <div className="list">
                <ol>
                  {
              features.map((text) => (<li key={v4()}>{text}</li>))
            }
                </ol>
              </div>
            </Features>
          )
          : null
      }
      {
        experience
          ? (
            <Experience>
              <p className="highlight">您是否有這樣的經驗？</p>
              <p>{parse(experienceText())}</p>
            </Experience>
          )
          : null
      }
    </>
  );
}

export default ProductTemplate;
