import React, {Fragment} from 'react';
import {ThemeProvider} from 'styled-components';
import {ContentWrapper, GlobalStyle, ResetCSS, portfolioTheme} from '../theme';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ThankYou from '../components/thank-you';

const IndexPage = () => (
  <ThemeProvider theme={portfolioTheme}>
    <Fragment>
      <SEO
        title="Stoica Ovidiu"
        description="Mobile and Web Developer. Building highly performant and responsive Web and mobile applications"
      />
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <Navbar />
        <ThankYou />
        <Footer showCTA={false} />
      </ContentWrapper>
    </Fragment>
  </ThemeProvider>
);

export default IndexPage;
