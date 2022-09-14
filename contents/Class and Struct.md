---
date: '2022-09-05'
title: 'Class and Struct'
categories: ['Swift', 'iOS']
summary: 'class 와 struct 의 차이점 및 각각의 쓰임에 따른 활용 속성'
thumbnail: './class.jpeg'
---

## Class vs Struct
---

### Theory

공유와 복사

가장 명확한 차이는 타입의 차이이다. class 는 참조 타입이고 struct 는 기본적으로 값 타입이다. 

이 차이는 메모리 구조상 인스턴스를 생성할 때 어디에서 영역에서 생성되는지에 대한 차이를 가지며, 이 말인 즉슨 생성된 인스턴스의 데이터 독립성에 차이가 있다. 


<br>


**class** 의 인스턴스의 경우 힙 영역에 생성되며, 데이터 영역에 존재하는 class 를 참조하는 형태로 존재 한다. 따라서 class 의 값의 수정이 일어나면, 모든 인스턴스가 데이터 영역의 class 를 참조하기에 모두 값이 수정된다. 

<br>

힙 영역에 저장된다는 것은 저장되는 데이터들은 모두 컴파일 타임이 아닌 런타임에 크기가 결정된다는 말이고, 이는 런타임에 추가적인 연산을 요구한다는 의미입니다. 

또한 참조 타입이기에 ARC 로 메모리 관리를 하게 된다. 


<br>



**struct** 의 경우 인스턴스 생성이 스택영역에 생성되게 되며, 값의 복사를 통해 각각의 인스턴스의 데이터가 독립적으로 존재하게 된다. 따라서 클래스의 수정이 일어나더라도, 이미 생성된 각각의 인스턴스는 독립적으로 존재하게 된다. 

<br>

또한, 스택 영역에 존재하므로, 함수의 동작원리와 마찬가지로 특정 동작(함수)을 수행 후에 사라지게 된다. 따라서 컴파일 타임에 할당할 크기가 결정되기 때문에 메모리를 따로 관리 해주지 않아도 됩니다. 이말인 즉슨 OS 가 새로운 데이터를 할당할 영역을 따로 계산하지 않아도 된다는 것을 의미합니다. 

<br>

→ 따라서 메모리 구조에서 생각해보면, 구조체를 사용하는 것이 메모리 관리 측면에서 클래스에 비해 더 유리하고, 더 빠른 속도를 가지게 됩니다. 

<br>

따라서 **실 구현시 class 를 사용해야하는 이유** 를 고려하여 설계하는 것이 바람직합니다. 

### Practice

실제 Product 구현에서의 위 둘의 차이를 유념해야하는 이유는 메모리 관리의 어려움, 이로 인한 메모리 누수에 있습니다. 

<br>

- Default 로 Struct 를 사용한다. 
다른 언어들과 다르게 swift 에서는 struct 가 class 로 구현 가능한 다양한 요소들을 사용가능하다. ( 연산, 저장 프로퍼티, 프로토콜 채택 등 )
- 상속과 공유 속성을 모델링
일반적으로 상속, 공유 속성을 모델링 할 경우 Class 를 통한 구현을 떠올리게 되지만, swift 에서는 Struct 를 Protocol 과 함께 사용하여 계층 구조를 표현 할 수 있습니다. 
→ class 는 class 끼리만 상속이 가능한 반면, Protocol 은 class, struct, enum 모두 채택할 수 있도록 설계할 수 있습니다.

<br>

**구조체로 구현하지 말아야 할 경우**

- View, ViewController 의 경우에도 공유되는 형태이기 때문에 레퍼런스 접근이 가능하게 구현해야 한다.
- 고유한 값을 제어해야 할 때는 클래스를 사용(SingleTon Pattern)
class 는 참조 타입이기 때문에 고유한 값으로 사용됩니다. 따라서 참조 타입이기에 앱의 여러 곳에서 사용하더라도 한 영역에에서 적용한 수정이 다른 영역에서도 적용되기에, 파일관리, 네트워크 연결과 같은 작업을 다룰 때 class 를 사용합니다.

<br>

## 지연저장 속성

---

### **Theory**

저장 속성은 객체의 초기화시, 각 저장 속성은 반드시 값을 가져야 하기에, 해당 속성이 반드시 처음 부터 초기화가 필요하지 않은 경우에 초기화를 지연시키기 위해 사용한다. 

<br>

인스턴스의 생성시에 초기화되는 것이 아니라, 해당 지연 저장 속성의 값이 할당 될 때 메모리 공간에 올라가게 된다 .

<br>

생성자에서 초기화가 진행되지 않기에, class 에서 property 선언시 반드시 기본값이 필요합니다. 

```swift
class SomeView {
	var a: Int = 0
	lazy var: view: UIImageView()
}
```

### **Practice**

- 상대적으로 많은 메모리 공간을 차지 하는 값(이미지 등)에 초기화를 지연시킴으로, 메모리 공간의 낭비를 막을 수 있다.
- 지연 저장 속성을 통해 선언되는 속성값이 해당 class 내부의 다른 저장 속성을 이용해야 할 때, 즉 다른 property 값에 의존성을 가질 때 사용가능하다. (초기화 시점이 다름을 이용)

<br>

eg. 인스타그램 피드의 경우에서도 여러 사진이 한번에 노출 되는 것이 아닌, pageView 를 통해 구현이 되는데 이 경우에도 하나의 피드가 가지고 있는 여러 사진을 한꺼번에 로드하는 것이 아닌, 다음 페이지로 터치가 일어 났을 때 UIImgaeView 를 그려주는 것이 바람직 할 것 입니다. 문론 사용성을 고려 할 때 2, 3번 째 사진까지는 미리 로드 해놓고 터치가 일어났을 때 이후의 페이지를 로드하는 등의 최적화가 필요할 것 입니다.  

## Singleton Pattern (싱글턴 패턴)

---

### **Theory**

싱글턴 패턴이란 앱이 동작하는 동안 단 하나의 객체만이 존재하게 함으로써 모든 곳에서 접근 가능하게 해주는 패턴입니다. (데이터 공유, 사용자 저장 정보 등)

<br>

즉 싱글턴 패턴을 사용할 객체는 한 번만 생성되어야 하며, 모든 곳에서 접근 가능해야 합니다. 

<br>

장점

- 한번의 Instance 생성을 통한 메모리 낭비 방지 가능
- DB Connection Pool 처럼 공통된 객체가 여러번 생성해야 하는 경우, 싱글턴을 사용해 하나의 객체로 관리가 가능해짐( 캐시, 로그, 사용자 userDefault 등)

<br>

단점

- 메모리에 계속해서 올라가 있기 때문에 꼭 필요한 경우가 아니라면 남용해서는 안된다.
- 전역 객체에 상태가 저장되어 있기에 테스트 순서에 문제가 생겨, 테스트에 용이하지 않을 수 있다.

### Practice

기본적으로 구현 되어 있는 UIkit 에서도 찾아 볼 수 있다.

<br>

특히 UserDefault 의 사용 목적을 떠올리면, singleton pattern 을 사용하는 경우의 이해도가 높아질 것 같다. 

```swift
let screen = UIScreen.main
let userDefault = UserDefaluts.standard
let notification = Notification.default
```

1. static 프로퍼티로 instance 생성

2. init 을 private 를 통해 접근 제어 (선택)
따라서 클래스 내부에서 말고는 객체 생성이 불가능하게 만들어 전체 프로그램 내에서 단 하나의 객체가 존재 

```swift
class DataStorage {
	static let shared = DataStorage()
	private var data = []

	private init() {
		data = []
	}

	private func addData(data: String) {
		self.data.append(data)
	}
}

print(DataStorage.shared.data)
DataStorage.shared.addDate(data: "sharedData1")
print(DataStorage.shared.data)

// []
// ["sharedData1"]
```

reference

[https://babbab2.tistory.com/66](https://babbab2.tistory.com/66)