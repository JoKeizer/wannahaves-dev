import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { device } from './device';

import styled from "styled-components"
import AnimatedText from "./helpers/AnimatedText";


const Intro = ({ setLoading }) => {

const leftText = [

  {
    type: "heading1",
    text: "The Social"
  },
  {
    type: "heading1",
    text: "Brand agency"
  },
];

const containerAnim = {
  visible: {
    transition: {
      staggerChildren: 0.055
    }
  },
};

const CenterAnimation = {
  hidden: { x: 0,  },
  visible: {
    x: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.25, delay: 1 }


  },
  exit: {
    x: "200%",
    transition: {
      duration: 1,
      delay:1.4
    }
  }
}


  return (
    <>

        <Container>
            <LeftColumn  
            >
              <Test
               key="left" 
               variants={CenterAnimation}
               initial="hidden"
               animate="visible"
               exit="exit"
              >

                
              </Test>   
            </LeftColumn>
            <CenterColumn 
            
            >
                        <Test
               key="left" 
               variants={CenterAnimation}
               initial="hidden"
               animate="visible"
               exit="exit"
              >

                
              </Test> 
            </CenterColumn>
            <RightColumn 
         
            >
                        <Test
               key="left" 
               variants={CenterAnimation}
               initial="hidden"
               animate="visible"
               exit="exit"
              >

                
              </Test> 
            </RightColumn>
        </Container>
    <IntroContainer
        variants={containerAnim}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="loader-inner"
      >
            {leftText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
            })}
    </IntroContainer>
    </>

  );
};

const Container = styled(motion.div)`
width: 100vw;
height: 100vh;
background-color: black;
position: relative;
display: flex;

`

const IntroContainer = styled(motion.div)`
width: 100vw;
height: 90vh;
display: flex;
justify-content: flex-end;
align-items: flex-start;
padding: 0 0 5rem 4rem;
flex-direction: column;
position: absolute;
left: 0;
bottom: 0;


`




const LeftColumn = styled(motion.div)`
  /* float: left; 
  width: 48%;  */
  background-color: transparent;
  height: 100%;
  width: 33.33%;
  overflow: hidden;
  @media ${device.mobileL} { 
    width: 33.33%; 
  } 
`

const Test = styled(motion.div)`
width: 100%;
height: 100%;
background-color: black;

`

const CenterColumn = styled(motion.div)`
 background-color: transparent;
  height: 100%;
  width: 33.33%;
  overflow: hidden;

`

const RightColumn = styled(motion.div)`
  background-color: transparent;
  height: 100%;
  width: 33.33%;
  overflow: hidden;

`

export default Intro;