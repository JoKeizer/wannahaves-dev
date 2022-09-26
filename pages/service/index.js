import styled from "styled-components"
import { device } from "../../components/device"
import React, {useState} from 'react'
import IntroTextService from "../../components/IntroTextService"
import SocialBrandStrategy from "../../components/SocialBrandStrategy"
import ContentCreation from "../../components/ContentCreation"
import SocialMediaManagement from "../../components/SocialMediaManagement"
import Influencermarketing from "../../components/InfluencerMarketing"
import MediaDistribution from "../../components/MediaDistribution"

import Footer from "../../components/Footer"
import ClientLogos from "../../components/ClientLogos"
import Divider from "../../components/Divider"
import DividerBlack from "../../components/DividerBlack"
import Teaser from "../../components/Teaser"
import ClientLogoService from "../../components/ClientLogosService"
import Link from 'next/link'
import Form from "../../components/Form"

import TextImage from "../../components/TextImage"

const Service = () => {

  return (
    <>
    <Teaser reverse="false"/>
    <TextImage title="OUR SERVICES" subTitle="What we do" paragraphOne="We believe that the best social strategy not only strengthens existing relationships, it also unlocks a completely new audience for your brand." paragraphTwo=" Whether you’re looking to integrate social media into your existing campaigns or want to develop a brand-new social strategy, we leverage data, experience and creativity to elevate your brand via social media. In a world where a story can disappear after 24 hours, we’re determined to make an impression that lasts forever." image="./images/test.png" reverse={false}
      buttonBack="About us"
      buttonBackLink="/about"
      buttonNext="Contact"
      buttonNextLink="/contact"
    />
    <IntroTextService divider="true" quote="IN A FAST-MOVING WORLD, WE CREATE IMPRESSIONS THAT LAST FOREVER."></IntroTextService>
    <ServiceWrapper>
    <DividerContainer>
      <Divider></Divider>

      </DividerContainer>
      <Left>
        <Title>HOW</Title>
        <p>Our strategy is clear: we share your brand story with purpose to the right people at the right place at the right time. Using data and analytics, we simultaneously measure performance and adjust accordingly, ensuring we crush your ambitious goals.</p>
        <p>There’s a lot to unpack there, but in short: we conceptualise creative campaigns, create tailor-made content for each social platform, and distribute it across the relevant channels. With our extensive knowledge and experience, we spark conversations, increase engagement and build meaningful relationships with your customers.</p>
      </Left>
      <Left className="hide">
        <Title>What</Title>
        <p>With social in our DNA, we offer five services to crush your goals: </p>
        <IconContainer>
          <IconWrapper>
            <span>Social (Brand) Strategy</span>
          <SocialBrandStrategy color= "#000"/>
          </IconWrapper>

          <IconWrapper>
          <span>Social (Brand) Strategy</span>
          <ContentCreation  color= "#000"/>
          </IconWrapper>

          <IconWrapper>
          <span>Social (Brand) Strategy</span>
          <SocialMediaManagement  color= "#000"/>
          </IconWrapper>

          <IconWrapper>
          <span>Social (Brand) Strategy</span>
          <Influencermarketing  color= "#000"/>
          </IconWrapper>

          <IconWrapper>
          <span>Social (Brand) Strategy</span>
          <MediaDistribution  color= "#000"/>
          </IconWrapper>


        </IconContainer>
      </Left>
  



    </ServiceWrapper>
    {/* <ClientLogos/> */}
    <StrategyContainer>
    <DividerContainer className="service">
      <DividerBlack></DividerBlack>

      </DividerContainer>
      <Link href="./service/strategy">
        <Card >
          <SocialBrandStrategy color = " #fff;"/>
          <h2>Social (Brand) Strategy</h2>
          <p>We design highly detailed Social Brand Strategies specifically tailored to your needs - this guarantees your online communication is the best it can be.</p>
          <ButtonContainer>
            <Button  type="submit">Read more </Button>
            </ButtonContainer>
            <ImageContainer>
            <img src="./images/1.jpeg"></img>
          </ImageContainer>
        </Card>
      </Link>
      <Link href="./service/editorial-content">
        <Card>
        <ContentCreation color = " #fff;"/>
        <h2>Content creation</h2>
        <p>We design highly detailed Social Brand Strategies specifically tailored to your needs - this guarantees your online communication is the best it can be.</p>
        <ButtonContainer>
          <Button  type="submit">Read more </Button>
          </ButtonContainer>
          <ImageContainer>
          <img src="./images/2.jpeg"></img>
        </ImageContainer>
        </Card>
    </Link>

    <Link href="./service/distribution">
    <Card>
      <MediaDistribution color = " #fff;"/>
      <h2>Media distribution</h2>
      <p>We design highly detailed Social Brand Strategies specifically tailored to your needs - this guarantees your online communication is the best it can be.</p>
      <ButtonContainer>
        <Button  type="submit">Read more </Button>
        </ButtonContainer>
        <ImageContainer>
        <img src="./images/3.jpeg"></img>
      </ImageContainer>
    </Card>
    </Link>
    <Link href="./service/management">
    <Card>
      <SocialMediaManagement color = " #fff;"/>
      <h2>Social media management</h2>
      <p>We design highly detailed Social Brand Strategies specifically tailored to your needs - this guarantees your online communication is the best it can be.</p>
      <ButtonContainer>
        <Button  type="submit">Read more </Button>
        </ButtonContainer>
        <ImageContainer>
        <img src="./images/test.png"></img>
      </ImageContainer>
    </Card>
    </Link>
    <Link href="./service/influencer">
    <Card> 
      <Influencermarketing color = " #fff;"/>
      <h2>Influencer marketing</h2>
      <p>We design highly detailed Social Brand Strategies specifically tailored to your needs - this guarantees your online communication is the best it can be.</p>
      <ButtonContainer>
        <Button  type="submit">Read more </Button>
        </ButtonContainer>
        <ImageContainer>
        <img src="./images/test.png"></img>
      </ImageContainer>
    </Card>
    </Link>
    <Link href="./service/contact">
    <Card> 
      <SocialBrandStrategy color = " #fff;"/>
      <h2>Work together?</h2>
      <p>We design highly detailed Social Brand Strategies specifically tailored to your needs - this guarantees your online communication is the best it can be.</p>
      <ButtonContainer>
        <Button  type="submit">Contact </Button>
        </ButtonContainer>
        {/* <ImageContainer>
        <img src="./images/test.png"></img>
      </ImageContainer> */}
    </Card>
    </Link>




    </StrategyContainer>
    <ClientLogoService/>
    {/* <Form/> */}

    <Footer/>
    </>
   
  );
}

const Button = styled.button`
   padding: 1rem 2rem;
   border: 1px solid white;
   background-color: transparent;
   color: white;
   font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  cursor: crosshair;

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
const Card = styled.a`
cursor: crosshair;
position: relative;
height: 50vh;
background-color: black;
width: 30%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
border: 0.2px solid white;
color:  white;
padding-left: 2rem;
z-index: 1;

@media ${device.mobileS} { 
  width: 90%;
}

@media ${device.tablet} { 
  width: 46%;
}

@media ${device.laptop} { 
  width: 28%;
}
@media ${device.laptopL} { 
  width: 30%;
}


&:hover ${ImageContainer} {
  filter: blur(0px);
  }

&:hover ${ButtonContainer} {
z-index: 10 !important;
color: white;
}

&:hover ${Button} {
background-color: white;
color: black;
}

svg {
  width: 50px;
  z-index: 2;
}

h2 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  max-width: 60%;
  z-index: 1;
}

p {
  max-width: 80%;
  font-family: "sequel100black85",sans-serif;
  letter-spacing: 1px;
}

:hover h2{
  z-index: 2;
  color: white;
}

:hover p{
  z-index: 2;
  color: white;
}

`



const StrategyContainer = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
/* border: 1px solid #ff2685; */
padding: 8rem 6rem;
background-color: black;


@media ${device.mobileS} { 
  padding: 5rem 1.6rem;
}

@media ${device.laptop} { 
  padding: 8rem 6rem;
}
`




const DividerContainer = styled.div`
position: absolute;
top: -6%;
left: 0%;
width: 100vw;
z-index: 2;

&.service {
  top: -1%;
}

@media ${device.mobileS} { 
  top: -2%;

  }

  @media ${device.desktop} { 
    top: -6%;

  }

`
const Container = styled.div`
width: 100vw;
background: black;
color: white;
border-top: 1px solid white;
display: flex;
height: 100vh;

@media ${device.mobileS} { 
  flex-direction: column;
}

@media ${device.laptop} { 
  flex-direction: row;
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
}

@media ${device.laptop} { 
  padding-left: 14rem;
  width: 50%;
}
`

const Title = styled.h2`
    color: black;
    background-color: white !important;
`



const ImageWrapper = styled.div`
width: 50%;
height: 100vh;
position: absolute;
right: 0;

@media ${device.mobileS} { 
  width: 100vw;
  height: 50vh;

}

@media ${device.laptop} { 
  width: 50%;
  height: 100vh;

}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

`

const IconContainer = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 2rem;
svg {
  width: 50px;

  @media ${device.mobileS} { 
    width: 40px;
    padding-right: 1rem;
}

  @media ${device.laptop} { 
    width: 40px;
    stroke: black;
}
}

`

const IconWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: row-reverse;
align-items: center;
padding: 0.6rem 0;

span {
  font-family: "sequel100black85",sans-serif;
  color: black;
}
`

const ServiceWrapper = styled.div`
position: relative;
background-color:  #ff2685;
display: flex;
flex-direction: row;
align-items: flex-start;


@media ${device.mobileS} { 
  flex-direction: column;
}

  @media ${device.laptop} { 
    flex-direction: row; 
  }
`

const ServiceLeft = styled.div`
display: flex;
flex-direction: column;
width: 50vw;

h2 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
}

p {
  font-family: "sequel100black85",sans-serif;

}


@media ${device.mobileS} { 
  padding-left: 1.6rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  width: 100%;
}

  @media ${device.laptop} { 
    padding-left: 6rem;
  width: 50%;
  }

`

const ServiceRight= styled.div`
display: flex;
flex-direction: column;
width: 50vw;
height: 100vh;

h2 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  color: white;
  background-color: black;
  margin: 0;
    padding: 0.3rem 0.2rem 0.2rem 0.2rem;
  
}

p {
  font-family: "sequel100black85",sans-serif;

}
@media ${device.mobileS} { 
  padding-left: 1.6rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  width: 100%;
}

  @media ${device.laptop} { 
    padding-left: 6rem;
    width: 50%;
  }

`
export default Service;