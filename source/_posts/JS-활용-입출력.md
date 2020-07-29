---
title: JS 활용-입출력
date: 2020-07-26 13:17:06
categories:
- 내가 공부한거
- JavaScript
- 활용
---
# 웹 브라우저에서의 입출력
우선 웹이라는 플랙폼은 이벤트 주도형 프로그램임을 알고 넘어가야 할 것 같다. 이벤트란 말 그대로 사건으로 의미한다. 마우스를 움직이는 ‘사건’, 클릭하는 ‘사건’, 키보드의 입력 ‘사건’ 등의 수많은 사건의 컨트롤을 가능하게 해주는 것이 JavaScript이다
<!--more-->

우선 간단한 예시를 정리해 보면
```html
<html>
<head>
    <meta charset="UTF-8">
    <title>시각의 콘솔 표시</title>
    <script>
        function displayTime() {
            let d = new Date();
            console.log(`현재 시각은 ${d.toLocaleString()} 입니다.`);
        }
    </script>
</head>

<body>
    <input type="button" value="click" onclick="displayTime()"> 
</body>
</html>
```

처럼 간단하게 이벤트의 컨트롤을 해줄 수 가 있다.


<br>

## DOM의 기본적 이해
DOM은 후에 자세히 정리 하겠지만 입출력에 있어서 빼고 이야기 할 수 없는 내용이라 기본적인 내용의 정리를 하고 넘어가도록 하겠습니다.

* DOM객체
html 문서나 html 요소를 가르키게하는 객체로 js를 이용하여 html을 조작할 수 있게 해 준다.

-**window**: window 객체는 웹 브라우저의 윈도우 하나 또는 탭하나를 가르키게 된다.

-**document** : Document객체는 html 문서 전체를 가르키며, html 요소객체를 가져오거나 html 전반의 기능을 제공한다.

-**요소**: html 요소 를 가르키는 객체

<br>

* DOM을 활용한 이벤트 등록의 흐름

1. window.onload를 통한 html 문서의 읽음

1. document.getElementById 메서드를 통해 id속성을 가진 요소 객체의 불러옴

1. 요소 객체의 이벤트 처리기 등록


위의  흐름을 코드로서 보면

```js
window.onload = {
	let button = document.getElementById("button");
	//요소 객체를 button이라는 변수에 새로운 객체로서 담는것이다.
	button.onclick = displayTime;
//이벤트 처리기의 등록과정이다. 하나의 처리기를 등록하는 것
};
```



각각의 단계에서 내부에서 일어나는 과정을 알아보면

1. window.onload

DOM에서 이벤트 처리기의 등록을 하는 이유는 html 괴 js를 분리 하기 위함입니다. 코드의 분리는 유지보수성을 위함에서 반드시 이루어 져야 하는 과정이다. 

window.onload는 브라우저가 html 을 읽어 나갈때 순차 적으로 읽어 나가기 때문에 html body부분 보다 위에 작성된 js 코드를 읽을 때 오류가 나기때문에 html 문서 전체를 읽은 후에 실행될 수 있게 해주는 프로퍼티가 window객체의 onload 이다. 


2. getElementById

html 의 요소를 반환하게 하는 역할의 코드이다. 해당 id 값을 가지는 html 요소 **객체**를 반환하게 하는 역할을 한다.


3. 이벤트 처리기의 등록

위의 getElementById로 가져온 것은 말 그래로 요소 **객체**이다. 따라서 이 요소 개체의 onclick이라는 이미 등록되어 있는 프로퍼티를 이용할 수 있는 것 이다. 이미 마련된 이벤트 처리기 프로퍼티에 우리가 구현하고자 하는 로직을 등록하여 주면되는 것이다.









## 고찰
DOM의 활용을 위와 같이 단계별로 분석하며 살펴보니 좀더 활용의 흐름이 잡히는 것 같아 좋았던 것 같다.  
이전의 객체의 개념이 확실하게 자리 잡히니 객체들 개념들이 와도 프로퍼티들의 활용을하며 사용할 수 있게 되니 혼란이 덜해지게 된것같다.  뭣도 모르고 getElementById 를 사용하여 css 를 다루고 했었는 데 요소객체였다는 사실을 알게되니 그 안의 프로퍼티들의 등록을 통해 이루어지는 흐름이 가시적으로 자리잡히게 된것 같아 좀 정리가 되었다.





// 이 코드는 모던 자바스크립트 입문(徹底マスターJavaScriptの教科書) 에서 인용한 것입니다.  
// [ISBN #978-4797388640]. Copyright 2017 by 磯博
.
