import React, {useEffect} from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import styled from 'styled-components';
import { device } from './device';

import { useInView } from "react-intersection-observer";

function Logo() {


  const {ref, inView} = useInView({
    threshold: 0.5
  });

  const animationLogo = useAnimation();

  useEffect(() => {

    if(inView) {
      animationLogo.start({
        rotate: 360,
        transition: {
          ease: "linear", duration: 20, repeat: Infinity
        }
      });


    }

    if(!inView) {
      animationLogo.start({
        rotate: 0,

        transition: {
          ease: "linear", duration: 20, repeat: Infinity
        }
      })
    }


  },[inView])


  const containerAnim = {
    visible: {
      transition: {
        staggerChildren: 0.055
      }
    }
  };

  return (
    <SvgContainer  ref={ref}>
      <LogoIcon
 
      >
      <Svg 
     


      xmlns="http://www.w3.org/2000/svg"
      x="0" y="0" viewBox="0 0 250 265" x="0" y="0" viewBox="0 0 500 500" x="0" y="0" viewBox="0 0 500 500" x="0" y="0" viewBox="0 0 350 350"
    >
<g>
	<Group
    animate={animationLogo}

  >

		<Polygon points="9.6,207.6 12.7,215.8 27.9,210.1 29.1,213.4 13.9,219.1 17,227.2 14.2,228.3 6.8,208.7 		"/>
		<Polygon points="0.7,178.1 1.3,181.5 9,180.2 11.2,193.7 3.5,195 4.1,198.4 23,195.2 22.4,191.8 14.2,193.2 
			11.9,179.7 20.2,178.4 19.6,175 		"/>
		<Polygon points="0,166.3 19.2,166.8 19.7,148.4 16.7,148.4 16.3,163.3 10.7,163.1 11,149 8.2,149 7.8,163.1 3,163 
			3.4,148.4 0.4,148.3 		"/>
		
			<Rect x="59.3" y="38.1" transform="matrix(0.7485 -0.6631 0.6631 0.7485 -16.3001 52.4572)" class="st0" width="3.4" height="19.2"/>
		<Path class="st0" d="M83,34.2l-8.5-4.9l-0.1,0.1l1.2,9.7L83,34.2z M85.9,35.9L76,42.4l0.6,4.8l-3.1,2.1l-2.4-21.4l3.4-2.2
			l18.8,10.6L90,38.2L85.9,35.9z"/>
		<Polygon class="st0" points="99,33.4 91.6,15.6 94.8,14.3 101,29.3 114.8,23.6 115.9,26.3 		"/>
		<Path class="st0" d="M206.6,18.7l-1.9-9.6l-0.1,0l-6.6,7.2L206.6,18.7z M207.3,21.9l-11.4-3.2l-3.2,3.5l-3.6-1l14.7-15.8l3.9,1.1
			l4.3,21.1l-3.7-1L207.3,21.9z"/>
		<Polygon class="st0" points="244.7,22.4 236,39.5 232.5,37.7 227.5,18.5 227.4,18.4 220.6,31.6 217.7,30.1 226.5,13.1 230.1,14.9 
			235,34 235.1,34 241.8,20.9 		"/>
		<Path class="st0" d="M287.1,79.8l4.7-8.6l-0.1-0.1l-9.7,1.4L287.1,79.8z M285.6,82.6l-6.7-9.7l-4.7,0.7l-2.2-3.1l21.4-2.9l2.3,3.3
			l-10.1,19l-2.2-3.2L285.6,82.6z"/>
		<Polygon class="st0" points="310.8,123 313.9,136.7 311.1,137.4 308.1,123.6 302.5,124.8 305.7,139.4 302.9,140 298.9,122.1 
			317.7,117.9 321.5,135.5 318.7,136.1 315.5,121.9 		"/>
		<Polygon class="st0" points="303.9,147.6 303.9,150.8 318.8,150.5 318.8,150.6 304.3,164.2 304.4,168.1 323.6,167.6 323.5,164.3 
			308.8,164.7 308.8,164.6 323.1,151.1 323,147.1 		"/>
		<Polygon class="st0" points="301.2,215.8 294.5,213.3 295.7,210.1 302.3,212.6 317,207.9 315.5,211.9 304.6,215.3 310.5,225.1 
			309.1,228.9 		"/>
		<Polygon class="st0" points="266,258.6 280.2,264.8 280.3,264.7 272.3,251.5 274.9,248.5 293.5,256.3 291.1,259.1 276.8,252.8 
			276.7,252.8 284.8,266.3 282.3,269.2 267.9,262.9 267.8,263 276.1,276.3 273.7,279.1 263.4,261.7 		"/>
		<Path class="st0" d="M249,283.1l8.8,4.3l0.1-0.1l-1.8-9.6L249,283.1z M246.1,281.7l9.4-7.2l-0.9-4.7l3-2.3l3.8,21.2l-3.2,2.4
			l-19.5-9.3l3.1-2.4L246.1,281.7z"/>
		<Polygon class="st0" points="223.2,311.4 214.8,294.1 218.3,292.4 236.7,300 236.8,299.9 230.3,286.6 233.2,285.1 241.6,302.4 
			238,304.2 219.8,296.7 219.7,296.7 226.2,309.9 		"/>
		<Polygon class="st0" points="192.1,320.6 187.3,302 191.1,301 207.6,312.1 207.7,312.1 204,297.7 207.2,296.9 211.9,315.5 
			208,316.5 191.7,305.5 191.6,305.5 195.2,319.8 		"/>
		<Path class="st0" d="M165.2,311.1l8.9-0.5l-3.9,9l-0.1,0L165.2,311.1z M177.3,303.3l-1.9,4.4l-11.8,0.6l-2.3-4.2l-3.9,0.2
			l10.8,18.7l4-0.2l8.8-19.7L177.3,303.3z"/>
		<Polygon class="st0" points="127.9,319.9 131.4,320.4 132.5,312.6 146,314.6 144.9,322.4 148.3,322.9 151.1,303.9 147.7,303.4 
			146.4,311.7 132.9,309.7 134.1,301.4 130.7,300.9 		"/>
		<Path class="st0" d="M106.8,300.8l1.2,9.7l0.1,0l7.1-6.7L106.8,300.8z M106.5,297.5l11.1,4l3.5-3.3l3.5,1.3l-15.8,14.7l-3.8-1.4
			l-2.7-21.4l3.6,1.3L106.5,297.5z"/>
		<Polygon class="st0" points="90,289.2 89.9,289.1 76.1,298.7 72.7,296.9 90.5,284.8 93.5,286.5 92.4,308 89,306 		"/>
		<Polygon class="st0" points="67.1,282.9 56.3,273.9 58.1,271.7 68.9,280.7 72.6,276.4 61.2,266.8 63,264.6 77.1,276.4 64.8,291.1 
			51,279.5 52.9,277.3 64,286.6 		"/>
		<Path class="st0" d="M150.9,15.9c0.5-0.5,0.7-1.3,0.6-2.3c-0.1-1-0.5-1.7-1.1-2.1c-0.6-0.4-1.5-0.5-2.6-0.4l-9.6,1.1l0.7,5.8
			l9.6-1.1C149.6,16.7,150.5,16.4,150.9,15.9 M149.4,7.6c0.4-0.4,0.6-1.1,0.5-2c-0.1-0.9-0.4-1.5-0.9-1.8s-1.3-0.5-2.3-0.3l-9.4,1.1
			l0.6,5l9.4-1.1C148.3,8.3,149,8,149.4,7.6 M154.1,10.3c0.6,0.7,1,1.7,1.1,3.1c0.2,1.9-0.2,3.3-1.1,4.3c-1,1-2.5,1.6-4.7,1.9
			l-13.6,1.6l-2.2-19.1L147,0.6c2.1-0.2,3.6,0,4.7,0.7c1.1,0.7,1.7,1.9,1.9,3.5c0.2,2.1-0.3,3.5-1.7,4.1l0,0.1
			C152.8,9.2,153.6,9.6,154.1,10.3"/>
		<Path class="st0" d="M180.1,8.7c0.5-0.4,0.8-1.1,0.9-2c0.1-0.9-0.1-1.6-0.6-2.1c-0.5-0.5-1.2-0.7-2.3-0.8l-10.2-0.8l-0.4,5.4
			l10.2,0.8C178.8,9.2,179.6,9.1,180.1,8.7 M184.2,20.4l-4-0.3l-4.1-8.2l-8.8-0.7l-0.6,7.8l-3.4-0.3l1.5-19.1l13.9,1.1
			c2.3,0.2,4,0.8,4.9,1.8c1,1,1.4,2.5,1.3,4.5c-0.2,3-1.9,4.7-5,4.9l0,0.1L184.2,20.4z"/>
		<Path class="st0" d="M255.6,33.4l-8.4,10.5l5.2,4.2c1.7,1.4,3.4,2.1,5.1,2c1.6-0.1,3.1-1,4.6-2.8c1.4-1.8,2-3.5,1.7-5.1
			c-0.3-1.6-1.3-3.1-3-4.5L255.6,33.4z M265.1,49.6c-4,5-8.6,5.4-13.9,1.2l-8.5-6.8l12-15l8.5,6.8C268.5,40,269.1,44.6,265.1,49.6"
			/>
		<Path class="st0" d="M296.6,114.2l-1.1-2.6l2.6-1.2c-1.4-0.3-2.6-0.9-3.6-1.9c-1-1-1.9-2.3-2.6-4c-1-2.2-1.5-4.2-1.5-6.2
			c0-1.9,0.4-3.7,1.4-5.2c1-1.5,2.5-2.7,4.5-3.6c2-0.9,3.9-1.2,5.7-0.9c1.8,0.3,3.3,1.1,4.7,2.4c1.4,1.3,2.6,3,3.5,5.2
			c1.4,3.1,1.8,5.7,1.4,7.8c-0.4,2.1-1.5,3.7-3.3,4.8l-1.6-3.6c0.9-0.7,1.5-1.6,1.7-2.9c0.2-1.3-0.1-2.9-1-4.9
			c-1-2.2-2.3-3.7-3.9-4.5c-1.7-0.8-3.6-0.7-5.7,0.2c-2.2,1-3.5,2.3-4,4.1c-0.5,1.8-0.3,3.8,0.7,6.2c1.6,3.7,4.1,5.1,7.3,4.2
			l-2.6-5.9l2.5-1.1l4.2,9.6L296.6,114.2z"/>
		<Path class="st0" d="M316.4,194c1-1,1.7-2.5,2.1-4.6c0.4-2.2,0.1-4.1-0.8-5.7c-0.9-1.6-2.6-2.5-4.9-2.9c-2.3-0.4-4.2,0-5.6,1.1
			c-1.4,1.1-2.3,2.8-2.7,5.1c-0.4,2.1-0.2,3.8,0.4,5.1c0.7,1.3,1.7,2.1,3.2,2.4l-0.7,4c-1.6-0.3-2.9-1-3.9-2.1c-1-1.1-1.7-2.5-2-4.2
			c-0.3-1.7-0.3-3.6,0-5.8c0.4-2.2,1.1-4,2.1-5.6c1-1.6,2.4-2.7,4-3.4c1.7-0.7,3.6-0.8,5.7-0.5c2.2,0.4,3.9,1.2,5.2,2.4
			c1.3,1.2,2.2,2.7,2.7,4.5c0.4,1.8,0.5,3.8,0.1,6c-0.4,2.2-1,4-1.9,5.4c-0.9,1.5-2,2.5-3.2,3.2c-1.3,0.7-2.6,0.9-4.1,0.8l0.7-3.9
			C314.2,195.4,315.3,195,316.4,194"/>
		<Path class="st0" d="M36.8,259.1c0.3,1.2,1.1,2.5,2.3,4c2.4,2.9,4.3,3.7,5.7,2.5c0.6-0.5,0.8-1,0.8-1.6c-0.1-0.6-0.4-1.4-1-2.3
			l-4-5.9c-1.1-1.6-1.6-3-1.6-4.3s0.7-2.6,2.1-3.7c1.7-1.4,3.5-1.7,5.3-0.9c1.9,0.8,3.9,2.4,6,5c2.1,2.5,3.3,4.8,3.6,6.9
			c0.3,2.1-0.5,3.9-2.4,5.6l-2.4-2.9c1.2-1.1,1.6-2.2,1.4-3.5c-0.3-1.3-1.1-2.7-2.4-4.3c-1.3-1.6-2.5-2.7-3.6-3.2
			c-1.1-0.5-2.1-0.4-2.9,0.2c-0.7,0.6-1,1.2-1,1.8c0.1,0.6,0.4,1.4,0.9,2.2l4,6c1.1,1.6,1.6,3,1.7,4.3c0,1.3-0.6,2.4-1.9,3.5
			c-1.5,1.3-3.2,1.6-5,0.9s-3.6-2.2-5.5-4.5c-4.2-5.1-4.7-9-1.5-11.7l2.4,2.9C36.9,257,36.5,258,36.8,259.1"/>
		<Path class="st0" d="M11.6,110.6c-0.8,0.9-1.5,2.3-2.1,4.1c-1.1,3.5-0.8,5.6,1,6.1c0.7,0.2,1.3,0.1,1.8-0.3
			c0.5-0.4,0.9-1.1,1.3-2.1l2.7-6.6c0.7-1.8,1.6-3,2.7-3.8c1.1-0.7,2.5-0.8,4.3-0.3c2.1,0.6,3.3,2,3.7,4c0.4,2,0.1,4.6-0.9,7.8
			c-1,3.1-2.2,5.4-3.8,6.8c-1.5,1.4-3.5,1.7-6,1l1.1-3.6c1.5,0.4,2.7,0.1,3.7-0.8c0.9-0.9,1.7-2.4,2.3-4.4c0.6-2,0.8-3.6,0.7-4.8
			c-0.2-1.2-0.8-2-1.8-2.3c-0.9-0.3-1.6-0.2-2.1,0.2c-0.5,0.4-1,1.1-1.4,2l-2.8,6.6c-0.8,1.8-1.7,3-2.7,3.8c-1,0.7-2.3,0.8-3.9,0.4
			c-1.9-0.6-3-1.8-3.4-3.7c-0.4-1.9-0.2-4.2,0.7-7.1c2-6.3,5-8.8,9-7.7l-1.1,3.6C13.4,109.4,12.4,109.7,11.6,110.6"/>
		<Path class="st0" d="M35.7,86.3c-0.4-1.8-1.6-3.3-3.7-4.4c-2.1-1.1-4-1.4-5.7-0.7c-1.7,0.7-3.2,2.1-4.3,4.2
			c-1.2,2.1-1.6,4.1-1.2,5.9c0.4,1.8,1.6,3.3,3.7,4.4c2.1,1.1,4,1.4,5.7,0.7c1.7-0.7,3.2-2.1,4.3-4.2C35.7,90.1,36.1,88.1,35.7,86.3
			 M23.3,79.2c1.5-1.2,3.1-1.8,4.9-2c1.8-0.1,3.7,0.3,5.6,1.4c1.9,1.1,3.3,2.4,4.2,4c0.8,1.6,1.2,3.3,1,5.2
			c-0.2,1.9-0.8,3.8-1.9,5.9c-1.1,2-2.4,3.6-3.9,4.8c-1.5,1.2-3.1,1.8-4.9,2c-1.8,0.1-3.7-0.3-5.6-1.4c-1.9-1.1-3.3-2.4-4.2-4
			c-0.8-1.6-1.2-3.3-1-5.2c0.2-1.9,0.8-3.9,1.9-5.9C20.5,82,21.8,80.4,23.3,79.2"/>
		<Path class="st0" d="M44.7,55.5c-1.4,0.3-2.8,1.3-4.1,2.9c-1.5,1.7-2.2,3.5-2.2,5.3c0,1.8,0.9,3.5,2.7,5c1.8,1.5,3.6,2.1,5.4,1.9
			c1.8-0.3,3.4-1.3,4.9-3c1.4-1.7,2.1-3.2,2.2-4.7c0.1-1.4-0.4-2.7-1.6-3.7l2.6-3.1c1.2,1.1,2,2.3,2.3,3.8c0.3,1.4,0.2,3-0.3,4.6
			c-0.6,1.6-1.6,3.3-3,5c-1.4,1.7-3,2.9-4.7,3.7c-1.7,0.8-3.4,1.1-5.2,0.9c-1.8-0.2-3.5-1.1-5.2-2.5s-2.8-3-3.3-4.7
			c-0.5-1.7-0.5-3.5,0-5.3c0.5-1.8,1.5-3.5,2.9-5.2c1.4-1.7,2.9-2.9,4.4-3.7c1.5-0.8,3-1.2,4.4-1.1c1.4,0.1,2.7,0.5,3.9,1.4
			l-2.6,3.1C47.3,55.4,46.1,55.1,44.7,55.5"/>
	</Group>
	<Path class="st0" d="M195.5,106.9v76.9c0,11.4-9.3,20.7-20.7,20.7c-0.5,0-1,0-1.5-0.1c4.7-5.6,7.6-12.8,7.6-20.6v-76.9h-11.3v76.9
		c0,6.5-3,12.3-7.7,16.1c-4.7-3.8-7.7-9.6-7.7-16.1v-76.9h-11.3v76.9c0,7.8,2.9,15,7.6,20.6c-0.5,0-1,0.1-1.5,0.1
		c-11.4,0-20.7-9.3-20.7-20.7v-76.9h-11.3v76.9c0,17.6,14.4,32,32,32c4.6,0,9-1,13-2.8c4,1.8,8.4,2.8,13,2.8c17.7,0,32-14.3,32-32
		v-76.9H195.5z"/>
</g>
    </Svg>

      </LogoIcon>

    </SvgContainer>




  );
}
const SvgContainer = styled(motion.div)`

`

const LogoIcon = styled(motion.div)`

`
const Svg = styled(motion.svg)`
    width: 600px;

 @media ${device.mobileS} { 
  width: 400px;
  }

  @media ${device.tablet} { 
    width: 500px;
  }
  @media ${device.laptop} { 
    width: 600px;
  }
  
`

const Group = styled(motion.g)`
 transform-origin: center;

`
const Path = styled.path`
 fill: #ff26855c;

`
const Polygon = styled.polygon`
 fill: #ff26855c;

`

const Rect = styled.path`
 fill: #ff26855c;
`
export default Logo;
