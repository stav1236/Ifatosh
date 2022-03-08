import * as React from 'react';
import ProductCategories from './ProductCategories/ProductCategories';
import ProductSmokingHero from './ProductSmokingHero/ProductSmokingHero';
import AppFooter from './AppFooter/AppFooter';
import ProductHero from './ProductHero/ProductHero';
import ProductValues from './ProductValues/ProductValues';
import AppAppBar from './AppAppBar/AppAppBar';

const Home = () => {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default Home;
