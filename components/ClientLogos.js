import styled from "styled-components"

import { device } from "./device";

const ClientLogos = ({blok}) => {
  const resizedImage = function(imageUrl) {
    if (typeof imageUrl !== 'undefined') {
      return imageUrl.filename.replace('//a.storyblok.com', '//img2.storyblok.com/')
    }
    return null
  }

  return (
    <>
    <Container>
      <Header>
        <h1>{blok.title}</h1>
      </Header>
      <Slider>
        <SlideTrack>
            {blok.logos.map(logo => {
              return(
                <Slide>
                    <img src={logo.IconImage.filename} height="100" width="250" alt={logo._uid}/>
                </Slide>
              )
            })}
        </SlideTrack>
      </Slider>
    </Container>

    </>
    
  );
}


const Container = styled.div`
width: 100vw;
height: 30vh;
display: flex;
flex-direction: column;
align-items: flex-start;


`

const Header = styled.div`
h1 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-weight: 50px;
  margin-left: 6rem;

  @media ${device.mobileS} { 
    margin-left: 1.6rem;

  }

  @media ${device.laptop} { 
    margin-left: 6rem;

  }
}

`

const Slider = styled.div`

height: 100px;
  margin: auto;
  overflow:hidden;
  position: relative;
  width: auto;
  
`

const SlideTrack = styled.div`
  animation: scroll 150s linear infinite;
  display: flex;
  width: calc(250px * 20);

  @keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7))}
}

  `
const Slide = styled.div`
    height: 100px;
    width: 250px;
`
  



export default ClientLogos;
