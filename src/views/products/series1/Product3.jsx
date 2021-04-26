import React from 'react';
import ProductTemplate from '@/views/products/ProductTemplate';

import Hero from '@/components/Hero';
import BasicButton from '@/components/Button/BasicButton';

import iconImg from '@/assets/images/products/icon_1_3.png';
import xsKvImg from '@/assets/images/products/products_1_3/kv_xs.jpg';
import smKvImg from '@/assets/images/products/products_1_3/kv_sm.jpg';
import mdKvImg from '@/assets/images/products/products_1_3/kv_md.jpg';

import {
  StyledWrapper,
  StyledContainer,
  // StyledTitle,
} from '@/components/Global/';

function Product3() {
  return (
    <>
      <Hero xsImg={xsKvImg} smImg={smKvImg} mdImg={mdKvImg} iconImg={iconImg} />
      <StyledContainer>
        <StyledWrapper>
          <ProductTemplate
            title="視逸客製化<br>頂級型漸進鏡片"
            description="極致寬廣的視野，完美適應不費力"
            features={['提供極致寬廣、超級舒適的完美視覺。', '解決複雜度數問題，配戴快速適應。']}
            experience="明明已經配了很高級的漸進鏡片，怎麼戴都無法適應？"
          />

          <BasicButton text="返回 嚴選日本製鏡片" to="/products/1" />
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Product3;
