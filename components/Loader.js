import {useRef, useEffect} from 'react'
import { gsap } from "gsap/dist/gsap";
import { device } from './device';

import styled from "styled-components"


import { SplitText } from "gsap/dist/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);

  gsap.defaults({
    duration: 1
  });
}

const Intro = ({ setLoading }) => {
const social = useRef(null);
const is = useRef(null);
const our = useRef(null);
const dna = useRef(null);
const container = useRef(null);
const bar = useRef(null);
const barWrapper = useRef(null);
const textLoading = useRef(null);

  useEffect(() => {
    const socialRef = social.current;
    const isRef = is.current;
    const ourRef = our.current;
    const dnaRef = dna.current;
    const containerRef = container.current;
    const barRef = bar.current;
    const text = textLoading.current;
    const barContainer = barWrapper.current;


    gsap.timeline({})

    .set(barRef, {xPercent: -100})

    .to( barRef, 4.8, {xPercent:0, delay: 0, onComplete() {
      setLoading(false)
    }} )

    .fromTo(socialRef, {scale: 0, autoAlpha: 0.5}, {scale: 1, autoAlpha: 1, duration: 0.2, ease: "bounce"}, "-=4.3")
    .fromTo(socialRef, {autoAlpha: 1}, {autoAlpha: 0, duration: 0.2}, "-=4.1")


    .fromTo(isRef, {scale: 0, autoAlpha: 0.5}, {scale: 1, autoAlpha: 1, duration: 0.2}, "-=3.9")
    .fromTo(isRef, {autoAlpha: 1}, {autoAlpha: 0, duration: 0.2}, "-=3.7")

    .fromTo(ourRef, {scale: 0, autoAlpha: 0.5}, {scale: 1, autoAlpha: 1, duration: 0.2}, "-=3.5")
    .fromTo(ourRef, {autoAlpha: 1}, {autoAlpha: 0, duration: 0.2}, "-=3.3")


    .fromTo(dnaRef, {scale: 0, autoAlpha: 0.5}, {scale: 1, autoAlpha: 1, duration: 0.2}, "-=3.1")
    .fromTo(dnaRef, {autoAlpha: 1}, {autoAlpha: 0, duration: 1.4,  }, "-=1.7")

    .fromTo(barContainer, {autoAlpha: 1}, {autoAlpha: 0, duration: 1.2}, "-=1.7")
    .fromTo(text, {autoAlpha: 1}, {autoAlpha: 0, duration: 1.2}, "-=1.5")

    .to(containerRef, {autoAlpha: 0, duration: 0.4, }, "+=1.0")

  }, []);

  return (
    <>
      <Container ref={container}>
        <TextHeading>
            <h1 ref={social}>
            Social
          </h1>
          <h1 ref={is}>
            Is
          </h1>
          <h1 ref={our}>
            Our
          </h1>
          <h1 ref={dna}>
            DNA
          </h1>
        </TextHeading>
      <TextWrapper>
        <Loader>
        <h3 ref={textLoading}>LOADING...</h3>
          </Loader>
      </TextWrapper>
      </Container>
    </>
  );
};

const TextWrapper = styled.div`
/* padding-top: 6rem; */
position: absolute;
left: 50%;
bottom: 10%;
width: 400px;
transform: translateX(-50px);
h3 {
  color: white;
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
}

`

const Loader = styled.div`

`

const BarWrapper = styled.div`
  width: 130%;
  height: 2px;
  position: absolute;
  left: -24px;
  background: #efefef;
  overflow: hidden;
`
const Bar = styled.div`
  width: 100%;
  height: 2px;
  background: pink;
`
const Container = styled.div`
 width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: -8px;
  height: 100vh;
  position: relative;

`
const TextHeading = styled.div`
  position: relative;
h1 {
  position: absolute;
  color: white;
  opacity: 0;
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-size: 100px;
  transform-origin: center;
  transform: translate(-50%, -60%);
  margin: 0;

  animation: neon1 1.5s ease-in-out infinite alternate;

  @keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
      0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
      0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
  }
}
}

`

const SpanWrapper = styled.span`
  position: absolute;
  font-size: 3rem;
  line-height: 4.2rem;
`

export default Intro;