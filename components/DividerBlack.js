import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';
import { device } from './device';

function DividerBlack() {

  const containerAnim = {
    visible: {
      transition: {
        staggerChildren: 0.055
      }
    }
  };

  return (
<div>
<Waves xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<Parallax>
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,133,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#000000" />
</Parallax>
</Waves>
</div>



  );
}

const Waves = styled.svg`
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;

  @media ${device.mobileS} { 
    height:40px;
    min-height:40px;
  }

  @media ${device.desktop} { 
    height:15vh;
    min-height:100px;
  }

`
const Parallax = styled.g`

use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}



@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}

`
const Polygon = styled.polygon`
 fill: white;
`
export default DividerBlack;
