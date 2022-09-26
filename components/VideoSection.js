import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { device } from "./device";
import { useVideoAutoPlayback } from './helpers/useVideoPlayback';
import { Video } from './helpers/Video';
import { transformationsFormat } from './utils/index';
import IntroText from './IntroText';



const VideoFull = ({blok}) => {

  const [containerRef, videoRef] = useVideoAutoPlayback({
    // root: null,
    // rootMargin: '0px',
    // threshold: 0.1,
  });

  return (
    <>
    <HeroSection ref={containerRef}>
      <VideoStyle >


        
      <Video
      blok = {blok}
      relativePath={blok.url}
      showNoSupport={false}
      transformations={transformationsFormat('q_auto:good')}
      attributes={{
        playsInline: true,
        muted: true,
        loop: true,
        ref: videoRef
      }}
      />




      </VideoStyle>
    </HeroSection>
    {/* <IntroText/> */}
    </>
  );
};


const VideoStyle = styled(motion.div)`
width: 100vw;
height: 100vh;
`
const Mobile = styled.div`
  @media ${device.mobileS} { 
    display: block;
  }
  @media ${device.laptop} { 
    display: none;
  }
`

const HeroSection = styled(motion.div)`
  display: flex ;
  height: 100vh;
  z-index: 9;
  background-color: white;
  flex-direction: column;
`

export default VideoFull