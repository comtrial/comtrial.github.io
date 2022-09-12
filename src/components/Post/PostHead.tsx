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
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  // height: 500px;
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
    // height: 200px;
    // margin-top: 12px;
  }
`
const PostHeadImg = styled.div`
  width: 100%;  
  padding: 20px 0;
  object-fit: cover;
  // box-sizing: border-box;
  overflow: hidden;
`


const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} />
))`
  z-index: -1;
  border-radius: 5px;
  background-size: contain;
  object-fit: contain;

  @media (max-width: 768px) {

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
      <PostHeadImg>
        <BackgroundImage image={thumbnail} alt="thumbnail" />
      </PostHeadImg>
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead