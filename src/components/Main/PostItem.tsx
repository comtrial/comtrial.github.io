import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }


const PostItemWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
`
const ThumbnailImage = styled(GatsbyImage)`
  z-index: -1;
  object-fit: cover;
  // filter: brightness(0.25);
  width: 100%;
  border-radius: 0 5px 5px 0;
  opacity: 0.6
`

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`
const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  font-weight: 700;
`

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  opacity: 0.7;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  opacity: 0.7;
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: 10px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 13px;
  font-weight: 400;
  opacity: 0.7;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <PostItemWrapper to={link}>


      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(item => (
            <CategoryItem key={item}>#{item}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>

      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
    </PostItemWrapper>
  )
}

export default PostItem