import styled from "styled-components"
import { device } from "./device"
import React, {useState} from 'react'
import Link from 'next/link'


import Footer from "./Footer"

import ClientLogoService from "./ClientLogosService"


const TextImage = ({title, subTitle, paragraphOne, paragraphTwo, image, reverse, buttonBack, buttonBackLink, buttonNext, buttonNextLink}) => {
  const ImageWrapper = styled.div`
  width: 50%;
  height: 100vh;
  position: absolute;
  z-index: 9;
  
  @media ${device.mobileS} { 
    width: 100vw;
    height: 50vh;
    right: ${reverse ? '0vw' : '0'};

  }
  
  @media ${device.laptop} { 
    width: 50%;
    height: 100vh;
    right: ${reverse ? '50vw' : '0'};

  
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  `

const Container = styled.div`
width: 100vw;
background: black;
color: white;
border-top: 1px solid white;
display: flex;


@media ${device.mobileS} { 
  flex-direction: column;
  height: unset;
overflow: hidden;
}

@media ${device.laptop} { 
  flex-direction: ${reverse ? 'row-reverse' : 'row'};
  height: 100vh;
overflow: hidden;
}
`

var linkBack = ` ${buttonBackLink}`
var linkNext = ` ${buttonNextLink}`


  return (
    <>
     <Container>
      <Left>
        <h2>{subTitle}</h2>
        <h1>{title}</h1>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>

        <LinkContainer>
        <Link href={{ pathname: linkBack, }} >
          <Button>{buttonBack}</Button>
        </Link>

        <Link href={{ pathname: linkNext, }} >
          <Button>{buttonNext}</Button>
        </Link>
        </LinkContainer>



    
      </Left>
      <Right>
        <ImageWrapper>
          <img src={image}></img>
        </ImageWrapper>

      </Right>
     
    </Container>
  
    </>
   
  );
}
const LinkContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding-top: 2rem;

@media ${device.mobileS} { 
  flex-direction: column;
  width: 90%;
}

@media ${device.laptop} { 
  flex-direction: row;
}

`
const Button = styled.button`
   padding: 1rem 2rem;
   border: 1px solid white;
   background-color: transparent;
   color: white;
   font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  cursor: crosshair;

  &:hover {
    background-color: white;
    color: #ff2685;
  }

  @media ${device.mobileS} { 
    margin-bottom: 1rem;
  }

@media ${device.laptop} { 
  margin-bottom: ;
}

`

const ButtonContainer = styled.div`
padding-top: 2rem;
`

const ImageContainer = styled.div`
position: absolute;
left: 0;
top:0;
overflow: hidden;
height: 100%;
z-index: 1;
filter: blur(4px);

img {
  width: 100%;
  height:100%;
  object-fit: cover;
  opacity: 0.5;
}

`


const Left = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 50%;


@media ${device.mobileS} { 
  padding-left: 1.6rem;
  padding-bottom: 3rem;
  padding-top: 8rem;
  width: 100%;

  &.hide {
    padding-left: 1.6rem;
    padding-top: 0rem;

  }
}

@media ${device.laptop} { 
  padding-left: 6rem;
  width: 50%;
  padding-right: 6rem;
  &.hide {
  padding-left: 0rem;
  padding-top: 8rem;

}

}




h1 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-family: "sequel100black85",sans-serif;
  font-size: 2rem;
  margin-top: 0.4rem;

}

h2 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  margin: 0;
  background-color: #ff2685;
  padding: 0.3rem 0.2rem 0.2rem 0.2rem;
}





p {
  max-width: 60%;
  font-family: "sequel100black85",sans-serif;
  line-height: 1.4;
  letter-spacing: 0.4px;
  color: white;

  @media ${device.mobileS} { 
    max-width: 90%;}

  @media ${device.laptop} { 
    max-width: 70%;}
  }

`

const Right = styled.div`
width: 50%;

@media ${device.mobileS} { 
  padding-left: 1.6rem;
  width: 100%;
  height: 50vh;

  
}

@media ${device.laptop} { 
  padding-left: 14rem;
  width: 50%;
  height: unset;

}
`





export default TextImage;