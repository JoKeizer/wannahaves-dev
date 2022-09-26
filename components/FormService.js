import styled from "styled-components"
import React, {useState} from 'react'
import { device } from "./device";

import DividerBlack from "./DividerBlack"
import Divider from "./Divider"
import Footer from "./Footer"

const Form = ({divider}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('')
  
  const handleChange = (event) => {
    setName(event.target.value);
  }

  const latNameHandleChange = (event) => {
    setLastName(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Thank you!')
  }

  
  return (
    <>

<Container>
         <DividerContainer>
          
      <Divider></Divider>

      </DividerContainer>
      <Header>
        <h1>WE'D LOVE TO HEAR FROM YOU.</h1>
        </Header>
        <Wrapper>

        <form action="/api/form" method="post">
        <FormContainer>
          <Label for="first">First name
          <input type="text" id="first" name="first" />
          </Label>
          <Label for="last">Last name
          <input type="text" id="last" name="last" />
          </Label>
        </FormContainer>
        <FormContainer>
          <Label for="email">Email
          <input type="text" id="email" name="email" />
          </Label>
          <Label for="job">Job Title
          <input type="text" id="job" name="job" />
          </Label>
        </FormContainer>
        <FormContainer>
          <Label for="company">Comapany
          <input type="text" id="company" name="company" />
          </Label>
          <Label for="phone">Phone number
          <input type="text" id="phone" name="phone" />
          </Label>
        </FormContainer>

        <FormContainerFull>
          <Label for="content">Your message
          <textarea rows="4" cols="100" id="content"  name="content" form="usrform"></textarea>
          </Label>
      
        </FormContainerFull>

  <ButtonContainer>
          <Button  type="submit">Submit 

</Button>
          </ButtonContainer>


</form>


          
        
        </Wrapper>

      
       <div className="message">
         {message}
      </div>
    </Container>
    
  <Footer/>
    </>
    
  );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #ff2685;
color: white;
position: relative;

@media ${device.mobileS} { 
    padding-bottom: 6rem;

  }

  @media ${device.laptop} { 
    padding-bottom: 0;

  }

`

const Header = styled.div`
height: 22vh;
display: flex;
  justify-content: flex-start;
  align-items: flex-end;

h1 {
  text-transform: uppercase;
  font-family: "sequel100black85",sans-serif;
  font-size: 50px;
  margin: 0 0 0 6rem;

  @media ${device.mobileS} { 
    margin: 0 0 0 1.6rem;

  }

  @media ${device.laptop} { 
    margin: 0 0 0 6rem;

  }

}

`
const Label = styled.label`
display: flex;
flex-direction: column;
width: 50%;
padding-bottom: 1rem;
padding-right: 0rem;
font-size: 0.8rem;
font-family: "sequel100black85",sans-serif;

@media ${device.mobileS} { 
  width: 100%;
  padding-right: 0;

  }

  @media ${device.laptop} { 
    width: 50%;
    padding-right: 1rem;

  }

input {
  height: 40px;
  margin-top: 0.8rem;
}

`

const Wrapper = styled.div`

@media ${device.mobileS} { 
  padding: 4rem 0 0 1.6rem;
  }

  @media ${device.laptop} { 
    padding: 4rem 0 0 6rem;
  }

`

const FormContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 70%;
align-items: center;

@media ${device.mobileS} { 
  flex-direction: column;
  width: 90%;
  }
  @media ${device.tablet} { 
    flex-direction: column;
    width: 90%;
  }
  @media ${device.laptop} { 
    flex-direction: row;
    width: 70%;
  }
`

const FormContainerFull = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 100%;
align-items: center;

label {
  width: 69%;

  @media ${device.mobileS} { 
  width: 90%;
  }

  @media ${device.laptop} { 
    width: 69%;

  }
}

`

const DividerContainer = styled.div`
position: absolute;
top: -6%;
left: 0%;
width: 100vw;
z-index: 2;

@media ${device.mobileS} { 
  top: -2%;

  }

  @media ${device.desktop} { 
    top: -6%;

  }

`

const Button = styled.button`
   padding: 1rem 2rem;
   border: 1px solid white;
   background-color: transparent;
   color: white;
   font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;

`

const ButtonContainer = styled.div`
padding-top: 2rem;
`
export default Form;