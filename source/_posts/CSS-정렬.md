---
title: CSS 정렬
date: 2020-07-15 13:35:45
categories:
- 내가 공부한거
- CSS
---

### float

요소를 좌우 방향으로 띄워주는 기능이고 그로인해 수평 정렬을 할때 많이 사용된다. 

=>

CSS에서 flex box의 도입으로 float 대신에 flex box가 더 선호 되기는 한다.
 <!--more-->


밑의 사진 처럼 단순히 띄움이 아니라 text가 옆으로 흐르게 하는 그런 정렬의 기능을 한다.  (margin 등을 이용하여 텍스트 와의 간격을 넓히기도 가능)

<img src=/img/float.png>


기본적으로 요소들은 수직으로 쌓이기 때문에  쌓이는 정렬 방식을 수평으로 해줄때도 `float: left;`가 사용된다. 


<br>

### float 해제 

* clear

:float 속성이 추가된 요소의 **다음 형제요소**에 clear속성 추가
`clear: both;`를 이용하여 해제 할 수 있다. 


cf) 다음 형제 요소가 필요한 속성이라 다음 형제 요소가 없을 경우의 해제 속성이 필요하다. 



<br>

* **clearfix::after**

속성의 활용이 더욱 제대로 들어간 내용인것 같아.
가상 요소 선택자`::after`을 이용하여 마지막에 임의로 형제 요소를 추가해줄 필요없이 부모요소에서 가상요소 선택자 after를 활용함으로서 자식요소의 마지막 부분에 clear속성을 가진의미없는 content를 추가해 준다. 

```html
<div class="clearfix">
  <div class="child"></div>
  <div class="child"></div>
</div>

<div class="new-box"></div>
```

```css
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}
.child {
  float: left;
}
```




위와 같이 주의 할 점은 float속성이 들어갈 요소들을 clearfix내부에 위치 시키는 것이다. 그 외의 요소들은 외부로 빼줘야 한다. 



* display
 
float 속성이 들어가게 되면 inline 요소들도 block속성 처럼 바뀌기 때문에 굳이 	`display: block;`을 해줄 필요는 없다. 

but,		`display: flex;`의 경우에는 변하지 않는다. 

<br>

### Position

요소의 위치 지정 방법의 유형(기준)을 설정해 주는 속성

값 | 의미
---|:---
static | 유형 없음 / 배치 불가능
relative | 요소 자신을 기준으로 배치
absolute | **위치 상** 부모 요소를 기준으로 배치
fixed | viewport를 기준으로 배치
sticky | 스크롤 영역 기준으로 배치


```css
.child {
	position: relative;
	right: 30px;
	left: 20px;
}
/* 자기 자신이 있던 위치 기준으로 30,20 이동 */
```

과 같이 요소의 위치를 설정할 때 기준을 설정하는 속성이 `position`이다. 


* relative

이동의 기준이 자기 자신이 있던 위치가 됨 . 따라서 기존에 자기가 있던 위치가 이동 후에도 존재하여 다른 요소들의 쌓임에 영향을 준다.  조금은 주의 하여 써야하기에 활용도가 높지는 않아.


<br>

* absolute

**위치상의** 부모요소 이기 때문에 부모 요소의 position 속성이 보모요소에 (그냥 부모요소에 `positiona:relative,absolute;`에 해줘야 해) 정해져 있어야 한다. 

태그상에 부모 요소와는 관계없이 position 속성이 정해져있는 상대적인 부모요소를 기준으로 따르게 된다.(위치상의 부모요소)

<br>

* fixed

viewport가 기준이당. 스크롤을 하든 화면에 이동이되더라도 화면상에는 고정되게 된다. 
ex) 배너 광고등

<br>

* sticky
해당 요소의 **영역**안에서 스크롤이 이동할 경우 기준이 되어 움직인당.(전체 viewport와는 조금 다르지 영역이 다르니까)

```html
.section*8>{Tiltle $}
```

```css
.section {
  height: 200px;
  border: 4px dashed lightgray;
}
.section h1 {
  text-align: center;
  line-height: 2;
  font-size: 24px;
  font-weight: bold;
  position: sticky;
  top: 0;
}
```


**overflow**와 같이 사용되기도 하며 

```css
.container {
	width: 300px;
	height: 400px;
	overflow: auto;
}
```


를 하여 container 내부에서의 스크롤에 따라 요소를 위치 시킬 수도 있다.


<br>

### 요소의 쌓임 순서 (Stack order)

요소가 쌓여 있는 순서를 통해 어떤요소가 사용자에 가까이 쌓이는지를 결정 (사용자의 시선 방향 화면에 뭐가 더 앞에 쌓이는지 z축)

1. static(position 기본 속성)을 제외한 position 속성의 값이 있
을 경우 가장 위에 쌓이게 된다. 

1. position이 모두 존재한다면 z-index 속성의 숫자값이 높을 수록 위에 쌓임

1. position 속성의 값이 있고 z-index속성의 숫자값이 동일하다면 HTML에 나중에 작성된 코드일 수록 위에 쌓임


```html
<div class="box-group">
  <div class="box box1">1</div>
  <div class="box box2">2</div>
  <div class="box box3">3</div>
  <div class="box box4">4</div>
  <div class="box box5">5</div>
</div>
```

```css
.box-group {
  display: flex;
}
.box-group .box {
  width: 100px;
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -30px;
  box-shadow: 0 0 10px;
}
.box-group .box:nth-child(2n) {
  margin-top: 30px;
}
.box3 {
  posit ion: relative;
  z-index: 2;
}
.box4 {
  position: relative;
	z-index: 1;
}

```


<br>


