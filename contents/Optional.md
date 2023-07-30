---
date: '2020-07-29'
title: 'Optional'
categories: ['iOS']
summary: '홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자.'
thumbnail: './assets/default_thumnail.png'
---



### Overview

모든 개발에서 통용되는 개념이겠지만, 클라이언트 소프트웨어를 설게하는 목적으로서의 swift programming , 즉 *이벤트 주도 개발* 에서 올바르지 못한 혹은 실패한 행동에 대한 예외처리는 무척이나 중요하다. 

![Image](./assets/9129f96cbba3f187cf058395dc6b5c76.gif "image")

다양한 예외처리 중 하나의 방법은 올바르지 못한 행동에 대해서도 기본적으로 제공되는 **Defalt** 값을 설정 해 놓는 것이다. 이를 구현하기 위해 swift 는 Optional 을 제공한다. 

즉 Optional type 은 정상적인 값, nil( 여타의 언어의 None 과 같은 상태 값 ) 2가지 경우를 열거할 수 있는 것이다. 

```
let number: Int? = Optional.some(42)
let noNumber: Int? = Optional.none

print(noNumber == nil)
// Prints "true"
```


이처럼 두가지 타입을 가지는 Optional instance 를 사용하기 위해선, unwrapping 하여 사용해야 한다. 
unwrap 하는 방법은 다양한데, 상황에 따라 다르게 unwrap 하여 사용하면 된다. 



### How to use

#### Using the Nil-calescing Operator(??)

해당 방법은 Optional 의 목적 자체와 연관지어 생각하기에 알맞다. 
?? 연산자를 이용해, Optional 값이 nil 일 경우 ( 행동이 잘못되거나, 아무튼 뭔가 잘 못 되었을 때... 이미지가 없엉... 이미지 저장해논 서버가 주거썽.. 등등) Defalut 값으로 대체하는 방법이다. 
`??` 뒤에 Default 값을 설정함으로써 사용가능하다. 

```swift
let imagePaths = [
	"post1": "s3::/images/post1.png", 
	
	"post2": "s3::somthing_wrong_db/images/post2.png", 
	// 디비에 문제가 있어 정상적인 로드가 불가능한 이미지
	
	"post3": "/images/content/post3.jpg", 
	// 혼자 jpg 야...
] 
```


위와 같이 다양한 상태의 이미지 경로가 있다고 할 때, 인스타 처럼 피드 형태로 이미지를 보여 줄 경우 각각 이미지 상황에 따라 정상적인 로드가 안될 경우 처리( Defalt 값 ) 를 해줘야 한다. 


```
let defaultImagePath = "/images/정상적이지_못해_사과문.png"

let UnexistPostImagePath = imagePaths["post4"] ?? defaultImagePath
print(UnexistPOstImagePath)
// Prints "/images/정상적이지_못해_사과문.png"
```

위와 같이 존재 하지 않는 이미지 (post4) 에 접근하게 될 경우 `??` 연산자 뒤에 할당한 Default 값을 통해 올바르지 못한 행동에 대해,  정상적으로 사과(?) 를 할 수 있게 된다. 

다음과 같이 여러개 의 Default 값을 줄 수도 있다. 

```
let UnexistPostImagePath = imagePaths["post4"] ?? imagePaths["이거라도.."] defaultImagePath
```

![고승덕 '미안하다' 사건 후 공개된 근황 (+사진) : 네이버 포스트](https://post-phinf.pstatic.net/MjAxOTA3MTBfMjkw/MDAxNTYyNzM2MTgzMTA4.Au-v2JGq2T3gO4O4hhikbLbPjCebWJZ_vve78gsHpjYg.hGeImnYqnIzsSzKMf7vAuKLx8akLsfzEPA1Ywf-QvcEg.JPEG/B3u1QJfCMAIDijW.jpg?type=w1200){: width=100% height=100%){: .center}



#### Optioanl Binding

다음으로는 Optional 을 Conditional 한 방법으로 Optional instance 값이 정상적인 경우( if ) 와  nil 일 경우 ( else ) 를 수행하는 블록을 만들어 처리하는 방법이다. 

```

// MARK: 1. nil 인지 아닌지 확인하여 들어가기
if imagePaths["post1"] != nil {
	// postImage가 정상적일 경우의 블록
} 



// MARK: 2. 할당 하면서 들어가기
if let postImage = imagePaths["없는_이미지"] {
	/// 아싸 성공일 때의 블록
} else {
	// 잘 못 됬을 경우의 사과문..
	print("Couldn't find the image...")
}
// Couldn't find the image...
```



#### Unconditioanl Unwrapping

후에 경험을 통해 필요할 상황이 있구나 느낄 수 도 있지만, 해당 구현 방식을 Optional 의 취지에 조금은 벗어 난다고 생각한다. (형 누나들...맞나여..? )

`!` 을 통해 Optioal 을 강제로 벗겨내는 방법으로

```
let dict1: [String: Int] = ["A": 0, "B": 1, "C": 2]

let aValue = dict1["A"]
print(aValue)
// Optional(0)

let aValue = dict1["A"]!
print(aValue)
// 0
```

`!` 을 통해 Optional instance 가  nil 이 아니라고 단언하여, 사용하는 것인데 nil 일 경우(? 단언한다며..) 프로세스가 죽어 버린다. 

nil 이 정말 아니여야 하는 프로세스 ( nil 일 경우 죽는게 낫다 ) 에 사용하여야 하나 싶지만, 해당 경우 더 우아한 예외처리가 있을 것이다. 


> 부족한 글 읽어주셔서 진심으로 감사드리며, 잘못된 부분이나 개선점은 무심하게 라도 알려주시면 계신 방향으로 감사인사 드리겠습니다.


reference
https://developer.apple.com/documentation/swift/optional
https://dblog.tech/17
https://www.programiz.com/swift-programming/optionals