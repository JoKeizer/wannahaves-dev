import styled from "styled-components"
import { device } from "../../components/device"
import React, {useState} from 'react'
import TextImage from "../../components/TextImage"

const EditorialContent = () => {

  return (
    <>
    <TextImage title="Content creation" subTitle="What we do" paragraphOne="We believe that the best social strategy not only strengthens existing relationships, it also unlocks a completely new audience for your brand." paragraphTwo=" Whether you’re looking to integrate social media into your existing campaigns or want to develop a brand-new social strategy, we leverage data, experience and creativity to elevate your brand via social media. In a world where a story can disappear after 24 hours, we’re determined to make an impression that lasts forever." image=".././images/3.jpeg" reverse={false}
      buttonBack="Brand Management"
      buttonBackLink="./strategy"
      buttonNext="Distribution"
      buttonNextLink="./distribution"
    />

    </>
  );
}

const Container = styled.div`
width: 100vw;
background: black;
color: white;
border-top: 1px solid white;
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
export default EditorialContent;