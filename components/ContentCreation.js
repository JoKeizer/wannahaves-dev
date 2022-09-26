import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';
import { device } from './device';

function ContentCreation({color}) {

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
<g>
	<Path d="M58.8,85.5c-15.4,0-27.9,12.6-27.9,28.1s12.5,28.1,27.9,28.1c15.4,0,27.9-12.6,27.9-28.1S74.2,85.5,58.8,85.5z
		 M58.8,132.2c-10.1,0-18.4-8.3-18.4-18.5c0-10.2,8.2-18.5,18.4-18.5c10.1,0,18.4,8.3,18.4,18.5C77.2,123.9,68.9,132.2,58.8,132.2z"
		/>
	<Path d="M242.4,8.2c-5.1-5.1-11.7-7.9-18.9-7.9c-7.2,0-13.9,2.8-18.9,7.9l-9.6,9.6l-25.8,26H0.2v221.2h219.5v-196
		l9.9-10l12.7-12.8C252.8,35.8,252.8,18.8,242.4,8.2z M195.3,31.3l24.3,24.4l-63.3,63.7l-32.9,8.8l8.7-33.2L195.3,31.3z
		 M210.2,255.4H9.8v-31.2L59,174.7l27.6,27.8l-20,20.2l6.8,6.8l69.1-69.7l67.8,68.3L210.2,255.4L210.2,255.4z M210.2,214.5
		l-67.8-68.3l-49.1,49.5L59,161.1L9.8,210.6V53.5h149.9l-36.2,36.5l-13.5,51.7l51.4-13.6l48.9-49.3V214.5z M235.7,39.6l-9.3,9.4
		l-24.3-24.4l9.3-9.4c3.3-3.3,7.5-5.1,12.1-5.1s8.9,1.8,12.1,5.1C242.4,21.8,242.4,32.8,235.7,39.6z"/>
</g>
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


export default ContentCreation;
