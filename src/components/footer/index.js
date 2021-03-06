import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text';
import Box from '../box';
import Container from '../container';
import WebdevIcon from '../svg/webdev';
import {FooterWrapper} from './footer.style';
import Button from '../button';
import {ic_arrow_forward} from 'react-icons-kit/md/ic_arrow_forward';
import {Icon} from 'react-icons-kit';
import {Link} from 'gatsby';
import useBreakpoint from '../../hooks/useBreakpoint';
import {portfolioTheme} from '../../theme';

const Footer = ({
  row,
  col,
  iconContainer,
  footerCol,
  showCTA = true,
  paddingTop,
}) => {
  const breakpoints = useBreakpoint(portfolioTheme.breakpoints);
  const footerStyle = {
    ...footerCol,
    ...(breakpoints && breakpoints.lg && {maxWidth: '200px'}),
  };

  const buttonIcon = <Icon icon={ic_arrow_forward} size={25} />;
  return (
    <FooterWrapper {...(paddingTop ? {pt: paddingTop} : {})}>
      <Container noGutter mobileGutter width="1200px">
        {showCTA ? (
          <Box {...row}>
            <Box {...iconContainer}>
              <WebdevIcon className="web-icon" />
            </Box>
            <Box
              {...col}
              width={[1, 1, 1, 1 / 2, 1 / 1.5]}
              ml={['0px', '0px', '30px', '30px', '80px']}
            >
              <Text
                as="h2"
                content="If you're eager to build your new application or have an old one redone, I am here and ready to work."
                color="mainText"
                textAlign="left"
                mb="10px"
              />
              <Text
                className="description"
                content="Since 2016, I've helped business owners like you to bring their ideas into reality."
                color="secondaryText"
                textAlign="left"
              />
              <Link href="/contact">
                <Button title="Let's work together" icon={buttonIcon} />
              </Link>
            </Box>
          </Box>
        ) : null}
        <Box {...row} justifyContent="space-evenly">
          <Box {...footerStyle}>
            <Text as="h4" content="Stoica Ovidiu " color="mainText" mb="5px" />
            <Text
              maxWidth={breakpoints && breakpoints.lg && '120px'}
              content="Handcrafted by me © 2020"
              color="mainText"
              classname="description"
              mb="10px"
            />
            <Link href="/privacy">
              <Text content="Privacy Policy" />
            </Link>
          </Box>
          <Box {...footerStyle}>
            <Text as="h4" content="Work together " color="mainText" mb="5px" />
            <Text
              content="If you have a passion for programming and want to learn how to build scalable web and mobile applications, go ahead and introduce yourself."
              color="mainText"
              classname="description"
              mb="5px"
            />
            <a href="mailto:ovidiu.stoica1094@gmail.com">
              <Text content="Say hello" />
            </a>
          </Box>
          <Box {...footerStyle} className="center-footer-col">
            <Text as="h4" content="Get Social" color="mainText" mb="5px" />
            <a href="https://www.facebook.com/stoica.ovidiu.3">
              <Text content="Facebook" mb="5px" />
            </a>
            <a href="https://www.instagram.com/stoica94/">
              <Text content="Instagram" mb="5px" />
            </a>
            <a href="https://www.linkedin.com/in/george-ovidiu-stoica-6b74b9123/">
              <Text content="LinkedIn" mb="5px" />
            </a>
          </Box>
          <Box {...footerStyle} className="center-footer-col">
            <Text as="h4" content="Contact" color="mainText" mb="5px" />
            <a href="mailto:ovidiu.stoica1094@gmail.com">
              <Text content="Send an email" mb="5px" />
            </a>
            <a href="tel:+40745901643">
              <Text content="+40 745901643" mb="5px" />
            </a>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
  copyrightStyle: PropTypes.object,
  contactItem: PropTypes.object,
  flexBox: PropTypes.object,
  noMargin: PropTypes.object,
  iconContainer: PropTypes.object,
  footerCol: PropTypes.object,
};

Footer.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    mb: ['0', '70px', '80px', '100px', '100px'],
    justifyContent: 'center',
    width: '100%',
  },
  iconContainer: {
    pl: '15px',
    pr: '15px',
    mb: '0',
    flexBox: true,
    width: [1, 1, 1, 1 / 3, 1 / 3.5],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3, 1 / 3],
    px: ['0px', '15px', '15px', '15px', '15px', '15px'],
    mb: ['40px', '0', '0', '0', '0', '0'],
  },
  linkStyle: {
    fontSize: ['22px', '26px', '26px', '30px'],
    color: 'mainBrand',
    mb: 0,
  },
  copyrightStyle: {
    fontSize: '14px',
    color: '#fff',
  },
  footerCol: {
    flexBox: true,
    flexDirection: 'column',
    width: [1, 1 / 2, 1 / 2, 1 / 4, 1 / 4],
    mb: ['24px', '0', '0', '0', '0', '0'],
  },
  flexBox: {
    flexBox: true,
    justifyContent: 'space-between',
    // flexWrap: 'wrap'
  },
  contactItem: {
    // width: 1 / 2
  },
  noMargin: {
    mb: '0',
  },
};

export default Footer;
