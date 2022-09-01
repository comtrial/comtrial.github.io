import React, { FunctionComponent, useMemo } from 'react'
import { graphql } from 'gatsby'
import { PostPageItemType } from 'types/PostItem.types' // 바로 아래에서 정의할 것입니다
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction'

import CategoryList from 'components/Main/CategoryList'
import queryString, { ParsedQuery } from 'query-string'

const Post = styled.div`
  grid-column-start: 9;
  grid-column-end: 17;

  min-width: 650px;
  max-width: 800px;
  width: 100%;

  overflow: scroll;




  @media (max-width: 1200px) {
    // max-width: 800px;
    // min-width: 100%;
    margin: 0 auto;
    padding: 0 80px;
  }
  

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 0;
  }
`


type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0];



  const parsed: ParsedQuery<string> = queryString.parse(href)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <Introduction profileImage={gatsbyImageData} />

      <Post>
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        <PostHead
          title={title}
          date={date}
          categories={categories}
          thumbnail={gatsbyImageData}
        />
        <PostContent html={html} />
        <CommentWidget />
      </Post>
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`