import React from 'react';
import ProductTemplate from '@/views/products/ProductTemplate';

import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';

import iconImg from '@/assets/images/products/icon_1_5.png';
import xsKvImg from '@/assets/images/products/products_1_5/kv_xs.jpg';
import smKvImg from '@/assets/images/products/products_1_5/kv_sm.jpg';
import mdKvImg from '@/assets/images/products/products_1_5/kv_md.jpg';

import {
  StyledWrapper,
  StyledContainer,
  // StyledTitle,
} from '@/components/Global/';

function Product5() {
  return (
    <>
      <Hero xsImg={xsKvImg} smImg={smKvImg} mdImg={mdKvImg} iconImg={iconImg} />
      <StyledContainer>
        <StyledWrapper>
          <ProductTemplate
            title="客製化經典型漸進鏡片"
            description="高水準的寬廣視野，Nikon高階日本訂製片入門首選"
            features={['舒適的遠中近視野。', '像差消除網讓鏡片影像清晰自然。']}
            experience="想開始戴漸進鏡片又怕不好適應？曾經戴過不好用的漸進鏡片從此不敢再戴？"
          />

          <BasicButton text="返回 嚴選日本製鏡片" to="/products/1" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Product5;
