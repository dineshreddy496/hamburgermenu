import Header from '../Header/index'

import {
  NotFoundContainer,
  NotFoundImageContainer,
  Image,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <Header />
    <NotFoundImageContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <Heading>Lost Your Way?</Heading>
      <Description>
        Sorry, we can’t find that page. You’ll find lots to explore on the home
        page
      </Description>
    </NotFoundImageContainer>
  </NotFoundContainer>
)

export default NotFound
