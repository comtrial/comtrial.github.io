---
title: CSS 박스모델
date: 2020-07-12 12:50:44
categories:
- 내가 공부한거
- CSS
---
# CSS 박스모델

### 기본(auto) 값 

* block

width  100%
height 0
<!--more-->
cf) 0의 경우 단위값을 붙이지 않고 표시

* sqan

text에 특화된 태그이기 때문에 wid와 height를 설정 해 줄 수없으며 입력된 텍스트의 크기만을 가진다. 

<br>

### max-, min

요소의 최대, 최소 폭, 높이를 설정 가능

<br>

### margin

요소의 ‘외부(바깥) 여백’을 지정하게 된다.

-botton, top, left, right를 모두 지칭하는 **단축** 속성이다.

 -음수도 사용이 가능하다.


* %

margin 에서의 % 단위는 부모 요소의 가로(width)가 기준이 되어 사용됨. 


* 단축속성
```
margin: 위 우 아래 좌;

margin: 위 [좌, 우] 아래;

margin: [위, 아래] [좌, 우];

margin: [위, 아래, 좌, 우];
```




* margin 의 중복

-형제요소들의 `float: left;`( 수평으로) 쌓일 경우 각각의margin 값들이 더해지게 되지만 수직일 경우는 중복이 되어 일어나게 된다.


-자식요소의 margin값이 부모요소로 부터의 상대적인 margin으로 들어가는 것이 아니라 부모의 margin 값으로 들어가게 된다.  


-margin 중복의 계산법

조건 | 계산 
---|:---
둘다양수,음수 | 더 큰/작은 값의 중복
양수와 음수 | 더해


-일어나는 조건

* 형제요소들의 top과 botton이 만났을때

* 부모요소의 top과 자식요소의 top이 만났을 때

* 부모요소의 bottom과 자식요소의 bottom 이 만났을때

<br>

### padding

요소의 내부여백을 나타내며, 사용법과 속성은 margin과 동일하다. 

* 크기증가 현상

내부여백을 추가 하게 되면 요소의 크기 자체가 커지게 된다.

```css
div{
	width:100px;
	height: 100px;
	padding: 20px;
}

/* width가 140px이 됨 */
```

계산하기 싫잖아 그렇기 때문에

`box-sizing: border-box;` 추가 해줄 경우 자동 계산

<br>



### border

* 속성 값

값 | 의미 | 기본값
---|:---|:---
boder-width | 선의 두께 | medirm
border-style | 선의 종류 | none
border-color | 선의 색상 | black

```css
.box {
	border: 1px solid red;
}
```


* border-width,style,color

: 요소의 테두리 선 개념이기 때문에 사각형 구조를 가짐 따라서 margin 과 같이 단축사용법을 가진다.

```
border-width: 위 우 아래 좌;

border-width: 위 [좌, 우] 아래;

border-width: [위, 아래] [좌, 우];

border-width: [위, 아래, 좌, 우];
```



* 기타 속성의 표현

`border-bottom-width` 처럼 속성을 표현 할 수 도 있다.
 

cf)  border 의 크기 만큼 요소의 크기가 증가 하기 때문에 직접 계산을 해주던가 아니면 box-sizing 속성을 통해 조절해 주어야 한다.

<br>

### box-sizing

요소의 크기 계산 기준을 지정해준다.

box의 모델이  
content-box => padding =>border => margin 의 포함관계를 가지기에

값 | 의미
---|:---
content-box | 너비(wid, height)만으로 요소의 크기를 계산
border-box | 너비를 포함, padding, border를 포함한 요소의 크기 계산


### display

요소의 박스타입(유형)을 설정

값 | 의미
---|:---
block | 블록요소
inline | 인라인 요소
inline-block | 인라인 블록  요소(ex)input)
none | 요소가 사라짐

ex)
```html
<input type="text" value="1">
<input type="text" value="2"> <!--요소 사라짐-->
<input type="text" value="3">
<input type="text" value="4">
```

```css
input:nth-child(2) {
  display:none;
}
```

js를 이용하여 요소에 hide 클래스를 만들어 주는 코드를 이용하여 css에 `div.hide{display:none}` 을 이용하여 요소의 숨김 등의 이벤트를 만들어 줄 수 있다. 

* cf) `opacity` 와의 구별

 존재하지만 안보이는 개념	`opacity: 0;` 이 아니라 아예 존재하지 않게 하는 개념이다. 

<br>

### overflow

요소의 넘쳐지는 부분에 대한 제어를 부모요소에서 할 수 있다.
visible, hiddem, scroll, auto속성들을 이용 할 수 있다.





.