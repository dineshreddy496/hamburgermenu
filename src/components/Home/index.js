import Header from '../Header/index'

import {
  HomeContainer,
  ImageContainer,
  MobileImage,
  DesktopImage,
} from './styledComponents'

const Home = () => (
  <HomeContainer>
    <Header />
    <ImageContainer>
      <MobileImage
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <DesktopImage
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </ImageContainer>
  </HomeContainer>
)

export default Home
