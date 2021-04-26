import React from 'react';
import ProductTemplate from '@/views/products/ProductTemplate';

import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';

import iconImg from '@/assets/images/products/icon_2_1.png';
import xsKvImg from '@/assets/images/products/products_2_1/kv_xs.jpg';
import smKvImg from '@/assets/images/products/products_2_1/kv_sm.jpg';
import mdKvImg from '@/assets/images/products/products_2_1/kv_md.jpg';

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
            title="鑽石鍍膜第4代"
            description="隨時隨地保護鏡片更耐用"
            features={[
              '鑽石級膜層強化科技使鏡片更強韌耐用。',
              '清潔容易：幫助減少因清潔鏡片造成損耗。',
              '強韌耐磨損：相較第三代鍍膜更抗刮。',
              '絕佳鏡片保護力：抗刮、抗塵、抗汙、清徹、雙面抗UV。',
            ]}
            experience="眼鏡戴了一陣子後為什麼總是沒有新戴時清晰？眼鏡經過多次清潔後，磨損了鍍膜？"
          />

          <BasicButton text="返回 鏡片鍍膜與材質" to="/products/2" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Product1;
