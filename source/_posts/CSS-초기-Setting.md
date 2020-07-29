---
title: CSS 초기 Setting
date: 2020-07-10 17:45:49
categories:
- 내가 공부한거
- CSS
---
# CSS의 초기 Setting 
### CSS Reset

브라우저들 마다 기본적으로 세팅 되어있는 속성값 들이 있기 때문에 초기 설정시 css 들을 초기화 해줄 필요가 있다. 
<!--more-->
```css
body{
	margin: 0;
	padding: 0;
}
```

대신에  reset.css 라이브러리를 사용하여 코드에 삽입을 해준다.

```html
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="reset.css라이브러리>
	<link rel="stylesheet" href="css파일">
</head>
```

  형태로 우리가 작성할 css 파일보다 상위에 존재하여 reset이 선행되어 실행되게 해야 한다.


in Codepen
옵션에서 css Base 를 reset 할 수 있다.

<br>


### Emmet 문법

* 선택자의 활용 

html css에서 사용하는 단축키 비슷한 개념으로  css에서 사용되는 문법인 .class를 html 작성시에 사용하여 tab키를 눌러주면 .class 라는 class 를 가지는 div 태그가 형성된다. 
<br>

* 일치 선택자의 활용

`ul.list`후 tab을 하면 ul 태그를 가지는 list class가 형성된다.

* 자식 선택자

`.container>ul.list>li.list-item*10>a{list$}` 

