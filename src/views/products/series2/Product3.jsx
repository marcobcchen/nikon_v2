import React from 'react';
import ProductTemplate from '@/views/products/ProductTemplate';

import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';

import iconImg from '@/assets/images/products/icon_2_3.png';
import xsKvImg from '@/assets/images/products/products_2_3/kv_xs.jpg';
import smKvImg from '@/assets/images/products/products_2_3/kv_sm.jpg';
import mdKvImg from '@/assets/images/products/products_2_3/kv_md.jpg';

import {
  StyledWrapper,
  StyledContainer,
  // StyledTitle,
} from '@/components/Global/';

function Product3() {
  return (
    <>
      <Hero xsImg={xsKvImg} smImg={smKvImg} mdImg={mdKvImg} iconImg={iconImg} special />
      <StyledContainer>
        <StyledWrapper>
          <ProductTemplate
            title="全視線第8代"
            description="全新升級，變色效果更快更持久，還能過濾藍光"
          />

          <BasicButton text="返回 鏡片鍍膜與材質" to="/products/2" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Product3;
