import styled from "styled-components"
import { motion, useScroll} from "framer-motion";
import { device } from "./device";
import Stamp from "./Stamp"
// import ClientLogos from "./ClientLogos.js"
import Footer from "./Footer.js"

import SocialBrandStrategy from "./SocialBrandStrategy"
import ContentCreation from "./ContentCreation"
import SocialMediaManagement from "./SocialMediaManagement"
import Influencermarketing from "./InfluencerMarketing"
import MediaDistribution from "./MediaDistribution"
import DividerBlack from "./DividerBlack"

const IntroText = ({blok}) => {

  return (
    <>
        <Container >
        <DividerContainer>
      <DividerBlack></DividerBlack>
      </DividerContainer>
      <Left>
        <StampWrapper>
        <Stamp></Stamp>
        </StampWrapper>
        <h1>{blok.Text}</h1>
        <IconWrapper>
          <SocialBrandStrategy color="#fff"/>
          <ContentCreation color="#fff"/>
          <SocialMediaManagement color="#fff"/>
          <Influencermarketing color="#fff"/>
          <MediaDistribution color="#fff"/>

        </IconWrapper>

        <Button href="/" class="m05__button button">{blok.Button}
        </Button>
              </Left>

    </Container>
    {/* <ClientLogos/> */}

    {/* <Footer/> */}



    </>

  );
}

const Button = styled.a`
   padding: 1rem 2rem;
   border: 1px solid white;
   color: white;
   font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
     text-decoration: none;

`

const Container = styled.div`
  display: flex ;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  position: relative;
  position: relative;

  /* @media ${device.laptop} { 
    flex-direction: column;
    height: 100vh;
  } */

`

const DividerContainer = styled.div`
position: absolute;
top: -6%;
left: 0%;
width: 100vw;
z-index: 8;

@media ${device.mobileS} { 
  top: -2%;

  }

  @media ${device.desktop} { 
    top: -6%;

  }

`
const StampWrapper = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 600px;
z-index: -1;

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

const IconWrapper = styled.div`
display: flex;
flex-direction: row;
padding-bottom: 2rem;
svg {
  width: 50px;
  padding: 2rem;

  @media ${device.mobileS} { 
    width: 40px;
  padding: 1.1rem;  }

  @media ${device.laptop} { 
    width: 50px;
  padding: 2rem;  }
}

`
const Left = styled.div`
  width: 100vw ;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  /* padding: 2rem 1.6rem; */
  z-index: 3;
  flex-direction: column;

  /* @media ${device.mobileS} { 
      padding: 2rem 4rem;
      justify-content: flex-start;
      width: 90% ;
  } */

  h1 {
    max-width: 90%;
    font-size: 1.438rem;
    line-height: 1.938rem;
    text-transform: uppercase;
    text-align: center;
    font-family: "sequel100black85",sans-serif;
    @media ${device.mobileS} { 
      font-size: 1.138rem;
      max-width: 90%;
  }
    @media ${device.laptop} { 
      font-size: 2.438rem;
      line-height: 3.438rem;
      max-width: 70%;
    }
  }
`



const Right = styled.div`
  width: 100% ;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "sequel100black85",sans-serif;
  align-items: flex-end;
  padding: 3rem 1rem 3rem 1.4rem;



  @media ${device.mobileS} { 
    padding: 3rem 3rem 16rem 1.6rem;
   justify-content: flex-start;
  }

  @media ${device.laptop} { 
    width: 34% ;
  }


`

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

const Title = styled.h2`
color: black;
font-size: 30px;
font-family: "sequel100black85",sans-serif;
text-transform: uppercase;

@media ${device.mobileS} { 
  max-width: 90%;
  }

`
const Content = styled.p`
color: black;
font-family: "sequel100black55",sans-serif;
line-height: 1.6;
max-width: 70%;
@media ${device.mobileS} { 
  max-width: 90%;
  }

`

export default IntroText;