import React from 'react';
import { Link } from 'react-router-dom';

import xsKvImg from '@/assets/images/home/kv_xs.jpg';
import mdKvImg from '@/assets/images/home/kv_md.jpg';

import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction/';
import {
  StyledContainerFluid, StyledWrapper, StyledContainer,
} from '@/components/Global/';

function Home() {
  return (
    <>
      <Hero xsImg={xsKvImg} mdImg={mdKvImg} text="Nikon鏡片視光體驗中心" />
      <StyledContainerFluid>
        fluid
      </StyledContainerFluid>

      <StyledContainer>
        <StyledWrapper>

          <CallToAction shape="square">
            <Link className="about" to="/about"><p>關於我們</p></Link>
            <Link className="expertise" to="/expertise"><p>專業配鏡</p></Link>
            <Link className="locations" to="/locations"><p>搜尋店鋪&預約</p></Link>
          </CallToAction>

        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

export default Home;
