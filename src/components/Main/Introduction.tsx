import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'
// import { Link } from 'gatsby'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  grid-column-end: span 2;
  margin: 80px 0 80px 60px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 15px 15px 15px 15px;
}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin: 0 40px;

  @media (max-width: 768px) {
    width: 100%;
    // padding: 0 20px;
  }
`

const Mail = styled.div`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Link = styled.div`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 13px;
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
          <Title>I'm Junior Frontend Developer Hyun.</Title>
        </div>

        <br></br>
        <Mail>comtrial97@gmail.com</Mail>

        <br></br>
        <Link>Github -></Link>
      </Wrapper>
    </Background>
  )
}

export default Introduction