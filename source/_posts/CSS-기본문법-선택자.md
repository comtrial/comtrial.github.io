---
title: CSS 기본문법-선택자
date: 2020-07-10 11:55:44
categories:
- 내가 공부한거
- CSS
coverImage: themes/hexoblog_theme/source/img/og_image.png
---
## 기본 문법

* 선택자의 역활 
:html에 스타일을 적용하기 위해 HTML의 특정한 요소를 선택하는 요소이다.
<br>

* class:
class라는 속성에는 여러개의 이름이 들어 올 수 있고 띄어쓰기로 구분 한다.
하위 항목 개념을 이용하여 모든 태그에 이름을 붙일 필요 없이 쓸수 있다.
<!--more-->
ex)
```
<div class=“logo”>
  <img src=“”  alt=“”>
</div>
```
의 코드에서 img 를 제어할 때 이름을 일일이 붙일 필요없이 css에서
```
.logo img {

}
```
와 같이 하위 항목 개념을 이용 하여 띄어쓰기를 통해 작성 할 수 있다.
<br>

* 속성(property)과 값(value)
: HTML에서의 속성과  영어 이름이 다르다. 구글링 할때 상황에 맞게 써야 할 것 같다.
```
div {
  color: red; /* 글자색은 빨강 */
  font-size: 20px; /* 글자 크기는 20px */
  width: 300px; /* 가로 너비는 300px */
  margin: 20px; /* 바깥 여백은 20px */
  padding: 10px 20px; /* 안쪽 여백은 위아래 10px, 좌우 20px */
  position: absolute; /* 위치는 부모 요소 기준, 흠.. 이게 무슨 뜻일까? */
```
<br>

* 선언 방식 
— 태그에 직접 작성하기(인라인)
:HTML태그에 직접 작성하기 때문에 선택자가 필요하지 않다.
```
<div style=“color: red;”>태그에 직접 작성1</div> <!— red —>
<div style=“color: red;”>태그에 직접 작성2</div> <!— red —>
<div style=“color: red;”>태그에 직접 작성3</div> <!— red —>
<div style="color: red;">태그에 직접 작성4</div> <!-- red -->
```


- HTML에 포함하기(내장)
:HTML의 <head>부분에  <style></style>이라는 태그를 사용하여 안에 css를 작성하여 준다.
```
<head>
  <style>
    div {
      color: red;
    }
  </style>  
</head>
<body>
  <div>HTML에 포함1</div> <!— red —>
  <div>HTML에 포함2</div> <!— red —>
  <div>HTML에 포함3</div> <!-- red -->
</body>
```

— **HTML** 외부에서 불러오기 
: 완전히 분리 하여 작성후 link태그를 이용하여 한번 작성된 코드를 여러 곳에서 사용가능 
```
in html
<head>
	<link rel="stylesheet" href="css/commen.css">
</head>

=>

in css

div{
	color: red;
	font-size: 20px;
	font-weight: bold;
}
```

-**CSS** 에서 외부 css파일 불러오기
:@import url(“./common2.css”);  방식을 이용하여 css 에서도 외부 css 파일을 불러 올 수 있다.


cf) html 에서 호출되는 방식(병렬 호출 방식) 과는 다르게 @import 방식은 직렬 호출 방식으로 1,2,3,4의 파일이 존재 할때 순차적인 업로드가 끝나야 그 다음의 파일이 호출 된다.


cf) @ : at 규칙으로 외부의 문서를 가져온다의 의미를 가짐
<br>

## 선택자

### 기본 선택자

 * 전체 선택자(Universal selector)

: * 을 이용하면 된다.
```
* {
selector: value;
}
```
<br>

* 태그 선택자 :
찾으려는 태그의 이름을 입력하면 된다.(element)

cf) 해당 태그의 모든 요소들이 선택되어지기 때문에 활용도가 많이 떨어진다.클래스 선택자를 찾게 되는 이유 
<br>

* class로 찾는 경우:
위와 같이 태그로 찾는 경우는 사실 너무 포괄적이기에 각 태그에 클래스 명을 정해주어 클래스 선택자로 찾아주게 된다.(.class)

cf) class 를 갖는 div를 작성 할 때 단축어는 (class이름 + tab ) 이다.
<br>

* id로 찾는 경우:
(# id)
<br>


### 복합선택자

* 일치선택자
: 두개의 선택자를 이용하여 좀더 세밀한 선택자를 이용 할 수있다.
ex) 태그 선택자, 클래스 선택자를 붙여서 두조건을 동시에 만족해야 가능
```
span.orange {
	color: red;
}
```
<br>

* 자식 선택자
: E의 자식 요소 F를 선택 ( 꺽새를 이용)
F 를 찾되 E의 조건을 
E > F
ex)
```
ul > .orange {
	color: red;
}
```

<br>

*  후손(하위) 선택자
:E 의 후손(하위) 요소 F 를 선택 ( 띄어쓰기를 이용하여 )
E F
```
div .orange {
	color: red;
}
```


cf) 후손( 하위) 요소란 해당 태그의 하위요소 모두를 의미한다.
바로 아래 있는 태그를 특별히 자식 요소라 하지만 그 역시 하위 (후손) 요소이다. 그리고 하위 요소들끼리의 같은 위상의 태그끼리를 형제요소라고 한다. 조상(상위)요소는 하위요소의 반대되는 개념이다.

<br>

* 인접 형제 선택자
:**부모요소( not 조상요소)**를 공유하는 E의 ~다음~ 형제 요소 F 하나만 선택
E + F
ex)
```
.orange + li {
	color:red;
}
```



* 일반 형제 선택자
: E 의 **다음** 형제 요소 F **모두** 선택
E ~ F
ex)
```
.orange ~li {
	color: red;
}
```

## 상속(inherit)
<br>

: 상위요소에 적용이 될경우 하위요소들까지도 적용이 되는 경우가 있다. 주로 텍스트의 경우가 그러하다.

[image:805A0586-11FB-4C13-9FFF-CEAF972C63DA-11753-0000AB3E9C893B13/스크린샷 2020-03-14 오후 2.03.55.png]
 
* 강제 상속
: css에서 값에 해당 하는 부분에 inherit을 넣어 주게 되면 가능 하다
```
<div class=“parent”>
	<div class=“child”></div>
</div>

.parent {
	position: absolute;
}
.child {
	position: inherit;
}
```

<br>

## 우선순위
 
:같은 요소가 여러 선언의 대상이 될 경우, 어떤 선언의 css 속성(property)을 우선 적용 할지를 결정하는 방법
1.명시도 점수가 높은 선언이 우선(명시도)
2.점수가 같은 경우, 가장 마지막에 해석(늦게 작성된) 되는 선언이 우선(선언 순서)
3.명시도는 ‘상속’ 규칙보다 우선 (중요도)
4.!important 가 적용된 선언 방식이 다른 모든 방식보다 우선(중요도)

1st. !important

2nd. 인라인 선언 방식 1000pt(하지만 점수가 쓸데 없이 너무 
높아 유지보수에 용이 하지않아서 선호되지 않는 방식이다.

3rd. id선택자 100pt

4th.class선택자 10pt

5th.태그 선택자 1pt

6th. 전체 선택자 0pt

7th. 상속 점수 계산하지 않음


cf) 부정 선택자는 점수에 포함 하지 않음
<br>