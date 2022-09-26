import { gsap } from "gsap/dist/gsap";
import {useRef, useEffect} from 'react'
import { SplitText } from "gsap/dist/SplitText";
import VideoSection from './VideoSection'
import styled from 'styled-components';


// configure/register once we're running in the browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);

  gsap.defaults({
    duration: 1
  });
}

const TextAnim = ({blok}) => {
  const cta1 = useRef(null);
  const cta2 = useRef(null);
  const cta3 = useRef(null);
  const cta4 = useRef(null);
  const cta5 = useRef(null);
  const cta6 = useRef(null);
  useEffect(() => {
    const cta1Text = cta1.current;
    const cta2Text = cta2.current;
    const cta3Text = cta3.current;
    const cta4Text = cta4.current;
    const cta5Text = cta5.current;
    const cta6Text = cta6.current;

    gsap.fromTo(cta1Text, {x:"100%", opacity: 0}, {x: 0, opacity: 1}, "<20%")
    gsap.fromTo(cta3Text, {x:"-100%", opacity: 0}, {x: 0, opacity: 1}, "<20%")
    gsap.fromTo(cta2Text, {y:"-100%", opacity: 0}, {y: 0, opacity: 1}, "<20%")
    gsap.fromTo(cta4Text, {x:"100%", opacity: 0}, {x: 0, opacity: 1}, "<20%")
    gsap.fromTo(cta6Text, {x:"100%", opacity: 0}, {x: 0, opacity: 1}, "<20%")
    gsap.fromTo(cta5Text, {y:"100%", opacity: 0}, {y: 0, opacity: 1}, "<20%")

  }, []);
  return (
      <Cta>
      <CtaText>
        <Heading><span ref={cta1}>{blok.cta1}</span></Heading>
        <Heading><Cta2 ref={cta2}>{blok.cta2}</Cta2></Heading>
      </CtaText>
      <CtaText>
      <Heading><span ref={cta3}>{blok.cta3}</span></Heading>

        <Heading><span ref={cta4} >{blok.cta4}</span></Heading>
        <Heading><span ref={cta5}>{blok.cta5}</span></Heading>
        <Heading><span ref={cta6}>{blok.cta6}</span></Heading>
      </CtaText>
      {/* <Button>Explore</Button> */}
    </Cta> 
  )
}


const Cta = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Sequel100Black-85",sans-serif;
`

const CtaText = styled.div`
  display: flex;
  font-size: 2rem;
  font-family: "sequel100black85",sans-serif;

`



const Heading = styled.div`
color: white;
font-family: "sequel100black85",sans-serif;
 font-size: 5rem;
 line-height: 1;
 text-transform: uppercase;
span {
  padding: 0rem 0.4rem;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 0px 20px;
  display: block;
  font-family: "sequel100black85",sans-serif;
  font-size: 5rem;
}

`

const Button = styled.button`
background-color: pink;
`

const Cta2 = styled.span`
  overflow: hidden;

`
export default TextAnim