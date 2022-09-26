import styled from "styled-components"
import { device } from "../../components/device"
import React, {useState} from 'react'
import TextImage from "../../components/TextImage"
import FormService from "../../components/FormService";
import Teaser from "../../components/Teaser"
import Link from 'next/link'

const Work = () => {

  return (
    <>
    <Teaser reverse="false"/>
        <Container>
        <ImageContainerLines 
  >
  <img
          src="/lines.gif"
          alt=""
          style={{
            height: '100%',
            objectFit: 'cover'
        }}
        
      />
  </ImageContainerLines>
        <Header>
          <SubText>Our </SubText>
            <h2>succes stories</h2>
          </Header>
          <Wrapper>
       
          <Link href="./work/voetbaldirect" >
            <Card>
              <ImageContainer>
                <img src=".././images/cases/1.jpg"></img>
                <TextOverlay>
                  <h2>Voetbaldirect</h2>
                </TextOverlay>
                <Overlay></Overlay>
              </ImageContainer>
            </Card>
          </Link>

          <Card>
          <ImageContainer>
          <img src=".././images/cases/2.jpg"></img>
          <TextOverlay>
              <h2>Hela</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/3.jpg"></img>
          <TextOverlay>
              <h2>Puma</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/4.jpg"></img>
          <TextOverlay>
              <h2>Just Eat</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
            <img src=".././images/cases/5.jpg"></img>
            <TextOverlay>
              <h2>H&M</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/6.jpg"></img>
          <TextOverlay>
              <h2>Isko</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/7.jpg"></img>
          <TextOverlay>
              <h2>Electronic</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/8.jpg"></img>
          <TextOverlay>
              <h2>Call of duty</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
            <img src=".././images/cases/1.jpg"></img>
            <TextOverlay>
              <h2>Voetbaldirect</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/2.jpg"></img>
          <TextOverlay>
              <h2>Hela</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/3.jpg"></img>
          <TextOverlay>
              <h2>Puma</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/4.jpg"></img>
          <TextOverlay>
              <h2>Just Eat</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
            <img src=".././images/cases/5.jpg"></img>
            <TextOverlay>
              <h2>H&M</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/6.jpg"></img>
          <TextOverlay>
              <h2>Isko</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/7.jpg"></img>
          <TextOverlay>
              <h2>Electronic</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          <Card>
          <ImageContainer>
          <img src=".././images/cases/8.jpg"></img>
          <TextOverlay>
              <h2>Call of duty</h2>
            </TextOverlay>
            <Overlay></Overlay>
          </ImageContainer>
          </Card>
          </Wrapper>

        </Container>
        <FormService divider="true"/>

    </>
  );
}


const TextOverlay = styled.div`
    position: absolute;
    left: 104px;
    bottom: 17px;
    transform: rotate(-90deg);
    font-size: 2rem;
    transform-origin: left bottom;
    letter-spacing: 6px;
    text-transform: uppercase;
    font-family: "sequel100black85",sans-serif;
    z-index: 10;
    width: 160%;
    opacity: 0.5;
    @media ${device.mobileS} { 
      left: 54px;
      font-size: 1rem;
}

@media ${device.laptop} { 
  left: 104px;
  font-size: 2rem;
}
    
`

const ImageContainerLines = styled.div`
position: absolute;
top: -20px;
right: -30px;

img {
  opacity: 0.8;
}

`



const Overlay = styled.div`
    background-color: #00000078;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9;
    height: 100%;
`
const Card = styled.div`
width: 22%;
border: 2px solid white;
position: relative;
&:hover ${TextOverlay} {
opacity: 1;
}
@media ${device.mobileS} { 
  width: 42%;

}

@media ${device.laptop} { 
  width: 22%;

}

`

const ImageContainer = styled.div`
    width: 100%;
    height: 70vh;


img {
  width: 100%;
  height:100%;
  object-fit: cover;
}

`

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`

const Container = styled.div`
width: 100vw;
background-color: black;
color: white;
border-top: 1px solid white;
display: flex;
flex-direction: column;

@media ${device.mobileS} { 
  padding: 0 6rem 10rem 1.6rem;
}


@media ${device.laptop} { 
  padding: 0 6rem 10rem 6rem;
}
`

const Header = styled.div`
height: 20vh;
display: flex;
justify-content: flex-start;
align-items: flex-end;
position: relative;



h2 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-weight: 50px;

}

`


const SubText = styled.h2 `
  position: absolute;
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-weight: 50px;
  transform: rotate(-90deg);
    transform-origin: left bottom;
    bottom: -75px;
    left: -16px;
    font-size: 1.5em;

    @media ${device.mobileS} { 
      position: relative;
      transform: rotate(0deg);
      bottom: 0;
      left: 0;
      padding-right: 0.4rem;
}


@media ${device.laptop} { 
  position: absolute;
  transform: rotate(-90deg);
  bottom: -75px;
  left: -16px;
  padding-right: 0;
}

`
export default Work;