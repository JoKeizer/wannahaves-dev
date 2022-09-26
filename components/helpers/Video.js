import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';


const Video = ({
  relativePath,
  showNoSupport,
  attributes,
  transformations,
  blok,
}) => {
  const [sources, setSources] = useState({ thumb: '', video: '' });

  useEffect(() => {
    const sources = relativePath.split('|');

    setSources({
      thumb: sources[0],
      video: sources[1],
    });
  }, [relativePath]);

  if (sources.video === '') return null;

  return (
    <Conatiner>
      <ContentVideo>
        <video
          {...attributes}
          // poster={`https://images.unsplash.com/photo-1658180129345-5b37d73409aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80`}
          poster={blok.image}
        >
          <source
            type="video/mp4"
            src={blok.url}
          />
          {showNoSupport ? (
            <p>
              Sorry, your browser doesn't support embedded videos.
              <br />
              Here is a{' '}
              <a
                href={blok.url}
              >
                link to the video
              </a>{' '}
              instead.
            </p>
          ) : null}
        </video>
      </ContentVideo>
    </Conatiner>    
  );
};

Video.propTypes = {
  relativePath: PropTypes.string.isRequired,
  showNoSupport: PropTypes.bool,
  attributes: PropTypes.object,
  transformations: PropTypes.string,
};

Video.defaultProps = {
  showNoSupport: true,
  attributes: {
    controls: true,
    disablePictureInPicture: true,
    controlsList: 'nodownload',
  },
  transformations: '',
};

const ContentVideo = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: black;
  overflow: hidden;
  video {
    height: 100%;
    margin-bottom: -0.6rem;
  }
`;

const Conatiner = styled.div`
  width: 100%;
  overflow: hidden;
`
const CaseVideo = styled.video`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
`

export { Video };