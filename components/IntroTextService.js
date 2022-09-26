import styled from "styled-components"
import { motion, useScroll} from "framer-motion";
import { device } from "./device";

import DividerBlack from "./DividerBlack"


const IntroTextService = ({reverse, quote, divider, blok}) => {
  const Container = styled.div`
  display: flex ;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: ${reverse ? '#ff2685' : '#000'};
`
  const DividerContainer = styled.div`
  position: absolute;
  top: -6%;
  left: 0%;
  width: 100vw;
  z-index: 8;
  display: ${divider ? 'block' : 'none'};

  
  @media ${device.mobileS} { 
    top: -2%;
  
    }
  
    @media ${device.desktop} { 
      top: -6%;
  
    }
  `

  return (
    <>
        <Container >
        <ImageContainer 
  >
  <img
          src="/lines.gif"
          alt=""
          style={{
            height: '100%',
            objectFit: 'cover'
        }}
        
      />
  </ImageContainer>
        {/* <DividerContainer>
      <DividerBlack></DividerBlack>
      </DividerContainer> */}
      <Left>

        <h1>{quote}</h1>
    
 
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


const ImageContainer = styled(motion.div)`
position: absolute;
top: -20px;
right: -30px;

img {
  opacity: 0.8;
}

`


const Left = styled.div`
  width: 100vw ;
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
    font-size: 8rem;
    text-transform: uppercase;
    text-align: center;
    font-family: "sequel100black85",sans-serif;

    span {
    background-color: #ff2685;
    padding: 0.3rem 0.2rem 0.2rem 0.2rem;
    }

    @media ${device.mobileS} { 
      font-size: 2rem;
      max-width: 90%;
  }
    @media ${device.laptop} { 
      font-size: 4rem;
      line-height: 5rem;
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

export default IntroTextService;