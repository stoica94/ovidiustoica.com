import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Box from '../box';
import Text from '../text';
import Arrow from '../hover-picture/arrow';
import {HoverWrapper} from './work.style';
import {WorkTag} from './work-tag';
import {Link} from 'gatsby';

const HoverPicture = ({
  container,
  hoverButton,
  imageNode,
  description,
  tags,
  name,
}) => {
  const [projectName] = imageNode.base.split('.');

  return (
    <Link style={{padding: 0}} href={`/work/${projectName}`}>
      <HoverWrapper {...container}>
        <div className="hvr-sweep-to-bottom">
          <Img
            height="100%"
            fluid={imageNode.childImageSharp.fluid}
            alt={imageNode.base.split('.')[0]}
          />
          <Box className="image-tags" width={container.width}>
            {tags.map(tag => {
              return (
                <WorkTag
                  tagName={tag}
                  selected={false}
                  key={`${name}Tag${tag}`}
                />
              );
            })}
          </Box>

          <Box className="bottom-banner" {...hoverButton}>
            <Text
              as="h5"
              content={description}
              color="mainText"
              mb="0px"
              ml="5px"
            />
            <Arrow />
          </Box>
        </div>
      </HoverWrapper>
    </Link>
  );
};

HoverPicture.propTypes = {
  imageNode: PropTypes.object.isRequired,
  description: PropTypes.string,
  container: PropTypes.object,
  hoverButton: PropTypes.object,
};

HoverPicture.defaultProps = {
  container: {
    width: ['300px', '400px', '570px', '570px', '570px'],
    margin: '5px',
  },

  hoverButton: {
    backgroundColor: 'white',
    height: '50px',
    width: '100%',
    flexBox: true,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: '5px',
  },
  description: 'From idea to final product. Find out more',
};

export default HoverPicture;
