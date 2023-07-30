import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  grid-column-end: span 24;
  display: grid;
  place-items: center;
  height
  : 80px;
  margin-top: auto;
  padding: 50px 0;
  font-size: 12px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      방문 감사드리며, 좋은 하루 되세요 😆
      <br />© 2021 Developer choi seungwon, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer