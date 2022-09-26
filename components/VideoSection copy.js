import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { device } from "./device";

import { useVideoAutoPlayback } from './helpers/useVideoPlayback';

import { Video } from './helpers/Video';
import { transformationsFormat } from './utils/index';
import TextAnim from "./TextAnim";


const VideoSection = ({blok}) => {
  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  });

  return (
    <HeroSection ref={containerRef}>
        {/* <ImageContainer>
  <img
          src="/lines.gif"
          alt=""
          style={{
            height: '100%',
            objectFit: 'cover'
        }}
        
      />
  </ImageContainer> */}

<Left>
      <TabletWrapper>
        <TabletFrame version="1.1" id="Layer_1" fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="863.926px" height="600px" viewBox="0 0 863.926 600" enable-background="new 0 0 863.926 600" xmlSpace="preserve">
          <path d="M863.857,425.246c-0.016-128.999-0.021-257.998-0.062-386.997c-0.005-13.746-5.395-24.786-17.104-32.385
            c-4.543-2.949-9.561-4.703-14.956-5.354c-0.595-0.072-1.164-0.336-1.745-0.511C564.669,0,299.347,0,34.024,0
            c-2.088,0.467-4.193,0.877-6.265,1.409C12.82,5.245,2.294,17.396,0.576,32.715c-0.066,0.589-0.349,1.154-0.531,1.73
            c0,177.347,0,354.693,0,532.041c0.584,2.462,0.986,4.984,1.782,7.377c4.837,14.549,14.938,23,29.991,25.635
            c0.592,0.104,1.162,0.333,1.742,0.504c265.631,0,531.263,0,796.896,0c1.267-0.294,2.53-0.608,3.801-0.878
            c17.78-3.762,29.609-18.306,29.617-36.578C863.893,516.778,863.864,471.012,863.857,425.246z M820.231,560.5H43.694v-521h776.537
            V560.5z"></path>
        </TabletFrame>
        <VideoStyle>
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
        </TabletWrapper>


 

     
      </Left>
      <Right>

      <TextContainer>
								<Title>Social is our DNA </Title>
                <Content>We believe that the best social strategy not only strengthens existing relationships, it also unlocks a completely new audience for your brand.  </Content>
					
			</TextContainer>

        
      </Right>


        
      {/* <TextAnim blok={blok}/> */}
    </HeroSection>
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
const ContentVideo = styled.div`
  display: flex ;
  height: 100vh;

`;

const HeroSection = styled(motion.div)`
  display: flex ;
  height: 110vh;
  z-index: 9;
  background-color: white;
  flex-direction: column;
  @media ${device.laptop} { 
    flex-direction: row-reverse;
  }
`

const Left = styled.div`
  width: 100% ;
  background-color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  padding: 2rem 0;

  h1 {
    max-width: 70%;
    font-size: 2.438rem;
    line-height: 3.438rem;
    font-family: "sequel100black85",sans-serif;
  }

  @media ${device.laptop} { 
    width: 80% ;
  }

`

const Right = styled.div`
  width: 100% ;
  background-color: black;
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 3rem 1rem 3rem 1.4rem;



  @media ${device.mobileS} { 
    padding: 3rem 1rem 3rem 1.4rem;

  }
  @media ${device.laptop} { 
    width: 20% ;
    /* padding: 3rem 6rem 16rem 6rem; */
    padding: 0 7rem 10rem 7rem
  }

`

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

`

const TabletFrame = styled.svg`
  display: block;
  position: relative;
  width: 120%;
  height: 100%;
  z-index: 10;

  @media ${device.mobileL} { 
    width: 90%;
    margin: auto;
  }

  @media ${device.laptop} { 
    width: 120%;
  }

  /* @media ${device.mobileS} { 
    width: 100%;
    margin: auto;
   
  }
  @media ${device.mobileM} { 
    width: 100%;
  }
@media ${device.mobileL} { 
    width: 100%;
    margin: auto;

  
  }

  @media ${device.tablet} { 
    width: 100%;
    margin: auto;

  } */
`
const TabletWrapper = styled.div`
position: relative;


`
const VideoStyle = styled.div`
position: absolute;
left: 10px;
top: 20px;
width: 100%;
overflow: hidden;

height: 100%;
width: 114%;
z-index: 9;

@media ${device.mobileL} { 
    width: 88%;
    left: 28px;
    top: 10px;
  }

  @media ${device.tablet} { 
    width: 86%;
    left: 48px;
    top: 20px;
  }
  @media ${device.laptop} { 
    width: 114%;
    left: 10px;
    top: 20px;
  }

/* @media ${device.mobileS} { 
    width: 100%;
    top: 8px;
    left: 16px;
  }
  @media ${device.mobileM} { 
    width: 100%;
    top: 10px;
    left: 20px;
  }
@media ${device.mobileL} { 
    width: 100%;
    left: 28px;
  }

  @media ${device.tablet} { 
    width: 100%;
    left: 50px;
    top: 12px;
  } */

`

const Title = styled.h2`
color: white;
font-size: 30px;
font-family: "sequel100black85",sans-serif;
text-transform: uppercase;

`
const Content = styled.p`
color: white;
font-family: "sequel100black55",sans-serif;
line-height: 1.6;
max-width: 70%;


`

export default VideoSection