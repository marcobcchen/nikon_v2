import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from '@/utils/GlobalStyles';

import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/Button/BackToTop';
import Home from './views/home/Home';
import About from './views/about/About';
import Expertise from './views/expertise/Expertise';
import Products from './views/products/Products';
import S1P1 from './views/products/series1/Product1';
import S1P2 from './views/products/series1/Product2';
import S1P3 from './views/products/series1/Product3';
import S1P4 from './views/products/series1/Product4';
import S1P5 from './views/products/series1/Product5';
import S2P1 from './views/products/series2/Product1';
import S2P2 from './views/products/series2/Product2';
import S2P3 from './views/products/series2/Product3';
import S2P4 from './views/products/series2/Product4';
import Locations from './views/locations/Locations';
import Terms from './views/terms/Terms';
import Privacy from './views/privacy/Privacy';
import Sitemap from './views/sitemap/Sitemap';
import Contact from './views/contact/Contact';
import News from './views/news/News';
import Error from './views/404/Error';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/expertise" component={Expertise} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Products} />
          <Route exact path="/products/series1/1" component={S1P1} />
          <Route exact path="/products/series1/2" component={S1P2} />
          <Route exact path="/products/series1/3" component={S1P3} />
          <Route exact path="/products/series1/4" component={S1P4} />
          <Route exact path="/products/series1/5" component={S1P5} />
          <Route exact path="/products/series2/1" component={S2P1} />
          <Route exact path="/products/series2/2" component={S2P2} />
          <Route exact path="/products/series2/3" component={S2P3} />
          <Route exact path="/products/series2/4" component={S2P4} />
          <Route path="/locations" component={Locations} />
          <Route path="/news" component={News} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/sitemap" component={Sitemap} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
      <BackToTop />
      <Footer />
    </Router>
  </>
);
export default App;
