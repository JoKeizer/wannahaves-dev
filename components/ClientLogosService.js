import styled from "styled-components"

import { device } from "./device";

const ClientLogosService = ({}) => {
	const resizedImage = function(imageUrl) {
    if (typeof imageUrl !== 'undefined') {
      return imageUrl.filename.replace('//a.storyblok.com', '//img2.storyblok.com/')
    }
    return null
  }

  return (
    <Container>
    <Header>
        <h1>WE Work with</h1>
      </Header>

<Slider>
	<SlideTrack>

		
		<Slide>
			<img src="/EA_Sports.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/jut.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/voetbal-direct.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/puma.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/hela.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/activision.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/H-M.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/ISKO.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/call-of-duty.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/oger.png" height="100" width="250" alt="" />
		</Slide>
    <Slide>
			<img src="/EA_Sports.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/jut.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/voetbal-direct.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/puma.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/hela.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/activision.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/H-M.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/ISKO.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/call-of-duty.png" height="100" width="250" alt="" />
		</Slide>
		<Slide>
			<img src="/oger.png" height="100" width="250" alt="" />
		</Slide> 
		

	</SlideTrack>
</Slider>
    </Container>
  );
}


const Container = styled.div`
width: 100vw;
height: 30vh;
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: black;
padding-bottom: 4rem;


`

const Header = styled.div`
h1 {
  font-family: "sequel100black85",sans-serif;
  text-transform: uppercase;
  font-weight: 50px;
  margin-left: 6rem;
	color: white;

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
	



export default ClientLogosService;