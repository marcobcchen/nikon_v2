import React from 'react';
import { Link } from 'react-router-dom';

import fbImg from '@/assets/images/global/f_logo.png';
import ytImg from '@/assets/images/global/y_logo.png';

import StyledFooter from './style';

const Footer = () => (
  <StyledFooter>
    <div className="footer-links">
      <div className="footer-links-utility">
        <Link to="/terms">服務條款</Link>
        <Link to="/privacy">隱私權政策</Link>
        <Link to="/sitemap">網站地圖</Link>
        <Link to="/contact">聯絡我們</Link>
      </div>
      <div className="footer-links-social">
        <a href="https://www.facebook.com/NikonLenswearTaiwan" target="_blank" rel="noreferrer">
          <img className="img-responsive" src={fbImg} alt="" />
        </a>
        <a href="https://www.youtube.com/channel/UCG5J4loB2N699PAxeyrLCSg/featured" target="_blank" rel="noreferrer">
          <img className="img-responsive" src={ytImg} alt="" />
        </a>
      </div>
    </div>
    <p className="copyright">
      Nikon鏡片由法商依視路台灣分公司總代理 <br className="visible-xs" />© 法商依視路台灣分公司版權所有 轉載必究<br />
      衛署醫器輸壹字第008884號 衛署醫器輸壹字第008883號 衛署醫器製壹字 第003076號 北市衛器廣字第110020054號
    </p>
  </StyledFooter>
);

export default Footer;
