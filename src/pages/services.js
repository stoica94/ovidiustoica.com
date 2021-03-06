import React, {Fragment} from 'react';
import {ThemeProvider} from 'styled-components';
import {ContentWrapper, GlobalStyle, ResetCSS, portfolioTheme} from '../theme';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import DecorationBanner from '../components/decoration-banner';
import ServicesSection from '../components/services-section';

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
        <DecorationBanner
          title="Always at your service"
          description="From project exploration to design concepts to SEO and finishing touches, I can handle every aspect of turning your vision into reality. With everything under one roof, we set an extremely high bar for quality and efficiency."
        />
        <ServicesSection />
        <Footer />
      </ContentWrapper>
    </Fragment>
  </ThemeProvider>
);

export default IndexPage;
