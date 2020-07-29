---
title: HTML 기본문법-멀티미디어
date: 2020-07-09 14:27:14
categories:
- 내가 공부한거
- HTML
---
## 멀티 미디어

audio 나 video 이 경우의 세세한 조정 등은 javascrip로 구현하는 것이 최적화되어있기에 이미지에 중점을 맞추어 정리하려 한다.

### img

-width,height
: 가로든 세로든 길이를 지정해 주면 이미지 고유의 비율에 맞게 편집이 된다.
=> 사실 css에서 수정 해주는 것이 더 좋다.
<!--more-->
<br>
-srcset,sizes
:반응형 웹을 만들때 자주 사용되는데, 사용자의 디바이스에 따른 모든 것을 우리가 고려하여 모든 걸 지정해 줄 수 없기에 웹 브라우져에게 최적화를 떠넘기는 작업이라 보면된다.


<img src=/img/img1.png>

sizes에서는 최적화의 조건을 명시해 주고 srcset에서는 sizes에서 명시해준 최적화된 조건을 가지고 출력될 이미지의 목록을 (후보)를 명시해 준다.
https://heropy.blog/2019/06/16/html-img-srcset-and-sizes/

-srcset
: 브라우저에 제시할( 사용 할 )이미지들과 그 이미지들의 원본 크기를 지정합니다.
사용 할 이미지를 사이즈별로 2장이상 준비하여야 한다.(1장일 경우 그냥 src 속성을 이용하면 된다.)
cf) px 단위의 사용이 아니라 w, x 값을 사용해야한다.

-w unit 
: w 단위는 이미지의 원본크기의(가로너비) 를 의미한다.
예를 들어 400*300(px) 크기 이미지의 w 값은 400w 이다.

-원리: 사용하는 이미지를 우리 웹상에서는 늘려서 사용하는 개념보다는 줄여서 사용하는 개념이 픽셀이 뭉개지는 것보단 줄어드는 것이 낫기에 가장 가까운 이미지 파일을 줄여서 사용하게 된다.



따라서  viewport가 550px 일때 사용하는 이미지는 400짜리가 아니라 700짜리를 이용하게 되는 것이다.

css에서 구현 하게 되면
<img src=/img/img2.png>


in html
<img src=/img/img3.png>



-sizes
:미디어조건과 그 조건에 해당하는 이미지의 ‘최적화 출력 크기’를 지정한다.

<img src=/img/img4.png>

size와 width의 차이점

* size
`size=“(min-width: 1000px) 700px”`에서는 뷰포트의 가로너비가 1000px 이상 일때 700px로 최적화 출력하겠다를 의미
출력의 크기 + 최적화 크기 를 함께 지정

* width
위에서 정리 했듯 출력의 크기만을 지정





* figure,figcaption
-이미지나 도표의 연관이 있음을 알려줄 수 있는 태그
```
<figure>
  <img src=“milk.jpg” alt=“A milk”>
  <figcaption>밀크의 이미지 입니다!!!</figcaption>
</figure>
```

figcaption이 이미지에 대한 설명
<br>

### 이외의 멀티미디어요소

* iframe
-현재 페이지에 다른  html 홈페이지를 가져 올 수 있다.
(유튜브 등을 가져올때 사용가능)


* canvas
-렌더링할 그래픽 애니메이션을 레더링의 범위를 지정 해줌

-js에서 그림을 그리고 그것들이 실행되는 캠버스가 canvas 태그

-canvas , webgl api 가 실행되는 코드들의 범위를 지정해주는 태그(영역태그 ex) script, style)
