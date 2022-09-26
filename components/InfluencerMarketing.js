import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';
import { device } from './device';

function InfluencerMarketing({color}) {
  const Path = styled.path`
  fill: ${color};
`
  const containerAnim = {
    visible: {
      transition: {
        staggerChildren: 0.055
      }
    }
  };

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0" y="0" viewBox="0 0 250 265" x="0" y="0" viewBox="0 0 250 265" x="0" y="0" viewBox="0 0 250 265" x="0" y="0" viewBox="0 0 250 265"
    >

<Path d="M243.7,92.3h-28.4c-3.4,0-6.2,2.3-6.2,5.1s2.8,5.1,6.2,5.1h28.4c3.4,0,6.2-2.3,6.2-5.1S247.2,92.3,243.7,92.3z"
	/>
<Path  d="M248.6,38.5c-1.2-1.5-3-2.4-4.9-2.4c-1.4,0-2.7,0.5-3.9,1.4l-28.4,23.1c-2.7,2.2-3.1,6.1-1,8.9
	c1.2,1.5,3,2.4,4.9,2.4c1.4,0,2.7-0.5,3.9-1.4l28.4-23.1C250.3,45.2,250.7,41.2,248.6,38.5z"/>
<Path d="M249.9,152.7c-0.2-1.4-1-2.7-2.3-3.6l-28.4-19.8c-1.1-0.8-2.4-1.2-3.8-1.2c-1.9,0-3.7,0.7-4.9,2
	c-2.1,2.3-1.7,5.7,1,7.6l28.4,19.8c1.1,0.8,2.4,1.2,3.9,1.2c1.9,0,3.7-0.7,4.9-2C249.6,155.5,250.1,154.1,249.9,152.7z"/>
<Path d="M198.9,185.7V0.5L58.2,57.5H21.8C9.7,57.5,0,67.5,0,79.6v29.7c0,11.4,9,19.4,21.9,19.4h11l10.7,75.7h43.8
	l-7.6-67L198.9,185.7z M21.8,117c-3.1,0-10.2-0.7-10.2-7.6V79.6c0-5.7,4.6-10.3,10.2-10.3h31.6V117H21.8z M53.7,192.8l-9-63.9h13.6
	l9.3,3.8l0,0.5l6.6,59.7H53.7z M74.2,122.6l-0.3-0.1l-8.8-3.5V67.4l122.1-49.4v150.2L75,122.9C74.7,122.8,74.5,122.7,74.2,122.6z"/>
    </Svg>


  );
}

const Svg = styled.svg`
 width: 100px;

 @media ${device.mobileS} { 
  width: 60px;
  }

  @media ${device.tablet} { 
    width: 80px;
  }
  @media ${device.laptop} { 
    width: 100px;
  }
`

export default InfluencerMarketing;
