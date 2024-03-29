import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
    useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'


// 기존에 정의했던 PostListItemType 삭제

type PostListProps = {
    selectedCategory: string
    posts: PostListItemType[]
}

export type PostType = {
    node: {
        id: string
        frontmatter: {
            title: string
            summary: string
            date: string
            categories: string[]
            thumbnail: {
                publicURL: string
            }
        }
    }
}


const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({
    selectedCategory,
    posts,
}) {
    const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
        selectedCategory,
        posts,
    )

    return (
        <PostListWrapper ref={containerRef}>
            {postList.map(
                ({
                    node: {
                        id,
                        fields: { slug },
                        frontmatter,
                    },
                }: PostListItemType) => (
                    <PostItem {...frontmatter} link={slug} key={id} />
                ),
            )}
        </PostListWrapper>
    )
}

export default PostList