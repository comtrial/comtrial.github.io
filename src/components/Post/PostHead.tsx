import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo'

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}


const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  // margin-top: 80px;
  box-sizing: border-box;

  overflow: hidden;

  @media (max-width: 1200px) {
    // grid-column-start: 8;
    // grid-column-end: 18;
    // max-width: 800px;
    // min-width: 650px;
    // margin: 0 auto;
  }

  @media (max-width: 768px) {
    height: 20vh;
    margin-top: 12px;
  }
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height:  22vh;
  
  object-fit: cover;
  // filter: brightness(0.75);

  @media (max-width: 768px) {
    height: 100%;
  }
`

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  categories,
  thumbnail,
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead