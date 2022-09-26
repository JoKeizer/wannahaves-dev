import { gsap } from "gsap/dist/gsap";
import {useRef, useEffect} from 'react'
import { SplitText } from "gsap/dist/SplitText";
import VideoSection from './VideoSection'
import styled from 'styled-components';

import TextAnim from "./TextAnim";


// configure/register once we're running in the browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);

  gsap.defaults({
    duration: 1
  });
}

const Hero = ({blok}) => {
  const resizedImage = function(imageUrl) {
    if (typeof imageUrl !== 'undefined') {
      return imageUrl.filename.replace('//a.storyblok.com', '//img2.storyblok.com/')
    }
    return null
  }

  const heroImg = useRef(null);
  
  useEffect(() => {
    const image = heroImg.current;
 

    gsap.fromTo(image, 
    {scale: 1.3, }, 
    {
      scale: 1, 
      delay: 0.35,
      duration: 2.5,
      ease: 'elastic.out(1.5,1)'
    })
    
  

  }, []);
  


  return (
    <Container>
      <HeroSection>
      <img src={resizedImage(blok.image)}  ref={heroImg} alt=""/>
      <TextAnim blok={blok}/>
    </HeroSection>
  
    </Container>

    
  )
}

const Container = styled.div`
  position: relative;
`

const HeroSection = styled.div`
  position: relative;
  height: 100vh;

  img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  }
`

export default Hero