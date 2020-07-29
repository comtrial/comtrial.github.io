---
title: CSS-기본문법-가상 선택자
date: 2020-07-10 14:33:20
categories:
- 내가 공부한거
- CSS
---
##  가상 클래스 선택자
: (:) 가 붙어 있는 선택자

### event속성을 띄는 가상 선택자

* hover

E 에 마우스( 포인터 ) 가 올라가 있는 동안에만 E 선택
 `E:hover`
<!--more-->
ex)마우스가 올라가있을 경우에만의 css 효과를 줄 경우

```
<a href=“https://google.com”>Google</a>
<div class=“box”></div>

a:hover {
	font-weight: bold;
	font-size:	20px;
}
.box {
	width: 100px;
	height: 100px;
	background: tomaoto;
	transition: 0.4s;
}
.box:hover {
	width: 200px;
}
```
<br>

* active

:E를 마우스로 클릭하는 동안에만 E 선택
`E:active`

```
<div class=“box”></div>


.box {
	width: 100px;
	height: 100px;
	background: tomato;
	transition: 0.4px;
}
.box:active {
	width: 200px;
	background: yellowgreen;
}
```

* focus

:E 가 포커스 된 동안에만 E 선택
cf) 대화형 콘텐츠에서만 사용 가능 ex) input,img,tabindex
많은 경우에 input 에서 사용됨
`E:focus`

```
<input type=“text”>


input {
	width: 100px;
	outline: none;
	border: 1px solid lightgray;
	padding: 5px 10px;
	transition: 0.4s;
}
input:focus {
	border-color: red;
	width: 200px;
}
```


*위의 가상 선택자 속성들은 이벤트 속성에 가까움으로 css로 구현 보다는 javascript로의 구현이 훨씬 용이

<br>

### 가상 클래스 선택자

*  first-child, last-child

:E 가 형제 요소 중 첫번째 요소라면 선택
E:first-child
```html
<ul class="fruits">
	<li>apple</li> <!--선택-->
	<li>apple</li>
	<li>apple</li>
</ul>
```

```
fruits li:first-child {
	color: red;
}
```

<br>

* n th child
:E 가 형제 요소 중 n 번째 요소라면 선택
(n 키워드 사용시 0부터 해석) 
*child 개념이 생각보다 많이 쓰여 정확하게 나누어 학습 하는 것이 좋다.


E:nth-child(n)
```
.fruits li:nth-child(2) {
	color: red;
}
```

```html
<ul class="fruits">
	<li>apple</li>
	<li>apple</li> <!--선택-->
	<li>apple</li>
</ul>
```

 
cf) 짝수, 홀수 등을 이용하여 연산자들을 이용한 활용을 할 수있다.
```
.fruits li:nth-child(2n) {
	color: red;
}
```

```html
<ul class="fruits">
	<li>apple</li>
	<li>apple</li> <!--선택-->
	<li>apple</li>
	<li>apple</li> <!--선택-->
</ul>
```


```
.fruits li:nth-child(n+3) {
	color: red;
}
```


```html
<ul class="fruits">
	<li>apple</li>
	<li>apple</li>
	<li>apple</li> <!--선택-->
	<li>apple</li> <!--선택-->
</ul>
```


<br>

*주의해야 할 예제들

```css
.fruits p:nth-child(1) {
	color: red;
}
```

```html
<!--선택요소 없음-->
<div class="fruits">
	<div>straw</div>
	<p>apple</p>
	<p>apple</p>
</div>
```

해석 하는 방식이 왼쪽에서 오른쪽으로 하는 것 보다, 오른쪽에서왼쪽으로 해석하는 방식이 좀 더 정확할 것이다.


띄어쓰기를 이용한 후손요소를 선택시에는 자식과 그 하위 요소들 모두 포함이므로 위의 예제에서 1만을 변형 시키고 싶다면 
`.box-group > div:first-child`를 사용해야한다.
(자식요소만을 가르키기 때문에)

* nth of type

:E의 타입(태그이름) 과 동일한 타입인 형제 요소중 E가 n 번째 요소라면 선택
E:nth-of-type(n)


```css
.fruits p:nth-of-type(1){
	color: red;
}
```

```html
<div class="fruits">
	<div>딸기</div>
	<p>사과</p> /*선택댐*/
	<p>망고</p>
</div>
```

cf) nth-of-type은 type이 요소(태그 element)를 의미하기에 요소 대신에 class등의 다른 선택자가 오게 사용할 수 가 없다.

ex)

```css
.fruits .red:nth-of-type(1){
	color: red;
}
```

```html
<!--선택된 요소 없음-->
<ul class="fruits">
	<li>오렌지</li>
	<li class="red">오렌지</li>
	<li>오렌지</li>
	<li class="red">오렌지</li>
</ul>
```

의 경우 사용 불가하다.
<br>

* 부정 선택자(Negation Selector)

: s 가 아닌 e 선택
E:not (s) 


```css
.fruits li:not(.strawberry){
	color: red;
}
```

```html
<ul class="fruits">
	<li>orange</li> /* 선택 */
	<li class="strawberry">straw</li> 
	<li>orange</li> /* 선택 */
	<li>orange</li> /* 선택 */
</ul>
```
<br>

### 가상요소 선택자
: 요소의 내부에 내용을 삽입하여 추가적인 css를 입힐 수가 있다.


* BEFORE

:E 요소의 내부의 앞에, 내용을 삽입
E::before

ex) 
in emmet `ul>li{숫자$}*10`


```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>
```

```css
ul li::before {
	content: "숫자";
	font-weight: bold;
	color: red;
	margin-right: 20px;
}
```

cf) content 속성이 없으면 속성값이 할당되지 않는다. 가상 요소 선택자를 이용시에 필수적인 요소라고 생각하면 될 것 같다.
<br>

* AFTER
: 위의 before과 같은 내용이다. 내용이 앞에 추가되냐 앞에 오냐의 차이이다.

<br>

### 속성 선택자(Attribute Selectors)

: css에서의 속성은 property 로서 사용되고 html 에서의 속성은 attr이라고 사용되기에 속성선택자는 html의 속성을 가지고 컨트롤하는 역할이다. 

변수명을 짓는 행위자체가 고충이기 때문에 속성만을 가지고 컨트롤하기 위함

* [attr]

ex)
``` html
<input type="text" value="susan">
<input type="password" value="1234"> 
<input type="text" value="disabled text" disabled>
```

```css
[disabled]{
  opacity: 0.2;
  color: red;
}
```

<br>

* Attr=Value
속성을 포함하며 속성값이 value인 요소의 선택을 위함

ex)
``` html
<input type="text" value="susan">
<input type="password" value="1234"> 
<input type="text" value="disabled text" disabled>
```

```css
[type="password"] {
	opacity: 0.3;
}
```

<br>

* Attr^=Value

:속성 attr을 포함하며 속성 값이 value로 시작하는 요소 선택
[attr^=value]

```html
<button class="btn-success">success</button>
<button class="btn-danger">danger</button>
<button>normal</button>
```

```css
[class^="btn-"] {
  font-weight: bold;
  border-radius: 20px;
}
```

<br>

* Attr$=Value

: 끝나는 요소의 선택

```css
[class^="btn-"] {
  font-weight: bold;
  border-radius: 20px;
}

[class$="success"]{
  color: green;
}
[class$="danger"]{
  color: red;
}

```