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
import Locations from './views/locations/Locations';
import Error from './views/404/Error';

const container = {
  // marginTop: '100px',
};

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Header />
      <div style={container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/expertise" component={Expertise} />
          <Route path="/products" component={Products} />
          <Route path="/locations" component={Locations} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
      <BackToTop />
      <Footer />
    </Router>
  </>
);
export default App;
