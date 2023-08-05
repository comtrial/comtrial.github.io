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
    display: block;
    max-height: 500px;
    width: auto;
    margin: 0 auto;
    padding: 0 20px;
    object-fit: cover;
  }

  span + em, img + em {
    display: block;
    text-align: center;
    font-size: 12px;
  }



  // Markdown Style
  line-height: 1.5;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -.01em;
  color: #343a40 !important;

  // Apply Padding Attribute to All Elements
  p {
    padding: 14px 0;
    color: #343a40 !important;
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
    margin-top: 60px;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    
  }

  h4 {
    font-size: 15px;
    font-weight: 700;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 0px 15px;
    border-left: 0.8px solid #000000;
    font-weight: 500;
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
    padding: 14px;
    font-weight: 500;
    font-size: 12px;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
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
      width: auto;
      max-height: 300px;
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