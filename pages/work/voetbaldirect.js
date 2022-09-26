import styled from "styled-components"
import { device } from "../../components/device"
import React, {useState} from 'react'
import FormService from "../../components/FormService";
import Teaser from "../../components/Teaser"
import TextImage from "../../components/TextImage"
import TextTwoColumns from "../../components/TextTwoColumns";
import IntroTextServicePink from "../../components/IntroTextServicePink"

const Voetbaldirect = () => {

  return (
    <>
    <Teaser reverse="true"/>
    <Header>
      <HeaderWrapper>
      <h2>(Social) Brand Strategy<span> | </span>Content Creation</h2>
      <h1>#BACKTOTHEGAME <span> | </span> #JOINTHETEAM</h1>
      <h1>Voetbaldirect</h1>

      </HeaderWrapper>
  
    </Header>
    <VideoContainer>
    <video autoPlay muted loop src="https://player.vimeo.com/external/612735528.hd.mp4?s=c72b87e97eb6941c98cf1de679b436388d7af1aa&profile_id=175" />

    </VideoContainer>


    <TextTwoColumns 
    titleLeft="#Backtothegame" 
    subTitleLeft="(SOCIAL) BRAND STRATEGY"
     paragraphOneLeft="The start of a new football season is always special. To kick off the new season, VoetbalDirect desired to launch a campaign video that captures the authentic and raw emotion of the beginning of a new season on the amateur pitches in the Netherlands. We created this video. Football is back! Are you game?" 
     paragraphTwoLeft=" " 
     imageLeft="https://images.prismic.io/wannahaves-site/f6449264-a392-4206-ba92-e09b41535eb8_Story-set-VD.jpg?auto=compress,format&w=960&h=540" 

     titleRight="#JOINYOURTEAM" 
     subTitleRight="(SOCIAL) BRAND STRATEGY"
      paragraphOneRight="VoetbalDirect challenged Wannahaves to produce a truly unique campaign to promote national football team jerseys, sold online during UEFA EURO 2020™. Nowadays, the country you’re from doesn’t determine the jersey that you wear. Our community wears the jersey of their favourite players regardless of what team they play for. Therefore we had to think outside of the box and include all participating nations." 
      paragraphTwoRight="And that’s what we did! We created an Instagram-first campaign in which we showed all the particular aspects of the different teams participating in EURO 2020. In less than two months we created a bespoke campaign that included 1 Hero video, 2 teasers, socials & newsletters, Instagram giveaways and paid ads as well as engaging photography content that VoetbalDirect could use in promotions on its website." 
      imageRight="https://images.prismic.io/wannahaves-site/ab2f1093-66a4-472b-9819-9d4e823ce6f9_Fotografie-VD.jpg?auto=compress,forma" 
     reverse={false}

       />

  <IntroTextServicePink reverse="false" divider="false" quote="FOOTBALL IS FOR EVERYONE.
  THIS SEASON,
  ANYTHING CAN HAPPEN.">
  </IntroTextServicePink>

  <VideoContainer>
    <video autoPlay muted loop src="https://player.vimeo.com/external/612737194.hd.mp4?s=70c60136cb3ed78ef198767d42a653fe74d3d149&profile_id=175" />
   </VideoContainer>
  <FormService divider="true"/>
    </>
  );
}

const VideoContainer = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
background-color: black;
padding: 0 0 4rem 0;

video {
  height: 100%;
}
`
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
align-items: center;
position: relative;
padding: 132px 6rem 2rem 6rem;
@media ${device.mobileS} { 
  padding: 132px 1.6rem 2rem 1.6rem;

}

@media ${device.laptop} { 
  padding: 132px 6rem 2rem 6rem;
}

`

const HeaderWrapper = styled.div`
display: flex;
flex-direction: column;

h1 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-size: 60px;
  margin: 0;

  @media ${device.mobileS} { 
    font-size: 30px;

}

@media ${device.laptop} { 
  font-size: 60px;
}

  span {
    color: #ff2685;
  }
}
h2 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-size: 30px;
  margin: 0 0 1rem 0;
  color: #00000040;

  @media ${device.mobileS} { 
    font-size: 20px;

}

@media ${device.laptop} { 
  font-size: 30px;
}

  span {
    color: #ff2685;
  }
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
export default Voetbaldirect;