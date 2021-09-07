import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const MobileImage = styled.img`
  width: 80%;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopImage = styled.img`
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
