import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 100%;
  word-break: break-all;
  box-sizing: border-box;

  img {
    width: 100%;
    padding: 0 5vw;
    object-fit: cover;
  }]


  // Markdown Style
  line-height: 2;
  font-size: 15px;
  font-weight: 500;
  line-height: 2;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h3 {
    margin-top: 40px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  h2 {
    font-size: 22px;
    font-weight: 700;
    
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    
  }

  h4 {
    font-weight: 600;
    font-size: 17px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 1px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 24px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 0.8px solid rgb(210, 210, 210);
    background: rgb(210, 210, 210);
    margin-bottom: 30px;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 13px;
    font-family: Consolas,liberation mono,Menlo,Courier;
    background: rgba(240, 240, 240, 0.5);
    border-radius: 4px;

    ::-webkit-scrollbar-thumb {
      background: rgba(245, 255, 255, 0.5);
      border-radius: 4px;
    }
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 20px;

    font-size: 14px;

    h1 {
      font-size: 20px;
    }

    h2 {
      font-weight: 700;
      font-size: 18px;
    }

    h3 {
      font-weight: 600;
      font-size: 16px;
    }

    h4 {
      font-weight: 600;
      font-size: 14px;
    }

    img {
      width: 100%;
      padding: 0 10vw;
      object-fit: cover;
    }

    hr {
      margin-bottom: 30px;
    }
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent