import React from 'react';
import ProductTemplate from '@/views/products/ProductTemplate';

import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';

import iconImg from '@/assets/images/products/icon_2_2.png';
import xsKvImg from '@/assets/images/products/products_2_2/kv_xs.jpg';
import smKvImg from '@/assets/images/products/products_2_2/kv_sm.jpg';
import mdKvImg from '@/assets/images/products/products_2_2/kv_md.jpg';

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
            title="睛亮鑽石鍍膜第4代"
            description="光源不足時提高影像清晰度"
            features={[
              '在光源不足下，改善影像明亮度。',
              '讓眼前色彩更清晰、更顯眼。',
            ]}
            experience="在昏暗一點的餐廳點餐，總是看不清楚菜單？<br>當光線比較暗時，分不清楚眼前的顏色是紅色還是咖啡色？"
          />

          <BasicButton text="返回 鏡片鍍膜與材質" to="/products/2" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Product2;
