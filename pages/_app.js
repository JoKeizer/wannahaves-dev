import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { storyblokInit, apiPlugin } from '@storyblok/react';
import styled from 'styled-components';
import { device } from "../components/device"

import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Loader from "../components/Loader";
import Video from "../components/VideoSection";

import FeaturedArticles from "../components/FeaturedArticles";
import Hero from "../components/Hero";
import IntroText from '../components/IntroText'
import ClientLogos from "../components/ClientLogos";
import Strategy from "../components/Strategy";

// import { setCookie, getCookies} from 'cookies-next';


const components = {
  teaser: Teaser,
  page: Page,
  video: Video,
  "featured-articles": FeaturedArticles,
  IntroText: IntroText,
  hero: Hero,
  ClientLogos: ClientLogos,
  Strategy: Strategy,

};


storyblokInit({
  accessToken: 'DBf1Cw30uPROju7R19dIbQtt',
  use: [apiPlugin],
  components,

});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    loading 
  }, [loading]);



  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader' >
            <Loader  setLoading={setLoading} />
          </motion.div>
        ) : (
          <Container>
            {!loading && ( <Component {...pageProps}  />
            )}
          </Container>
          
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

const Container = styled.div`
  margin: -8px;
  width: 100vw;
  overflow: hidden;
`

const TransitionFinal = styled(motion.div)`
    display: block;
    position: relative;
    width: 90%;
    margin: 0 auto;
    z-index: -100;
    top: -56px;

    @media ${device.mobileS} { 
      top: -128px;


  }
    img {
      width: 100%;
      max-width: 100%;
    }
`




export default MyApp
