import React from 'react';
import ProductTemplate from '@/views/products/ProductTemplate';

import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';

import iconImg from '@/assets/images/products/icon_1_2.png';
import xsKvImg from '@/assets/images/products/products_1_2/kv_xs.jpg';
import smKvImg from '@/assets/images/products/products_1_2/kv_sm.jpg';
import mdKvImg from '@/assets/images/products/products_1_2/kv_md.jpg';

import {
  StyledWrapper,
  StyledContainer,
  // StyledTitle,
} from '@/components/Global/';

function Product2() {
  return (
    <>
      <Hero xsImg={xsKvImg} smImg={smKvImg} mdImg={mdKvImg} iconImg={iconImg} />
      <StyledContainer>
        <StyledWrapper>
          <ProductTemplate
            title="頂級型舒壓鏡片"
            description="看遠清晰、看近舒適"
            features={['看遠清晰、看近舒適。', '量身訂製，好品質清晰視覺。']}
            experience="眼睛盯著螢幕一整天，眼睛緊繃無法放鬆？或是感覺眼睛愈來愈容易疲累？"
          />

          <BasicButton text="返回 嚴選日本製鏡片" to="/products/1" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Product2;
