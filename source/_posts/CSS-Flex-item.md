---
title: CSS Flex item
date: 2020-07-29 13:06:24
categories:
- 내가 공부한거
- css
---
# CSS Flex Items
flex items의 속성들
<!--more-->
속성 | 의미
---|:---
order | flex item의 순서를 결정해주는 요소
flex | flex-grow, flex-shrink, flex-basis의 단축속성
flex-grow | item의 증가 너비의 비율 설정
flex-shrink | item의 감소 너비의 비율
flex-basis | item의 기본 너비
align-self | 교차축에서 item의 정렬 방법의 설정

<br>

## order
item들에 order 숫자를 지정해 주어서 순서가 정해지도록 설정해 준다. 음수의 사용도 가능

`html에 구조와 상관없이 지정해 줄 수 있기에 활용`

<br>

## flex-grow,shrink
각각의 item에 flex-grow값을 설정해 주면 그 비율에 맞게 item이 폭을 가지게 된다. 

```html
<div class="container">
  .item.item${$}*5
</div>

=>

<div class="container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
</div>
```

```css
.container {
  border: 4px solid;
  display: flex;
}

.container .item {
  height: 100px;
  background: tomato;
  border-radius: 10px;
}

.item1 {
  flex-grow: 1;
}
.item2 {
  flex-grow: 2;
}
.item3 {
  width: 100px;
}
```

와 같이 item에 width를 직접적으로 설정하게 되면 각각 가지고 있는 px이 있기 때문에 비율이 깨지게 되기에 width값을 auto로 해준 후 비율을 설정해 주었다. 

그렇기에 증가 너비라고 표현한 것이다.  기본적인 폭을 갖는 값은 width를 설정해 주고 가변하게 증가될 너비값을 flex-grow로 설정해 주게 되면 좋다. 
























.