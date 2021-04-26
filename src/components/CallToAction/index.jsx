import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import aboutImg from '@/assets/images/global/cta_bg_about.jpg';
import diamondImg from '@/assets/images/global/cta_bg_diamond.jpg';
import productsImg from '@/assets/images/global/cta_bg_products.jpg';
import expertiseImg from '@/assets/images/global/cta_bg_expertise.jpg';
import locationsImg from '@/assets/images/global/cta_bg_locations.jpg';

const StyledCtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.amount === 1 ? 'center' : 'space-between')};
  align-items: center;
  margin: ${(props) => (props.amount === 1 ? '0' : '16px 0')};

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    flex-direction: row;
    margin: 16px -8px;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 100%;
    max-width: 675px;
    margin: 0;
    margin-bottom: 16px;

    @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
      width: ${(props) => 100 / props.amount}%;
      margin: 0 8px;
      margin-bottom: 0;
    }

    &.about{
      background: url(${aboutImg}) no-repeat center top;
      background-size: cover;
    }
    
    &.diamond{
      background: url(${diamondImg}) no-repeat center top;
      background-size: cover;
    }

    &.products{
      background: url(${productsImg}) no-repeat center top;
      background-size: cover;
    }

    &.expertise{
      background: url(${expertiseImg}) no-repeat center top;
      background-size: cover;
    }

    &.locations{
      background: url(${locationsImg}) no-repeat center top;
      background-size: cover;
    }

    &:last-child{
      margin-bottom: 0;
    }

    &::before{
      content: '';
      width: 100%;
      padding-top: ${(props) => (props.shape === 'square' ? '100%' : '50.4%')};

      @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
        padding-top: ${(props) => (props.shape === 'square' ? '100%' : '44.77%')};
      }
    }

    &::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(59, 64, 75, 0.85);
      transition: .3s;
    }

    &:hover{
      text-decoration: none;

      &::after{
        background-color: rgba(255, 255, 255, 0.85);
      }

      p{
        color: ${({ theme }) => theme.color.primary};

        &::after{
          transform: translateX(4px) rotate(-45deg);
        }
      }
    }

    p{
      color: #fff;
      font-size: 26px;
      font-weight: 700;
      line-height: 0;
      text-align: center;
      white-space: nowrap;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;

      &::after{
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        margin-left: 10px;
        border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
        border-right: 2px solid ${({ theme }) => theme.color.secondary};
        transform: translateX(0px) rotate(-45deg);
        transition: .2s ease-out;
      }
    }
  }
`;

function CallToAction(props) {
  const { children, shape } = props;
  const [childrenAmount, setChildrenAmount] = useState(0);

  useEffect(() => {
    if (Array.isArray(children)) {
      setChildrenAmount(children.length);
    } else {
      setChildrenAmount(1);
    }
  }, []);

  return (
    <StyledCtaContainer amount={childrenAmount} shape={shape}>
      {
        childrenAmount > 1
          ? children.map((item) => (
            <React.Fragment key={v4()}>
              {item}
            </React.Fragment>
          ))
          : children
      }
    </StyledCtaContainer>
  );
}

export default CallToAction;
