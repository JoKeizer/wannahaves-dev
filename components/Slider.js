import Swiper from 'swiper';
import styled from 'styled-components';
import {useRef, useEffect, useState} from "react";
import { motion, useAnimation} from "framer-motion";
import { device } from "./device";
import useWindowSize from './UseWindowSize';
const Slider = ({blok}) => {

  const windowSize = useWindowSize();
  const [width, setWidth] = useState(0);
  const [activeTab, setActiveTab] = useState([])
  const carousel = useRef();
  const tab = useRef();

  const animateX = useAnimation();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  const addActive = id => {
    setActiveTab([
        id
    ])

    if(id == 1) {
      animateX.start({
        x: 0,
        transition: {
          ease: "linear", duration: 1, 
        }
      });    
    }

    if(id == 2) {
      animateX.start({
        x: windowSize.width < 1024 ? -370 : -1000,
        transition: {
          ease: "linear", duration: 1, 
        }
      });    
    }

    if(id == 3) {
      animateX.start({
        x: windowSize.width < 1024 ? -740 : -2000,
        transition: {
          ease: "linear", duration: 1, 
        }
      });    
    }

    if(id == 4) {
      animateX.start({
        x: -3000,
        x: windowSize.width < 1024 ? -1110 : -3000,

        transition: {
          ease: "linear", duration: 1, 
        }
      });    
    }

    if(id == 5) {
      animateX.start({
        x: windowSize.width < 1024 ? -1480 : -4000,
        transition: {
          ease: "linear", duration: 1, 
        }
      });    
    }
}

const isActiveTab = id => {
  return activeTab.indexOf(id) !== -1
}

  return (
   <>
    <Container>
      <Header>
        <h1>{blok.Title}</h1>
        <Button href="/service" class="m05__button button">  All Services</Button>
      </Header>
      <Line></Line>
      <TabContainer ref={tab}>
        <Tab  className={isActiveTab(1) && 'active'} onClick={() => addActive(1)} >Strategy</Tab>
        <Tab className={isActiveTab(2) && 'active'} onClick={() => addActive(2)}>CONTENT</Tab>
        <Tab className={isActiveTab(3) && 'active'} onClick={() => addActive(3)}>DISTRIBUTION</Tab>
        <Tab className={isActiveTab(4) && 'active'} onClick={() => addActive(4)}>MANAGEMENT</Tab>
        <Tab  className={isActiveTab(5) && 'active'} onClick={() => addActive(5)}>INFLUENCER</Tab>
      </TabContainer>
      <Carousel ref={carousel} whileTap={{cursor: "grabbing"}}>
        <InnerCarousel 
        animate={animateX}
        drag="x" 
        dragConstraints={{right: 0, left: -width }}>
          {blok.block.map(item => {
            return(
              <Card>
                <Item>
                  <ImageWrapper>
                  <img src={item.Image.filename}></img>
                  </ImageWrapper>
                {/* <IconWrapper>
                <SocialBrandStrategy/>
                </IconWrapper> */}
                </Item>
                <Content>
                  <h1>
                  {item.Title}
                  </h1>
                  <p>{item.Content}</p>
                  <ButtonContainer>
                    <Button href="/" class="m05__button button">  Find out more </Button>
                  </ButtonContainer>
                </Content>

              </Card>
            )
          })}
        </InnerCarousel>
      </Carousel>
    </Container>
   </>
  );
}

const Container = styled.div`
`
const Header = styled.div`
  height: 22vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

h1 {
  text-transform: uppercase;
  font-family: "sequel100black85",sans-serif;
  font-size: 50px;
  margin: 0 0 0 15rem;
  padding-right: 4rem;

  @media ${device.mobileS} { 
    margin: 0 0 0 1.6rem;
  }
  @media ${device.laptop} { 
    margin: 0 0 0 6rem;
  }
}
`
const Carousel = styled(motion.div)`
cursor: grab;
overflow: hidden;
width: 100vw;
`
const InnerCarousel = styled(motion.div)`
display: flex;
`

const Card = styled.div`
display: flex;
:nth-child(1) {
  margin-left: 6rem;
}

@media ${device.mobileS} { 
  flex-direction: column;
  :nth-child(1) {
  margin-left: 1.6rem;
  } 
  padding-right: 40px;
  }

  @media ${device.laptop} { 
  flex-direction: row;
  :nth-child(1) {
  margin-left: 6rem;
  }
  padding-right: 0;
  }
`
const Content = styled.div`
width: 20rem;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
padding-left: 2rem;

@media ${device.mobileS} { 
  padding-left: 0;
  }
  @media ${device.laptop} { 
    padding-left: 2rem;
  }
h1 {
  text-transform: uppercase;
  font-family: "sequel100black85",sans-serif;
}

p {
  max-width: 90%;
  font-family: "Roboto",sans-serif;
  line-height: 1.5;
}
`
const Item = styled(motion.div)`
  width: 0rem;
  height: 40rem;
  border: 4px solid white;
  position: relative;
  @media ${device.mobileS} { 
    width: 20rem;
    height: 20rem;
  }

  @media ${device.laptop} { 
  height: 40rem;
  width: 40rem;
  }


`

const ImageWrapper = styled.div`

  @media ${device.mobileS} { 
    width: 20rem;
    height: 20rem;
  }

  @media ${device.laptop} { 
  height: 40rem;
  width: 40rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const IconWrapper = styled.div`
position: absolute;
right: 20px;
top: 10px;

svg {
  width: 80px;

}

`

const TabContainer = styled.div`
display: flex;
flex-direction: row;
padding: 2rem 0 4rem 0;
@media ${device.mobileS} { 
  padding: 2rem 0 4rem 1.6rem;
  flex-direction: column;
  }

  @media ${device.laptop} { 
    padding: 2rem 0 6rem 6rem;
    flex-direction: row;
  }
`
const Tab = styled.div`
  text-transform: uppercase;
  font-family: "sequel100black85",sans-serif;
  padding: 0 2rem 0 0;
  font-size: 1.2rem;
  color: white;

  &.active {
    color: #8b0f45;
  }
  :hover {
    color: #8b0f45;
  }

  @media ${device.mobileS} { 
    padding: 0 2rem 0.2rem 0;
    flex-direction: column;
  }

  @media ${device.laptop} { 
    padding: 0 2rem 0 0;
    flex-direction: row;
  }
`
const Line = styled.div`
  width: 100vw;
  border-bottom: 2px solid white;
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

export default Slider;