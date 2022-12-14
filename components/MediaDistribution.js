import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';
import { device } from './device';

function MediaDistribution({color}) {

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

<Path d="M42.4,136.1h33.1v-8.4H42.4c-2-9.4-10.5-16.5-20.7-16.5c-11.7,0-21.2,9.3-21.2,20.7c0,11.4,9.5,20.7,21.2,20.7
	C31.9,152.6,40.4,145.5,42.4,136.1z M21.6,144.2c-6.9,0-12.6-5.5-12.6-12.3c0-6.8,5.6-12.3,12.6-12.3c6.9,0,12.6,5.5,12.6,12.3
	C34.2,138.7,28.6,144.2,21.6,144.2z"/>
<Path d="M145.5,147.3c0,6.6-5.3,12.1-11.9,12.3c2.6-3.6,4.1-7.9,4.1-12.3V98.3h-8.4v49c0,3.6-1.5,6.9-4.2,9.2
	c-2.7-2.4-4.2-5.7-4.2-9.2v-49h-8.5v49c0,4.4,1.4,8.8,4.1,12.3c-6.6-0.2-11.9-5.7-11.9-12.3v-49h-8.5v49c0,11.5,9.3,20.8,20.7,20.8
	c2.8,0,5.5-0.5,8.1-1.7c2.6,1.1,5.3,1.7,8.1,1.7c11.5,0,20.8-9.3,20.8-20.8v-49h-8.5V147.3z"/>
<Path d="M121.3,53.5v23.2h8.4V53.5c9.4-2,16.5-10.4,16.5-20.5c0-11.6-9.3-20.9-20.7-20.9s-20.7,9.4-20.7,20.9
	C104.8,43.1,111.9,51.5,121.3,53.5z M125.5,20.6c6.8,0,12.3,5.6,12.3,12.4s-5.5,12.4-12.3,12.4s-12.3-5.6-12.3-12.4
	S118.7,20.6,125.5,20.6z"/>
<Path d="M129.7,212v-23.2h-8.4V212c-9.4,2-16.5,10.4-16.5,20.5c0,11.6,9.3,20.9,20.7,20.9s20.7-9.4,20.7-20.9
	C146.2,222.4,139.1,214,129.7,212z M125.5,244.9c-6.8,0-12.3-5.6-12.3-12.4c0-6.9,5.5-12.4,12.3-12.4s12.3,5.6,12.3,12.4
	C137.8,239.4,132.2,244.9,125.5,244.9z"/>
<Path d="M64.2,55.6c0-5.7-2.2-10.9-6.2-14.9c-4-4-9.3-6.2-14.9-6.2c-5.6,0-10.9,2.2-14.9,6.2c-8.2,8.2-8.2,21.6,0,29.9
	c4,4,9.3,6.2,14.9,6.2c4.2,0,8.2-1.2,11.6-3.5L78,96.5l6.1-6.1L60.8,67.1C63,63.7,64.2,59.7,64.2,55.6z M34.2,64.4
	c-4.9-4.9-4.9-12.9,0-17.7c2.4-2.4,5.5-3.7,8.9-3.7c3.4,0,6.5,1.3,8.9,3.7c2.4,2.4,3.7,5.5,3.7,8.9c0,3.4-1.3,6.5-3.7,8.9
	c-2.4,2.4-5.5,3.7-8.9,3.7C39.7,68.1,36.6,66.8,34.2,64.4z"/>
<Path d="M77.3,167.2l-23,23.3c-3.4-2.3-7.3-3.5-11.4-3.5c-5.6,0-10.8,2.2-14.7,6.2c-8.1,8.2-8.1,21.6,0,29.9
	c3.9,4,9.2,6.2,14.7,6.2c5.6,0,10.8-2.2,14.7-6.2c3.9-4,6.1-9.3,6.1-14.9c0-4.2-1.2-8.2-3.4-11.6l23-23.3L77.3,167.2z M51.6,217.1
	c-2.3,2.4-5.4,3.7-8.8,3.7c-3.3,0-6.4-1.3-8.8-3.7c-4.8-4.9-4.8-12.9,0-17.7c2.3-2.4,5.4-3.7,8.8-3.7c3.3,0,6.4,1.3,8.8,3.7
	c2.3,2.4,3.6,5.5,3.6,8.9C55.2,211.6,53.9,214.7,51.6,217.1z"/>
<Path d="M229.5,111.2c-10.1,0-18.5,7.1-20.5,16.5h-32.7v8.4h32.7c2,9.4,10.4,16.5,20.5,16.5c11.6,0,20.9-9.3,20.9-20.7
	C250.5,120.5,241.1,111.2,229.5,111.2z M229.5,144.2c-6.9,0-12.4-5.5-12.4-12.3c0-6.8,5.6-12.3,12.4-12.3c6.9,0,12.4,5.5,12.4,12.3
	C242,138.7,236.4,144.2,229.5,144.2z"/>
<Path d="M173.8,96.5l23.3-23.3c3.5,2.3,7.5,3.5,11.6,3.5c5.4,0,10.8-2.1,14.9-6.2c4-4,6.2-9.3,6.2-14.9
	c0-5.7-2.2-10.9-6.2-14.9c-8.2-8.2-21.6-8.2-29.9,0c-4,4-6.2,9.3-6.2,14.9c0,4.2,1.2,8.2,3.5,11.6l-23.3,23.3L173.8,96.5z
	 M199.9,46.7c2.4-2.4,5.7-3.7,8.9-3.7c3.2,0,6.4,1.2,8.9,3.7c2.4,2.4,3.7,5.5,3.7,8.9c0,3.4-1.3,6.5-3.7,8.9
	c-4.9,4.9-12.9,4.9-17.7,0c-2.4-2.4-3.7-5.5-3.7-8.9C196.2,52.2,197.5,49.1,199.9,46.7z"/>
<Path d="M197.1,190.6l-23.3-23.3l-6.1,6.1l23.3,23.3c-2.3,3.4-3.5,7.4-3.5,11.6c0,5.7,2.2,10.9,6.2,14.9
	c4.1,4.1,9.5,6.2,14.9,6.2c5.4,0,10.8-2.1,14.9-6.2c4-4,6.2-9.3,6.2-14.9c0-5.7-2.2-10.9-6.2-14.9
	C216.5,186.1,205.3,185.2,197.1,190.6z M217.6,217c-4.9,4.9-12.9,4.9-17.7,0c-2.4-2.4-3.7-5.5-3.7-8.9c0-3.4,1.3-6.5,3.7-8.9
	c2.4-2.4,5.7-3.7,8.9-3.7c3.2,0,6.4,1.2,8.9,3.7c2.4,2.4,3.7,5.5,3.7,8.9C221.3,211.5,219.9,214.7,217.6,217z"/>
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

export default MediaDistribution;
