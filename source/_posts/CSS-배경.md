---
title: CSS 배경
date: 2020-07-17 18:49:15
categories:
- 내가 공부한거 
- CSS
---

### 속성값
<!--more-->
값 | 의미 | 기본값
---|:---|:---
background-color | 배경 색상 | transparent
background-image | 하나 이상의 배경 이미지 | none
background-repeat | 배경 이미지의 반복 | repeat
background-position | 배경 이미지의 위치 | 0 0 
background-attachment | 배경 이미지의 스크롤 여부 | scroll

`background: 색상 이미지경로 반복 위치 스크롤특성;`

<br>

### backgroud-image의 다중

여러장의 이미지 삽입이 가능한데 단축 속성으로 작성 할 경우 하나의 url() 씩 속성 값들을 지정해 준 후 , 로 연결 하면 된다. 

```css
.box {
	background: url("../img/i1.img") no-repeat 100px 50px,
	url("../img/i2.img") repeat-x;
}
```

일반적인 요소의 쌓임과는 다르게 먼저 입력된 값이 가장 상단에 보이게 된다. 

<br>

### bacground-repeat

속성

값 | 의미
---|:---
repeat | 배경이미지를 수직, 수평 반복
no-repeat | 반복의 멈춤
repeat-x,y | x축이나 y축으로의 반복

<br>

### background-position

배경의 위치값의 설정이다.

값 | 의미 
---|:---
% | 왼쪽 상단부터 오른쪽하단 까지의 값을 %로써 표시( 0% 0%)
x축 y축 | 순서에 유의 하여 작성

<br>

### backgroung-attachment

배경 요소의 스크롤시의 따라붙는 속성

기본값이 그냥 스크롤되는 값이니까

fixed 속성을 이용하여 뷰포트에 고정시킬 수 있다.  


<br>

### background-size

* 속성 값들

값 | 의미
---|:---
auto | 배경이미지 원본크기의 표시
단위 | 가로 세로의 단위의 지정,width만 지정시 비율이 알아서 조정
**cover** | 배경 이미지의 원본 비율을 유지하며, 요소의 더 **큰** 너비에 맞춰짐, 이미지가 잘릴 수 있음
**contain** | 배경 이미지의 원본 비율을 유지하며, 요소의 더 **짧은** 너비에 맞춰짐, 이미지가 잘리지 않음
 