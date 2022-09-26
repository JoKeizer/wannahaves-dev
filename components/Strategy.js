import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components"
import { device } from "./device";
import Divider from "./Divider"
import Slider from "./Slider"
import Form from "./Form";

const Strategy = ({blok}) => {


  return (
    <>
    <Container>
      <DividerContainer>
        <Divider></Divider>
      </DividerContainer>
      <Slider blok={blok}></Slider>
    </Container>
    <Form></Form>
    </>
  );
}

const ImageWrapper = styled.div`
position: absolute;
left: 50%;
top: -100%;
`

const ImageContainer = styled.div`
img {
  width: 100%;
}
`
const Container = styled.div`
background-color: #ff2685;
height: 130vh;
width: 100vw;
display: flex;
flex-direction: row;
z-index: 2;
position: relative;
`

const DividerContainer = styled.div`
position: absolute;
top: -6%;
left: 0%;
width: 100vw;

@media ${device.mobileS} { 
  top: -2%;

  }

  @media ${device.desktop} { 
    top: -6%;

  }
`
const Wrapper = styled.div`
 width: 90%;
  margin: 180px auto;
  height: 100%;

  h2 {
    text-transform: uppercase;
    font-family: "sequel100black85",sans-serif;
  }
`

const Left = styled.div`
width: 50vw;
display: flex;
justify-content: center;
align-items: center;
`

const Right = styled.div`
width: 50vw;
`
const ProjectList = styled.div`
`
const Project = styled.a`
 border-bottom: 1px solid rgba(255, 0, 122, 0.4);
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 1;
  position: relative;
  z-index: 2;
  color: white;
  /* mix-blend-mode: difference; */
  position: relative;
  text-decoration: none;
  cursor: pointer;
`

const ProjectTitle = styled.div`
h2{
  text-transform: uppercase;
  font-family: "sequel100black85",sans-serif;
}

`
const ProjectCategory = styled.div`
  font-weight: lighter;
`

export default Strategy;