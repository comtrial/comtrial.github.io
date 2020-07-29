---
title: JS 문법-연산자
date: 2020-07-26 11:04:48
categories:
- 내가 공부한거
- JavaScript
- 문법
---

# 연산자
* %연산자는 나머지를 의미한다.
<!--more-->
<br>

* +연산자는 피연산자들중 하나가 문자열일경우 나머지 피연산자를 문자열로 만듬

<br>

* 산술 단항 연산자
```js
a = 1;
b = ++a; //b,a = 2
c = a++; //c = 2, a = 3
```

<br>
 
## 문자열
문자열을 처리하기위한 **객체**로 String 객체가 있는 것이다. String 생성자를 이용하여 문자열 객체를 만들 수 있다. 

`let msgObj = new String("Anything");`과 같이 String 객체를 만들어 String 관련 프로퍼티 메서드 들을 사용할 수 있다. 

<br>

* 문자열과 String 객체
```js
let msg = "Anything";

console.log(msg.length); //3
console.log(msg.charAt(3)); //t
```

가 가능한 이유는 문자열에서 바로 프로퍼티를 사용하러고 하면 문자열이 자동으로 String객체로 변환 되기 때문이다. 

실행하는 순간에 일시적으로 생성되는 String 객체이기 때문에 메모리에서 사용후에 바로 삭제된다.


이런 객체를 가리켜 wrapper object라고 한다. js에서는 원시값을 처리할때 이 wrapper객체를 이용하여 자동 변환을 한다. 위에서 처럼 사용할때만 wrapper객체 메서드가 출력되는 것이며 String 객체로의 변환이 아예 이루어지는 것은 아니다. 

```js
let msg = new String("Anything");
console.log(msg); //String {..}객체 속성값 

console.log(msg.valueOf()); Anything
```

처럼 문자열이 들어 올 것으로 만들어진/만든 코드에 String 객체가 들어어오면 오류가 발생한다.


<br>


* 래핑(wrapping)과 래퍼 객체(wrapper object)

문자열등의 데이터 타입을 다룰때 기존의 만들어져있는 데이터 처리 객체로 다룰 수 있도록 해주는 작업이다.

래핑을 해줌으로서 이미 만들어 져있는 데이터 처리 메서드를 사용할 수 있게 해당 생성자 등을 이용하여 넣어 주는 작업이다.


<br>

## 논리 연산자

* 기본적으로 값과 타입은 다르다.
==와 ===에는 차이가 있다.


<br>

* 논리곱과 논리합의 단락평가

연산자는 따로 빼서 정리 할께여

<br>

## 명시적 타입 변환

숫자를 문자열로 변환한다고 할때 여러 가지의 방법이 있다.

	* Number객체의 메서드를 이용하는 방법
	number객체 안의 toString() 메서드를 사용할 수 있다.

<br)
	

	* String 함수를 이용할 수 있다. 
	String() 으로 모든 데이터 타입을 문자열 타입으로 바꿀 수 있다. 

이때 String 함수의 반환값은 객체가 아닌 숫자이다.


<br>


반대로 문자열을 정수나 복소수점 타입으로 변환 할때 는

	* parseInt(), parseFloat()로 변환시켜 줄 수 있다.


	* Number() 함수를 사용할 수 있다.





















.