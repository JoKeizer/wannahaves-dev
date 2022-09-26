import styled from "styled-components"
import { device } from "../../components/device"
import React, {useState} from 'react'


const Contact = () => {

  return (
    <Container>
      <Header>
        <h2>Contact</h2>
        <h1>OUR Distribution</h1>
      </Header>
     
    </Container>
  );
}

const Container = styled.div`
width: 100vw;
background: black;
color: white;
border-top: 1px solid white;
`

const Header = styled.div`
height: 10vh;
display: flex;
justify-content: flex-start;
align-items: flex-end;

h1 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-weight: 50px;
  /* margin-left: 15rem; */

}

`
export default Contact;