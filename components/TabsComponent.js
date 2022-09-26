import {useRef, useEffect, useState} from "react";

import styled from 'styled-components';
import { motion, useAnimation} from "framer-motion";
import { device } from "./device";


import images1 from '../public/images/content.png'
import images2 from '../public/images/management.png'
import images3 from '../public/images3.jpg'
import images4 from '../public/images4.jpg'
import images5 from '../public/images5.jpg'



const tabItems = [
  {
    id: 1,
    title: 'STRATEGY',
    icon: '/EA_Sports.png',
    img: "/images/content.png",
    content: 'step 1 content',
  },
  {
    id: 2,
    title: 'STEP 2',
    icon: 'tabitem__icon fas fa-users',
    img: "/images/management.png",

    content: 'step 2 content',
  },
  {
    id: 3,
    title: 'STEP 3',
    icon: 'tabitem__icon fas fa-network-wired',
    img: "/images/content.png",

    content: 'step 3 content',
  },
  {
    id: 4,
    title: 'STEP 4',
    icon: 'tabitem__icon fas fa-money-check-alt',
    img: "/images/content.png",

    content: 'step 4 content',
  },
];

const TabsComponent = () => {
 const [active, setActive] = useState(0);
  
 const allImages = [images1, images2, images3, images4, images5]

 const [width, setWidth] = useState(0);

 const carousel = useRef();

const animateX = useAnimation();

  return (
    <div className="wrapper">
      
      <TabContainer>
        {tabItems.map(({ id, icon, img, title }) =><TabItemComponent
           key={title}
           icon={icon}
           img={img}
           title={title}
           onItemClicked={() => setActive(id)}
           isActive={active === id}
         />
      )}
      </TabContainer>
      <div className="content">
        {tabItems.map(({ id, img, title }) => {
          return active === id ?              <Carousel ref={carousel} whileTap={{cursor: "grabbing"}}>

<InnerCarousel 
     animate={animateX}
     drag="x" 
     dragConstraints={{right: 0, left: -width }}>
       {allImages.map(image => {
         return(
           <Card>
            <Item>
             <img src={img} key={img} width="600px" height={"100%"}></img>
           </Item>
           <Content>
             <h1>
             {title}
             </h1>
             <p>Our strategic thinking is based not only on audience and category, but cultural conversation. Our research and strategy teams work in close collaboration. They are fluent in the language of the internet, anticipating and preparing our clients for significant cultural shifts.</p>
           </Content>
           </Card>
       
         )
       })}
     </InnerCarousel>

          </Carousel>

          : ''
        })}
      </div>
     </div>
  )
}


const TabItemComponent = ({
  icon = '',
  title = '',
  img = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {

  const allImages = [images1, images2, images3, images4, images5]

  const [width, setWidth] = useState(0);

  const carousel = useRef();

const animateX = useAnimation();

useEffect(() => {
  // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
}, [])

  return (

    <>
    <TabContainer>
    <div className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'} onClick={onItemClicked}>
      {/* <i className={icon}></i> */}
      {/* {icon} */}
      {/* <img src="/EA_Sports.png" height="100" width="250" alt="" /> */}

      {/* <img src={img} key={icon} height="100%" width="250"></img> */}
      <p className="tabitem__title">{title}</p>
    </div>
    </TabContainer>

   

</>
  
    
  )
};

const Carousel = styled(motion.div)`
/* background-color: pink; */
/* height: 100vh; */
cursor: grab;
overflow: hidden;
padding: 4rem 0;

`

const InnerCarousel = styled(motion.div)`
display: flex;
/* background-color: blue; */

`

const Card = styled.div`
display: flex;
/* background: yellow; */
/* padding: 40px; */

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
  width: 40rem;
  height: 40rem;
  border: 2px solid white;

  @media ${device.mobileS} { 
    width: 20rem;
  height: 20rem;

  }

  @media ${device.laptop} { 
    width: 40rem;
  height: 40rem;

  }

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`

const TabContainer = styled.div`
display: flex;
text-transform: uppercase;
font-family: "sequel100black85",sans-serif;
`

// const mainNode = document.getElementById("app");
// ReactDOM.render(<TabsComponent />, mainNode);
export default TabsComponent;