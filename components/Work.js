import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styled from "styled-components"
import { motion} from "framer-motion";

const Work = ({ blok }) => (
  
  <MainStyle {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body.map((nestedBlok) => (

      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}

  </MainStyle>
);


const MainStyle = styled.div`
  background-color: black;
  color: white;
  margin: 0;
  position: relative;
`




export default Work;