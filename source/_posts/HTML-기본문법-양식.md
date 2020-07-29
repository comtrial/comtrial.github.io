---
title: HTML 기본문법-양식  
date: 2020-07-10 14:51:18
categories:
- 내가 공부한거
- HTML
---
# 양식

### <form>

-웹서버에 **정보를 제출하기** 위한 양식의 범위를 정의(ex)로그인페이지)
<br>
<!--more-->
* action : 전송한 정보를 처리할 웹페이지의 url 을 입력(link 의 href 속성과 비슷한 개념이라고 생각하면 될 듯.
<br>


* target : 서버로 전송후 응답받을 페이지 열리는 방식을 지정(ex) _self, _blank)
<br>


* method: GET 방식의 경우 전송하는 url에 입력한 정보가 담기고, 별로 바람직한 방식은 아니기에 url에는 정보가 담기지 않는POST의 방식을 사용하는 것이 권장 된다.
[image:EF503C3B-0290-43B0-9B91-E793618628E1-1130-00002D6068E2BD9E/스크린샷 2020-02-29 오후 2.15.48.png]

<br>


* `<input>`
-form 태그 안에 있지 않아도 form 태그의 id 값을 이용하여 form 와 연결 시켜줄 수 있다.
`<input type=“text” form=“form’s id”>`

```
<form action="/login" method="GET">
    <input type="email">
    <input type="password">
    <input type="submit" value="login">
<br>
```


-input 의 속성으로 만든 이미지를 제출 형식의 버튼으로 활용 할 수도 있다.

```html
<form action="/login">
	<input type="image" src="images/png" alt="image">
</form>
```
<br>






* label
-input이나 속성값의 이름을 설정해 주는 것인데 특징은 

-`<label>` 안에 for 의 속성값을 이용해서 해당되는 input의 id 값을 가져오게 될경우 label 안에 들어오개 되는 텍스트를 클릭시에도 버튼을 누르는 것과 동일한 효과가 나타남
```
<input type=“checkbox” id=“agreement” />
<label for=“agreement”>동의하십니까?</label>
```

-위의 경우와 같은 결과값을 가지는 표현 값은
```
<label><input type=“checkbox” />동의하십니까?</label>
```


ex)
```
<label>
	검색<input type=“search” />
</label>
```

-label 가능 요소:` <button>, <input>, <progress>, <select>, <textarea>`
<br>


* button
-input 보다 button에 특성화된 속성

-보통의 경우 js와 연동해서 사용하게 됨
ex)
```
<button onclick=“doit()”>클릭하세요!</button>

<script>
	function doit() {
		aler(‘클릭했습니다!’);
	}
</script>
```
