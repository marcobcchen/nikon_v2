import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { v4 } from 'uuid';
import { Carousel } from 'react-responsive-carousel';
import closeImg from '@/assets/images/locations/icon_close.png';

const ShopContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(100% - 48px);
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    width: 320px;
    left: 85px;
    top: 45px;
    transform: translate(0%, 0%);
  }

  .head{
    display: flex;
    justify-content: flex-end;

    .close{
      width: 15px;
      margin: 9px;
      cursor: pointer;
    }
  }

  .mask{
    width: 100%;
    height: 70vh;
    overflow-y: auto;

    @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
      height: 500px;
    }

    .detail{
      padding: 30px 23px;

      p{
        font-size: 14px;
      }

      .name{
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .phone{
        margin-bottom: 10px;
      }

      .link{
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 10px;

        a{
          color: #337ab7;
          text-decoration: underline;
        }
      }
    }
  }
`;

function ShopInfo({ info, handleInfo }) {
  const {
    name, address, phone, time, intro, link, photos,
  } = info;

  return (
    <ShopContainer>
      <div className="head">
        <div className="close" onClick={handleInfo} aria-hidden="true">
          <img src={closeImg} alt="" />
        </div>
      </div>
      <div className="mask">
        <div className="pic">
          <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} showArrows={false}>
            {
            photos.map((img) => (
              <img key={v4()} src={img} alt="" />
            ))
          }
          </Carousel>
        </div>
        <div className="detail">
          <p className="name">{name}</p>
          <p className="address">地址：{address}</p>
          <p className="phone">電話：{phone}</p>
          <p className="time">營業時間：{time}</p>
          {
            link
              ? (
                <p className="link">
                  <a href={link} target="_blank" rel="noreferrer">線上預約 &gt;</a>
                </p>
              ) : null
          }

          {
            intro !== ''
              ? (
                <>
                  <p className="intro-title">訪談介紹：</p>
                  <p className="intro">{parse(intro)}</p>
                </>
              ) : null
          }
        </div>
      </div>
    </ShopContainer>
  );
}

export default ShopInfo;
