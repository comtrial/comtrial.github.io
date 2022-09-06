import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'
// import { Link } from 'gatsby'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  grid-column-end: span 6;
  padding: 80px 0 0 80px;
  width: 100%;
  // height: 100%;

  display: block;
  font-size: 14px;
  
  @media (max-width: 1200px) {
    grid-column-start: 8;
    grid-column-end: 18;
    padding: 80px 80px;
    max-width: 800px;
    min-width: 650px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
    padding: 14px 14px 14px 14px;
}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // align-items: center;
  // margin: 0 40px;

  @media (max-width: 768px) {
    width: 100%;

  }
`


const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const Info = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <Title>Seungwon.Choi</Title>
        {/* <ProfileImage profileImage={profileImage} /> */}
        <br></br>

        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Susan.</Title>
        </div>

        <br></br>
        <Info>
          <p>comtrial97@gmail.com</p>
          <br></br>
          <a href="https://github.com/comtrial" target="_blank" rel="noreferrer"><u>Github →</u></a>
        </Info>

      </Wrapper>
    </Background>
  )
}

export default Introduction