import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { device } from "./device";

import { useVideoAutoPlayback } from './helpers/useVideoPlayback';

import { Video } from './helpers/Video';
import { transformationsFormat } from './utils/index';
import TextAnim from "./TextAnim";
import IntroText from './IntroText';
import useWindowSize from './UseWindowSize';
import { gsap } from "gsap/dist/gsap";


const VideoFull = ({blok}) => {
  const video = useRef(null);

  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  });

  useEffect(() => {
    const videoRef = video.current;




    gsap.timeline({
    })

    .fromTo(videoRef, {scale: 0, autoAlpha: 0.5}, {scale: 1, autoAlpha: 1, duration: 0.2, ease: "bounce"}, "-30%")
  }, []);


  return (
    <>
    
    <HeroSection ref={containerRef}
   
    >


    
<VideoStyle ref={video}>


  
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









<TextAnim blok={blok}/>
</HeroSection>
<IntroText/>


    </>
    
  );
};

// const ImageContainer = styled.div`
// position: absolute;
// top: -10px;
// right: 0;

// img {
//   opacity: 0.8;
// }

// `
//#region Styles
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

const Desktop = styled.div`
@media ${device.mobileS} { 
    display: none;
  }
  @media ${device.laptop} { 
    display: block;
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