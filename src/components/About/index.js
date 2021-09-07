import Header from '../Header/index'

import {
  AboutContainer,
  ImageContainer,
  MobileImage,
  DesktopImage,
} from './styledComponents'

const About = () => (
  <AboutContainer>
    <Header />
    <ImageContainer>
      <MobileImage
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
      <DesktopImage
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </ImageContainer>
  </AboutContainer>
)

export default About
