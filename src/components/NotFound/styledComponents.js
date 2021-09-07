import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NotFoundImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`
export const Heading = styled.h1`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const Description = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
