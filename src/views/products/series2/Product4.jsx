import React from 'react';
import ProductTemplate from '@/views/products/ProductTemplate';

import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';

import iconImg from '@/assets/images/products/icon_2_4.png';
import xsKvImg from '@/assets/images/products/products_2_4/kv_xs.jpg';
import smKvImg from '@/assets/images/products/products_2_4/kv_sm.jpg';
import mdKvImg from '@/assets/images/products/products_2_4/kv_md.jpg';

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
            title="睛粹濾藍光"
            description="高效過濾有害藍光，同時保持鏡片清透無色差"
            features={[
              '全方位光害防護-過濾紫外線和有害藍光。',
              '極緻美學體驗-鏡片近乎零底色，表面幾無藍色反光。',
              '極緻美學體驗-超凡清晰視覺-搭配鑽石鍍膜第4代，讓鏡片持久耐用。',
            ]}
            experience="想配濾藍光鏡片，但怕鏡片讓眼前顏色偏黃？<br>戴過濾藍光鏡片，不喜歡鏡片表面的藍色反光？"
          />

          <BasicButton text="返回 鏡片鍍膜與材質" to="/products/2" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Product4;
