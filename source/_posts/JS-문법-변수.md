---
title: JS 문법-변수
date: 2020-07-17 13:59:15
categories:
- 내가 공부한거
- JavaScript
- 문법
---

# 변수

기존에 배운 언어들과는 데이터 타입이 없다는 부분이 다르지만 변수에 관한 처음 정리하는 문법의 특성이기 때문에 내가 배운 특징을 함께 정리 할께염

js에서는 데이터 타입이 두가지 원시값(기존의 정수, string..)과 객체값 만을 가지는 것이 특징이다.

<!--more-->
<br>

## 변수의 선언 

변수의 선언과 할당은 차이가 있습니다. 선언으로 변수를 담을 그릇을 만들어 준후 초깃값이나, 사용할 변수를 할당에 주어야 합니다. 할당되지 않은 변수는 의미가 없으며,

선언과 동시에 할당하는 것도 가능합니다.

`let a = 2, b =3, c = 4;`

<br>

## 변수의 hoisting

보통의 언어들이 코드의 순서대로 읽어드리는 과정 때문에 변수에 선언이 변수의 활용보다 우선 되어야 하지만 js에서는 변수의 끌어올림(hoisting) 으로 선언이 ( not 할당) 끌어올려지게 되지만 굳이 다른 언어에서는 쓰이지 않는 특성이기에 이렇게만 정리하고 가자.

<br>

## 변수의 naming

비교적 간단한 프로젝트의 경우 어렵지 않지만 프로젝트의 규모가 커질 수록 어려워지고 고통받는 부분이기 때문에 비교적 자세히 정리 하고 가겠습니다. 

* 캐멀 표기법
두번째 이후의 단어의 첫 글자부터 대문자로 구분

ex)
`newName createLifeGame`

* 파스칼 표기법
각 단어의 첫글자가 대문자

ex)
`NewName  CreateLifeGame`

* 밑줄 표기법(스네이크 표기법)
모든 단어가 소문자, 단어를 _으로 구분

ex)
`new_name	create_life_game`



* 일반적인 규칙

-변수의 경우 소문자 시작 대문자 구분:동사/형용사+ 목적어(캐멀표기법)

ex)`maxNum`


-상수의 경우 전체 대문자

ex) `MAX_CNT`

-논리값의 표현 변수는 is를 붙인다. 

ex) `isMouseDown`


-생성자의(not function) 경우 파스칼 표기법을 사용한다. 
동사의 적절한 사용으로 무엇의 기능을 하는 생성자인지를 알 수 있게 한다. 

함수의 경우 캐멀 표기법

1. 값의 설정 : 접두사 set 을 붙인다.
	* setTimer, setNodeName
2. 값얻어오기 : 접두사 get 을 붙인다.
	* getTime, getNodeName
3. 값의 추가 : 배열등에 값을 넣을때. 접두사 push
	* pushItem, pushNode
4. 값빼오기 : 배열등에서 값을 빼올때. 접두사 pop
	* popItem, popNode
5. 생성 : create
	* CeateUserObject, CreateFile
6. 열기 : open
	* OpenXMLFile, OpenImage
	
<br>

## 데이터타입
앞서 정리 했듯 js는 변수타입이 정적 타입이 아닌 동적 타입 언어 이기 때문에 

```js
let pi = 3.14;

let pi = '원주율';
```
 
이 모두 가능 하다. 변수의 데이터 타입이 없다는 것이 양날의 검인것 같다.  변수 타입이 없기에 각각 데이터 타입의 특성 보다는 활용에 중점을 두겠슴당. 

<br>

* 숫자
 
간단한 프로퍼티의 정리만을 하겠당.

 표기법 | 설명
---|:---
`Number.MAX_VALUE`  | 표현 가능 최댓값
`Number.MIN_VALUE ` | 표현 가능 최솟값
`Number.NaN` | 부정값 ( not a number)


<br>

* 문자열

HTML에 삽입 될 경우가 많기 때문에 , 엮어서 설명해 주셨다. html 에 들어 갈때는 “”로 들어가기 때문에 ‘를 문자열로 사용하는 것이 좋다. 

`onclick=“alert('Thanks!')”`

또한 문자열에서는 일반적인 줄바꿈등의 표현이 불가능하며  이스케이프 시퀀스를 사용해야한다.

<br>

* 값이 없음을 의미하는 특수값

null과 undefined가 있다. 함수에서 값이 할당되지 않은 경우와 전달받지 못한 인수에 대한 오류 반환 값으로도 쓰임을 알아야 한다.



-null : 값이 없음을 의미 한다.

-undefined : 값이 **아직** 설정되지 않음을 의미한다. 
ex)
```js
let criminal;
console.log(criminal);

//undefinde (criminal의 값이 아직 정해지지 않았지 때문)
```


<br>

* Symbol

enum과 비슷한 맥락인 것 같다. 유일한 값을 생성하며 	`Symbol()`을 통해 생성한다.

값의 상태등을 명시 할때 유용하다. 

ex)
```js
var NONE = Symbol("none");

var BLACK = Symbol("black");

var WHITE = Symbol("white");
```

<br>

-문자열의 연결
`Symbol.for()`을 이용하여 문자열과 연결시킬 수 있다. 

연결된 문자열은 `Symbol.keyFor()`로 구할 수 있다.

```js
var sym1 = Symbol.for("club");
var sym2 = Symbol("club");

console.log(Symbol.keyFor(sym1)); // -> club
console.log(Symbol.keyFor(sym2)); // -> undefined
```



<br>

* 템플릿 리터럴(Template Literal)

`(역따옴표)를 사용하는 문자열 표현 구문이다. 표현식의 값이나 여러줄의 문자열을 사용하며 줄바꿈등의 문자열 표현을 이스케이프 시퀀스의 사용없이도 표현가능하다.


-플레이스 홀더
`${...}`으로 표현 하며 ... 부분을 표현식으로 간주하여 코드의 결과 값을 표현 할 수 있게 된다. 

ex)
```js
console.log(‘Hello’ + name + ‘!’);

=>

console.log(`Hello, ${name}!`)
```

```js
var a = 2, b = 3;
console.log(`${a} + ${b} = ${a+b}`);
//  2 + 3 = 5
```

처럼 `${}`안의 표현식이 문자열로 바뀐것을 확인 가능.









---

// 이 코드는 모던 자바스크립트 입문(徹底マスターJavaScriptの教科書) 에서 인용한 것입니다.  
// [ISBN #978-4797388640]. Copyright 2017 by 磯博