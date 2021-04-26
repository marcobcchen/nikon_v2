import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ProductTemplate from '@/views/products/ProductTemplate';
import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';

import iconImg from '@/assets/images/products/icon_1_1.png';
import xsKvImg from '@/assets/images/products/products_1_1/kv_xs.jpg';
import smKvImg from '@/assets/images/products/products_1_1/kv_sm.jpg';
import mdKvImg from '@/assets/images/products/products_1_1/kv_md.jpg';

import {
  StyledWrapper,
  StyledContainer,
  // StyledTitle,
} from '@/components/Global/';

function Product1() {
  return (
    <>
      <Hero xsImg={xsKvImg} smImg={smKvImg} mdImg={mdKvImg} iconImg={iconImg} />
      <StyledContainer>
        <StyledWrapper>
          <ProductTemplate
            title="視逸客製化2.0<br>單焦點鏡片"
            description="量身訂製的清晰視覺"
            features={['根據視覺敏感度客製，配戴舒適滿意。', '提供高水準的視覺品質。']}
            experience="被近視和散光困擾，希望戴著眼鏡可以看得更舒服？"
          />
          <div className="visible-xxl">
            <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
              <div>
                <img src={mdKvImg} alt="" />
              </div>
              <div>
                <img src={mdKvImg} alt="" />
              </div>
              <div>
                <img src={mdKvImg} alt="" />
              </div>
            </Carousel>
          </div>

          <BasicButton text="返回 嚴選日本製鏡片" to="/products/1" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Product1;
