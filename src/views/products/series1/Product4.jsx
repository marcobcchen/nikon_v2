import React from 'react';
import ProductTemplate from '@/views/products/ProductTemplate';

import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';

import iconImg from '@/assets/images/products/icon_1_4.png';
import xsKvImg from '@/assets/images/products/products_1_4/kv_xs.jpg';
import smKvImg from '@/assets/images/products/products_1_4/kv_sm.jpg';
import mdKvImg from '@/assets/images/products/products_1_4/kv_md.jpg';

import {
  StyledWrapper,
  StyledContainer,
  // StyledTitle,
} from '@/components/Global/';

function Product4() {
  return (
    <>
      <Hero xsImg={xsKvImg} smImg={smKvImg} mdImg={mdKvImg} iconImg={iconImg} />
      <StyledContainer>
        <StyledWrapper>
          <ProductTemplate
            title="視逸客製化2.0<br>漸進鏡片"
            description="量身訂製的銳利視野，高水準的清晰視覺"
            features={['雙眼視覺優化，舒緩視覺壓力。', '專屬量身訂製設計，擁有寬廣銳利的視覺感受。']}
            experience="戴著漸進鏡片，但是在特定情境下總覺得不舒服？<br>我們稱這樣的經驗叫『視覺壓力』，特別在開車、上下階梯、視線轉換時最容易發生。"
          />

          <BasicButton text="返回 嚴選日本製鏡片" to="/products/1" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Product4;
