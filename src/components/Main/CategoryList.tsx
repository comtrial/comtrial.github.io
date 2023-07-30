import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'


type CategoryItemProps = {
  active: boolean;
}

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps


export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
  margin-top: 65px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;


  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
    padding: 0 20px;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
)) <CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 500;
  font-weight: ${({ active }) => (active ? '650' : '500')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  text-underline-offset : 5px;
  cursor: pointer;
  

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {
            name === "All" || count === 1
              ? `#${name}`
              : `#${name}(${count})`
          }
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
