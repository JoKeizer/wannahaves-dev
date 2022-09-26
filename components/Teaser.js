import {react, useState, useRef, useEffect} from 'react'

import { storyblokEditable } from '@storyblok/react';
import styled from "styled-components"
import { motion, useScroll} from "framer-motion";

import Burger from './Burger';
import Menu from './Menu'
import { device } from "./device"

// import Logo from '../public/WannahavesLogo.svg'
import Logo from './Logo'

const Teaser = ({ reverse,  blok }) => {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const { scrollYProgress } = useScroll();

  const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  background: ${reverse ? '#000' : "#fff0"};

  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  svg {
      fill: white;
      width: 200px;
  
  }
  
  `

  return (
    <Container  initial={{ opacity: 1, y: -180 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      ease: "easeInOut",
      duration: 1,
      delay: 0,
    }}>
      <Bar style={{ scaleX: scrollYProgress }} /> 
      <MenuHeader>
        <div>
        <Logo/>

        </div>
      <MenuContainer >
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </MenuContainer>
      </MenuHeader> 

    </Container>
  );
};





const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: white;
  transform-origin: 0%;
`

const MenuHeader = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 2rem 6rem 0 6rem;
@media ${device.mobileS} { 
  padding: 2rem 1.6rem 0 1.6rem;

}

@media ${device.laptop} { 
  padding: 2rem 6rem 0 6rem;
}
`
const MenuContainer = styled.div`


&before {
  content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #fbf9f6;
    transition: transform .8s cubic-bezier(.19,1,.22,1);
}
`
export default Teaser;
