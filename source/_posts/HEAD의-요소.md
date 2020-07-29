---
title: HEAD의 요소
date: 2020-07-09 11:50:00
categories:
- 내가 공부한거
- HTML
---
### HEAD의 요소

— TITLE(웹 페이지의 제목)

: HTML문서의 제목을 정의합니다.웹 브라우저의 각 사이트 탭에서 이름으로 표시된다.


— META(웹 페이지의 정보)
<!--more-->
: HTML 문서에 관한 정보(표시 방식, 제작자(소유자), 내용, 키워드 등) 을 검색엔진이나 브라우저에 제공한다.
빈(empty) 태그이다.

```
<head>
  <meta charset=“UTF-8”>
  <meta name=“author” content=“홍길동”>
  <meta name=“description” content=“우리 사이트가 최고!”>
</head>

<!-- 다음과 같이 이해할 수 있습니다. -->
<문서의정보범위>
  <정보 문자인코딩방식="UTF-8">
  <정보 정보종류="사이트제작자" 정보값="홍길동">
  <정보 정보종류="사이트설명" 정보값="우리 사이트가 최고!">
</문서의정보범위>
```


charset   문자인코딩 방식    ex) UTF-8, EUC-KR

name    검색엔진 등에 제공하기 위한 정보의 종류  ex) autotr,description 등

content   name의 속성의 값을 제공


— LINK(CSS 불러오기)

: 외부 문서를 연결 할 때 사용한다.
특히 HTML외부에서 작성된 CSS 문서파일을 불러와 연결 할 때 사용한다.
빈 태그야

```
<head>
  <link rel=“stylesheet” href=“./css/main.css”>
  <link rel=“icon” href=“./favicon.png”>
</head>

<!-- 다음과 같이 이해할 수 있습니다. -->
<문서의정보범위>
  <외부문서연결 관계="CSS" 문서경로="./css/main.css">
  <외부문서연결 관계="사이트대표아이콘" 문서경로="./favicon.png">
</문서의정보범위>
```



속성 | 의미 | 값
---|:---:|---:
`ref` | (필수)현재 문서와 외부 문서와의 관계를 지정 | stylesheet, icon등
`href` | 외부 문서의 위치를 지정 | 경로

                               

