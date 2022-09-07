import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  // @font-face {
  //   font-family: "San Francisco";
  //   font-weight: 100;
  //   src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff");
  // }

  // /** Thin */
  // @font-face {
  //   font-family: "San Francisco";
  //   font-weight: 200;
  //   src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff");
  // }

  // /** Regular */
  // @font-face {
  //   font-family: "San Francisco";
  //   font-weight: 400;
  //   src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
  // }

  // /** Medium */
  // @font-face {
  //   font-family: "San Francisco";
  //   font-weight: 500;
  //   src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff");
  // }

  // /** Semi Bold */
  // @font-face {
  //   font-family: "San Francisco";
  //   font-weight: 600;
  //   src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff");
  // }

  // /** Bold */ 
  // @font-face {
  //   font-family: "San Francisco";
  //   font-weight: 700;
  //   src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff");
  // }
  // @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');





  

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";


    letter-spacing: -.01em;
    color: #292b2c;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle