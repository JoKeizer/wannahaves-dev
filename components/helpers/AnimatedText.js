import React from "react";
import { motion, AnimatePresence} from "framer-motion";
import styled from "styled-components"
import { device } from "../device";


// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <LetterStyle>
  {/* <AnimatePresence> */}
    {props.children}
  {/* </AnimatePresence> */}

</LetterStyle>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2"
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  // Framer Motion variant object, for controlling animation
  const itemLetter = {
    hidden: {
      y: "200%",
      color: "#fff",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.25 }
    },
    visible: {
      y: 0,
      color: "#fff",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.2, delay: 1 }
    },
    exit: {
      x: "200%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration:1.2, delay: 1 }
    }
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
<Text>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                    <Container
                      style={{ display: "inline-block" }}
                      variants={itemLetter}
                    >
                      {element}
                    </Container>

                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Text>
    
  );
};

const Text = styled.h1`
  display: flex;
  margin: 0;
`
const Container = styled(motion.span)`
background-color: transparent;
`

const LetterStyle = styled(motion.div)`

span {
  font-size: 40px;
  color: #ff2685;
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;

  @media ${device.mobileS} { 
    font-size: 40px;
  }

  @media ${device.tablet} { 
    font-size: 60px;
  }
  @media ${device.laptop} { 
    font-size: 100px;
  }
}`

export default AnimatedCharacters;
