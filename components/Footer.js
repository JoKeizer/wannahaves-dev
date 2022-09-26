import styled from "styled-components"
import { device } from "./device";
import React, {useState} from 'react'


const Footer = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const latNameHandleChange = (event) => {
    setLastName(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Thank you!')
    console.log(name);
  }

  return (
    <Container>
      <InnerContainer>

     <Header>
        {/* <h1>Footer</h1> */}
      </Header> 
      <Wrapper>
        <LeftColumn>
          <Left>
            <ul>
              <a><li>About us</li></a>
              <a><li>Services</li></a>
              <a><li>Partners</li></a>
              <a><li>Work</li></a>
              <a><li>Team</li></a>
              <a><li>Careers</li></a>
              <a><li>Press</li></a>
              <a><li>Contact</li></a>
            </ul>


          </Left>
          <Right>
          <ul>
              <a><li>Rigakade 20</li></a>
              <a><li>1013 BC Amsterdam</li></a>
            
            </ul>


          </Right>
        </LeftColumn>
        <RightColumn>
          <h1>Stay up to date</h1>
          <p>Subscribe to our blog for hot takes on social and internet culture. You can unsubscribe at any time.
</p>

<form onSubmit={handleSubmit}>
        <FormContainer>
          <Label>
        First Name *
        <input type="text" required value={name} onChange={handleChange} />
      </Label>
      <Label>
        Last Name *
        <input type="text" required value={lastName} onChange={latNameHandleChange} />
      </Label>
          </FormContainer>
          <FormContainer>
          <Label>
        Email *
        <input type="text" required value={name} onChange={handleChange} />
      </Label>
      <Label>
        Company *
        <input type="text" required value={lastName} onChange={latNameHandleChange} />
      </Label>
          </FormContainer>
          <ButtonContainer>
          <Button href="/" class="m05__button button">  Sign up    

</Button>
          </ButtonContainer>


    </form>
        </RightColumn>
      </Wrapper>   
      </InnerContainer>

    </Container>
  );
}

const Wrapper = styled.div`
display: flex;
flex-direction: row;


@media ${device.mobileS} { 
  flex-direction: column;
  }
  @media ${device.tablet} { 
    flex-direction: column;
  }
  @media ${device.laptop} { 
    flex-direction: row;
  }

`

const Left = styled.div`
display: flex;
flex-direction: row;
width: 25%;


ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "sequel100black85",sans-serif;
  line-height: 2;

}

@media ${device.mobileS} { 
  width: 40%;
  }

  @media ${device.laptop} { 
    width: 25%;
  }
`
const Right = styled.div`
display: flex;
flex-direction: row;
width: 25%;

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "sequel100black85",sans-serif;
  line-height: 2;
}

@media ${device.mobileS} { 
  width: 50%;
  }

  @media ${device.laptop} { 
    width: 25%;
  }
`

const LeftColumn = styled.div`
display: flex;
width: 50%;
@media ${device.mobileS} { 
  width: 100%;

  }

  @media ${device.laptop} { 
    width: 50%;

  }
`

const RightColumn = styled.div`
display: flex;
width: 50%;
/* background: green; */
justify-content: flex-start;
flex-direction: column;

h1 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-weight: 50px;
  @media ${device.mobileS} { 
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  }

  @media ${device.laptop} { 
    margin-top: 0rem;
    margin-bottom: 0.5rem;

  }
}

p {
  font-family: "sequel100black85",sans-serif;
  max-width: 80%;

}

@media ${device.mobileS} { 
  width: 90%;
  }

  @media ${device.laptop} { 
    width: 50%;
  }

`
const Container = styled.div`
width: 100vw;
background: black;
color: white;
border-top: 1px solid white;
`

const InnerContainer = styled.div`
@media ${device.mobileS} { 
    padding: 0 0 2rem 1.6rem;

  }

  @media ${device.laptop} { 
    padding: 0 0 4rem 6rem;

  }
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


const FormContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start1rem 01rem 0;
width: 70%;
align-items: center;


@media ${device.mobileS} { 
  flex-direction: column;
  width: 100%;
  }

  @media ${device.tablet} { 
    flex-direction: column;
    width: 100%;
  }
  @media ${device.laptop} { 
    flex-direction: row;
    width: 70%;

  }
`

const Label = styled.label`
display: flex;
flex-direction: column;
width: 50%;
padding: 1rem 2rem 1rem 0;
padding-bottom: 1rem;
font-size: 0.8rem;
font-family: "sequel100black85",sans-serif;


input {
  height: 40px;
  margin-top: 0.8rem;
}

@media ${device.mobileS} { 
  width: 100%;
  }

  @media ${device.laptop} { 
    width: 50%;
  }

`

const Button = styled.a`
margin-top: 2rem;
   padding: 1rem 2rem;
   border: 1px solid white;
   color: white;
   font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
     text-decoration: none;
     margin-top: 2rem;

`

const ButtonContainer = styled.div`
padding-top: 2rem;
`

export default Footer;