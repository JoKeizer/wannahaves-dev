import styled from 'styled-components';
import HoverVideoPlayer from 'react-hover-video-player';

const ArticleTeaser = ({blok, index}) => {

  index ++;

  const resizedImage = function(imageUrl) {
    if (typeof imageUrl !== 'undefined') {
      return imageUrl.filename.replace('//a.storyblok.com', '//img2.storyblok.com/2800x1800')
    }
    return null
  }

  return (
    <Container>
            <Content>
        <Title>{blok.title}</Title>
      </Content>
    <HoverVideoPlayer
      videoSrc={blok.url}
      pausedOverlay={
        <img
          src={resizedImage(blok.hero_image)}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }}
        
      />
      
      
      }
      />


    </Container>


  )
}

const Container = styled.div`
position: relative;

`

const Content = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: 9;



`

const Title = styled.h2`
  color: white;
  font-size: 1rem;
  line-height: 2.25rem;
  font-family: "sequel100black85",sans-serif;
  z-index: 9;
  background-color: #000000;
  padding: 0.2rem 1rem;
  letter-spacing: 1px;
`

export default ArticleTeaser
