import ArticleTeaser from './ArticleTeaser';
import styled from 'styled-components';
import { device } from './device';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import IntroText from './IntroText';

const FeaturedArticles = ({blok}) => {
  const Yvariants = {
    visible:{opacity: 1, scale: 1, x: 0, transition: {duration: 1 }},
    hidden: {opacity: 0, scale: 0, x: 200}
  }

  const {ref, inView} = useInView({
    treshold: 0.2
  });
  const control = useAnimation();

  useEffect(() => {
    console.log("useeffect inView= ", inView)

    if(inView) {
      control.start("visible")
    }
    if(!inView) {
      control.start({
        y: -60,
      })
    }
  },[control, inView]);


  const casesLeft = [blok.articles[0],blok.articles[3], blok.articles[6]]
  const casesCenter = [blok.articles[1],blok.articles[4], blok.articles[7]]
  const casesRight = [blok.articles[2],blok.articles[5], blok.articles[8]]


  const animTest = {
    offscreen: {
      y: 60
    },
    onscreen: {
      y: 60,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const bottomAnim = {
    hidden: { opacity: 0, y: -200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 2
      },
    },
    exit: {
      opacity: 0,
      y: 200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  }

  const upAnim = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: -60,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 2
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  }

  const videoAnim = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 3
      },
    }
  }

  return (
 
<>
<Container ref={ref}>
  <ImageContainer variants={videoAnim}
   initial="hidden"
   animate="show"
   exit="exit"
  >
  <img
          src="/lines.gif"
          alt=""
          style={{
            height: '100%',
            objectFit: 'cover'
        }}
        
      />
  </ImageContainer>
  
      <Header>
        <motion.h2 >{blok.title}</motion.h2>
      </Header>
        <LeftColumn    variants={bottomAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        >
        {casesLeft.map((article, index) => (
            <List key={article.content}>
                <a scr={blok.slug}>
                  <ArticleTeaser index={index} blok={article.content} />
                </a>
     
            </List>
          )
        )}
        </LeftColumn>
        <CenterColumn 
     variants={upAnim}
     initial="hidden"
     animate="show"
     exit="exit"

         >
        {casesCenter.map((article, index) => (
            <List key={article.content}>
               <motion.div 
               
               >
            <a scr={blok.slug}>
              <ArticleTeaser index={index} blok={article.content} />
            </a>
            </motion.div>

            </List>
          )
        )}
        </CenterColumn>
        <RightColumn
        variants={bottomAnim}
        initial="hidden"
        animate="show"
        exit="exit">
        {casesRight.map((article, index) => (
            <List key={article.content}>
            <a scr={blok.slug}>
              <ArticleTeaser index={index} blok={article.content} />
            </a>
            </List>
          )
        )}
        </RightColumn>
      
      </Container>

      <IntroText/>
</>
  )
}


const Container = styled.div`
padding: 10rem 0 2rem 0;
position: relative;

`
const ImageContainer = styled(motion.div)`
position: absolute;
top: -10px;
right: 0;

img {
  opacity: 0.8;
}

`

const List = styled.li`
  list-style: none;
  margin-bottom: 2vw;
  display: block;
  position: relative !important;
  user-select: none;
  width: 100%;
`

const LeftColumn = styled(motion.div)`
  float: left; 
  width: 48%; 
  @media ${device.mobileL} { 
  width: 32%; 
  }
`

const CenterColumn = styled(motion.div)`
display: inline-block;
width: 48%; 
margin-left: 2vw;
/* transform: translateY(-50px) !important; */
@media ${device.mobileL} { 
  width: 32%; 
  }

`

const RightColumn = styled(motion.div)`
  float: right; 
  width: 32%; 
  display: none;
  @media ${device.mobileL} { 
    display: block;
  }
`

const Header = styled.div`
  padding: 0 0 0 6rem;

  h2 {
    color: white;
    text-transform: uppercase;
    font-family: "sequel100black85",sans-serif;
  }
`



export default FeaturedArticles
