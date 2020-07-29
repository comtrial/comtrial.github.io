--- 
title: CSS Flex Container
date: 2020-07-25 12:24:42
categories:
- 내가 공부한거
- CSS
---

### CSS flex

출현의 배경을 보면 요소의 쌓임은 수직이기 때문에 수평 정렬을 위해서 기존에 해왔던 방법이 너무 획일화 되어있지 않고 편법(?)스러웠기 때문이다.

<!--more-->

```html
.container.clearfix>.item{$}*3

=>

<div class="container clearfix">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.container {
  border: 2px solid red;
}

.container .item {
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 10px;
  float: left;
}
```

이런 방법으로 해왔지만, 효율적이지도 가시적이지도 않다. 

flex를 이용하면

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  border: 2px solid red;
  display: flex;
}
.container .item {
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 10px;
}
```

만으로  수평정렬이 가능해 진다.
 

<br>

## Container와 Item

flex를 이용하기 위해선 container와 item이 두 box가 필요하다.

display: flex;

가 들어간 요소가 container의 영역이 되게 된다.

<br>

## Container
Container 로 속성을 부여하는 방법은 두가지가 있다.

display요소에 속성값을 밑의 두가지의 경우로 입력

값 | 의미
---|:---
flex | block 특성의 flex container를 정의
inline-flex | inline 특성의 flex container를 정의


* flex
display: block의 특성처럼  container기 수직으로 요소가 쌓임

<br>

* inline-flex
display: inline의 특성처럼 container기 수평으로 요소가 쌓임


**cf)**container내부의 item들의 정렬은 display: flex,inline-flex이든 상관없이 수평으로 쌓이는 display의 특성을 가지게 된다.  

flex와 inline-flex의 차이는 container  자체의 쌓임의 방식이 블록요소인가 inline인가에 있다.


<br>

### Container > flex-flow

`flex-direction`와 `flex-wrap`의 속성을 아우르는 단축 속성이다.

```css
flex-flow: 주축 여러줄 묶음;

.flex-container {
	flex-flow: row-reverse wrap;
}
```

<br>

* flex-direction
item의 주 축(maikn-axis)를 설정함.

값 | 의미 
---|:---
row | Items를 수평축(왼에서 오른)으로 정렬
row-reverse | row의 반대 방향으로의 정렬
column | Items를 수직 방향으로의 정렬
column-reverse | 

<br>

**cf)** 주축(main-axis)와 교차축(cross-axis)의 개념을 유의하자
시작점(flex-start) 과 끝점(flex-end) 또한 위의 flex-flow의 개념에 의해 달라짐으로 유의하자.(container의 시작점이므로 reverse에 의해 달라지지는 않는다.)


<br>

* flex-wrap
의 기본값인 nowrap으로 설정 되었을 경우에 요소(item)의 개수에 상관없이 한줄(가로축)  로만 표현이 되는데 `wrap`으로 설정이 되었을 경우에 여러줄의 표현이 가능해 진다.


```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
</div>
```

```css
.container {
  border: 4px solid;
  display: flex;
  flex-wrap: wrap;
}
.container .item {
  width: 150px;
  height: 100px;
  background: tomato;
  border: 4px dashed red;
}
```

와 같이 개개인의 item에 속성을 주지 않아도 container에 wrap이라는 속성을 이용하여 item들의 여러줄의 표현이 가능해진다. 

<br>

### Container > justify-content

주축의 정렬방식을 지정해 줄 수 있다.

justify-content: 

값 | 의미
---|:---
flex-start; | 기본값으로 시작점에 맞추어 정렬
flex-end; | 끝점 맞추어 정렬
center; | 중앙 정렬
space-between; | 요소와 끝점에 item을 붙힌 후 여백을 가운데 요소들에 분배
space-around; | 요소를 양 끝에 붙히지 않고 여백들을 요소에 분배


```css
.container {
  border: 4px solid;
  display: flex;
  justify-content: space-around;  
}
.container .item {
  width: 100px;
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
}
```
와 같이 container에 속성을 부여하여 요소들의 정렬을 할 수 가 있다.
 


<br>

### Container > align-content

교차축(cross-axis) 의 정렬 방법을 설정한다. 
`flex-wrap`을 통해 items가 여러 줄 이상이여야 하며 여백이 있을 경우에만 사용가능하다. 

`한줄일 경우 align-items를 사용하면 된다.`

값 | 의미
---|:---
stretch; | 교차축에 해당하는 너비에 맞추어 요소를 늘림(item의 heght가 auto일 경우)
flex-start; | 기본값으로 시작점에 맞추어 정렬
flex-end; | 끝점 맞추어 정렬
center; | 중앙 정렬
space-between; | 요소와 끝점에 item을 붙힌 후 여백을 가운데 요소들에 분배
space-around; | 요소를 양 끝에 붙히지 않고 여백들을 요소에 분배



`기준이 교차축의 시작임이 위의 justify와 다른것이다.`

```css
.container {
  height: 400px;
  border: 4px solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  
}
.container .item {
  width: 100px;
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
}
```


<br>

### Container > align-content > align-items

items가 한 줄일 경우 align-content의 사용이 불가 하므로, 이경우 align-items를 사용한다. 

그니까 한줄. 그 줄에 대한 controll을 해주는 거얌.


값 | 의미
---|:---
flex-start; | 기본값으로 시작점에 맞추어 정렬
flex-end; | 끝점 맞추어 정렬
center; | 중앙 정렬
baseline;| items를 문자 기준선에 정렬


<br>



## Flex-Container의 이해

container 안에 요소들의 개념이 꼭 정형적으로 있는 게 아니라 그 안의 요소들 안의 요소들에 대한 flex정렬을 원하면 container 안의 요소를 또다시 container로 만들어 줄 수도 있는거야 

```css
.container {
  height: 400px;
  border: 4px solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  
}
.container .item {
  width: 100px;
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```


여기 까지가 `container`에 관한 속성들이 었습니다. 이어서 item에 부여할 수 있는 속성들을 정리해 보겠습니다.


