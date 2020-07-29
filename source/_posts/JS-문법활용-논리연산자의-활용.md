---
title: JS 문법활용-논리연산자의 활용
date: 2020-07-26 11:07:32
categories:
- 내가 공부한거
- JavaScript
- 문법 활용
---
연산자 중에서 논리연산자의 경우 삼항 연산자나 단축논리 평가등의 좀 스킬적인 부분들과 활용적인 부분 들이 많아서 따로 빼서 정리 하고 싶었다.

<br>

## 삼항연산자
: 조건에 따라 다른 값을 출력해야 하는 경우에 삼항연산자를 이용하여 훨씬 간결하게 작성가능해진다.
<!--more-->
ex)ㅍ
```js
const array = [];
let text = ‘’;
if(array.length === 0) {
 text = ‘	배열이 비어있습니다.’;
} else {
 text = ‘배열이 비어있지 않습니다.’;
}
console.log(text);
```
 의 경우를 삼항연산자를 이용하게 되면



```js
const array = [];
let text = array.length === 0
? '배열이 비어있습니다.'
: '배열이 비어있지 않습니다.';

console.log(text);
```
로 표현 할 수 있다.

사용법은 `조건 ? true일 경우 : false일 경우`이다.



<br>

## Truthy & Falsy 개념
: 조건문을 작성할 때 좀 더 유용하게 이용가능


* ex) 사용되는 경우 
: 파라미터가 undefined or null  일 경우 오류가 나는 것을 방지하기 위헤
```js
function print(person) {
 if(person === undefinded || null) {
  console.log(‘person이 없네여;;’);
  return;
 }
 console.log(person.name);
}

const person = null;
print(person);
```

의 코드를 falsy의 개념을 이용하면 다음과 같이 표현이 가능하다.

```js
function print(person) {
	if(!person) {
		console.log('person이 없는뎅...');
		return;
	}
	console.log(persone.name);
}

const person = null;
print(person); 
```

위가 작동되는 이유는 undefined, null이 falsy한 값이고 
!falsy는 true이기 때문이다.

<br>

* falsy한 값 / truthy한 값
```
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!’’);
console.log(!NaN);

//true
```

와 반대로 모든 들어있는 값들은 truthy한 값이다.



<br>

## 단축평가 논리 계산법
:논리 연산자를 사용할 경우 반드시 Boolean 값만 쓰이는 것은 아니다. 문자열과 숫자,객체, truthy 와 falsy한 값들 도 쓰이기에 논리의 계산법을 알아둘 필요가 있다.

정리하기에 앞서 항상 왜 파마미터값이 제대로 들어오지 않을 경우를 염두해 가며 코딩을 해야 하는지의 이유를 알아보면

ex) 
```js
const dog = {
 name : ‘멍멍이’
};

function getName(animal) {
 return animal.name;
}

const name = getName(‘’);
cosole.log(name);
```

의 결과 값이 그냥 undefined가 아니라 

위처럼 animal의 객체가 undefind 이기 때문에 undefined의 name객체를 찾을 수 없기에 _error_ 가 발생해 버린다.
`Cannot read property 'name' of undefined`

이럴때 오류의 발생으로 튕기는 대신에 그저 undefined를 반환하게 하려면 
ex)
```js
const dog = {
	name: '멍멍이'
};

function getName(animal) {
	if(animal) {
		return animal.name;
	}
	return undefined;
	}

const name = getName();
console.log(name); //undefined
```

<br>

* && 연산자로 논리 연산코드 단축시키기
: A && B 연산자를 이용할 때 A가 Truthy하다면 B 가 결과 값이 됨을 이용할 수 있다.
 그리고  A 가 Falsy 하다면 결과 값은 A 가 된다.

cf) A  가 Falsy 할 경우 undefinded가 될 뿐 어떤 값을 나타 낼 수는 없다. 
=> || 연산자를 이용해야함

```
console.log(true && ‘hello’); // hello
console.log(false && ‘hello’); // false
console.log(‘hello’ && ‘bye’); // bye
console.log(null && ‘hello’); // null
console.log(undefined && ‘hello’); // undefined
console.log(‘’ && ‘hello’); // ‘’
console.log(0 && ‘hello’); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1
```



위의 예제를 단축시키면

```js
const dog = {
	name: '멍멍이'
};

function getName(animal) {
	return animal && animal.name;
}

const name = getName();
console.log(name); //undefined
```


<br>

* || 연산자로 코드 단축시키기
: 어떤 값이 Falsy 할 경우 사용할 값을 지정해 줄때 유용
A || B 는 A가 Truthy 할 경우 결과 값이 A 가 되고, A 가 Falsy 하다면 결과 값은 B가 된다. 

ex)
```
const namelessDog = {
 name: ‘’
};

function getName(animal) {
 const name = animal && animal.name;
 if(!name) {
  return ‘이름이 없는 동물입니다’;
 }
 return name;
}

const name = getName(namelessDog);
console.log(name);

//‘이름이 없는 동물입니다.’
```

위에서 if (!name) 가정자체가 true 일 경우는 animal이 Falsy일 경우를 잡아주는 가정
이를 || 연산자를 이용하면

```js
const namelessDog = {
	name: ''
};

function getName(animal) {
	const name = animal && animal.name;
	return name || '이름이 없는 동물입니다.' ;
}

const name = getName(namelessDog);
console.log(name); //이름없는 동물입니다.
```

따라서 || 연산자를 이용하여

```js
 if(!name) {
  return ‘이름이 없는 동물입니다’;
 }
 return name;
```
 의 코드를 

```js
return name || ‘이름이 없는 동물입니다.’ ;
```
로 대체 할 수 있는 것 이다.






// 이 코드는 모던 자바스크립트 입문(徹底マスターJavaScriptの教科書) 에서 인용한 것입니다.  
// [ISBN #978-4797388640]. Copyright 2017 by 磯博
.