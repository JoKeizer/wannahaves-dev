import styled from 'styled-components';
import Link from 'next/link'

import SocialBrandStrategy from "./SocialBrandStrategy"
import ContentCreation from "./ContentCreation"
import SocialMediaManagement from "./SocialMediaManagement"
import Influencermarketing from "./InfluencerMarketing"
import MediaDistribution from "./MediaDistribution"

const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>

      <Left>

        <Wrapper>
          <IconWrapper>
          <SocialBrandStrategy/>

          </IconWrapper>
          <TextWrapper>
          <Link href="/social">(Social) media management</Link>

          </TextWrapper>
        </Wrapper>

      <Wrapper>
        <IconWrapper>
          <ContentCreation/>
        </IconWrapper>
        <TextWrapper>
          <Link href="/content"> Content creation</Link>
        </TextWrapper>
      </Wrapper>

      <Wrapper>
        <IconWrapper>
          <SocialMediaManagement/>
        </IconWrapper>
        <TextWrapper>
          <Link href="/content">Social media management</Link>
        </TextWrapper>
      </Wrapper>

      <Wrapper>
        <IconWrapper>
        <Influencermarketing/>
        </IconWrapper>
        <TextWrapper>
          <Link href="/content">Influencer marketing</Link>
        </TextWrapper>
      </Wrapper>

      <Wrapper>
        <IconWrapper>
        <MediaDistribution/>
        </IconWrapper>
        <TextWrapper>
          <Link href="/content">Media distribution</Link>
        </TextWrapper>
      </Wrapper>
      </Left>

      <Right>
        <h2>
        Wannahaves

        </h2>
   
      <Link href="/about">
      About us
    </Link>

    <Link href="/team">
      Team
      </Link>
    <Link href="/work">
    Work

      </Link>
      <ButtonContainer>
          <Button href="/" class="m05__button button">  Work together?    

</Button>
          </ButtonContainer>
      </Right>

  </StyledMenu>
  );
}

const ImageWrapper = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
left: 0;
top: 0;

img {
  width: 100%;
  height: 100%;
  opacity: 0.2;

  object-fit: cover;
}
`
const Image = styled.img`
width: 100%;
height: 100%;

`


const Wrapper = styled.div`
display: flex;
flex-direction: row;
`
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: black;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: 100vw;
  text-align: left;
  display: none;

  transition: transform 0.3s ease-in-out;
  z-index: -1;



  @media (max-width: 576px) {
      width: 100%;
    }


`
const Left = styled.div`
  width: 50vw;
  background-color: #ff2685;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 12rem;

  a {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: white;
    font-family: "sequel100black85",sans-serif;
    text-transform: uppercase;
    padding: 1rem 0;
    max-width: 70%;
    max-width: 400px;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }

`

const Right = styled.div`
  width: 50vw;
  background-color: #ff2685;
  font-family: "sequel100black85",sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
    flex-direction: column;

   
      a {
        padding-bottom: 1rem;
        font-family: "sequel100black85",sans-serif;
        text-decoration: none;
        font-size: 1rem;
      }

    
  h2 {
    letter-spacing: -2px;
  }

  

  a {
    color: white;
    font-family: "sequel100black85",sans-serif;

  }
`

const TextWrapper = styled.div`
width: 70%;
`

const IconWrapper = styled.div`
    padding-bottom: 2rem;
svg {
  width: 60px !important;
  padding-right: 2rem;
}
`

const Button = styled.a`
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
export default Menu;