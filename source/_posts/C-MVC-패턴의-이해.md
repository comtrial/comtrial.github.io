---
title: C# MVC 패턴의 이해
date: 2020-07-02 10:58:46
categories: 
- 내가 공부한거
- C#
---



데이터베이스의 정보들의 웹상의 출력과 수정의 과정을 c#에서 제공하는 mvc패턴 웹어플리케이션 템플릿을 이용하여 구현하는 과정을 정리해 볼께염. 

한 학기만에 c#의 기본 문법과 클래스의 개념들을 조금은 빠른 호흡으로 익혔기 때문에 과정 속의 세세한 개념들의 빠삭한 이해는 부족하지만 전체적인 웹/앱 어플리케니션, 소프트웨어의 개발 과정의 흐름을 이해하는 곳에 초점이 맞춰졌습니당. 

미흡한 부분이 많아서 정보의 정확성이 떨어질 수 있을 것 같아서 걱정이다.
<!--more-->




## MVC 패턴이란 
 그저 보여지는 부분을 코딩하고 보여지는 부분의 컨트롤이라면 필요성을 잘 못 느꼈을 수도 있었겠지만,
데이터 베이스를 다뤄보고 데이터의 접근에 해당되는 로직들과 가져온 데이터를 뿌리는 로직의 분리가 필요함은 처음에 마구잡이로 코딩해 본후 내 코드를 보았을 때 그냥 자연스럽게 알 수 있었다 ㅋㅋㅋ


그 전의 클래스의 개념에 대해서도 공부했을때 주워 들은것들은 많아서 객체지향 이라는 것이 중요함은 알았지만,내가 짜는 코드가 1,2,3,4를 출력하고 5일때 break가 되는 코드를 짤 때는 알기가 힘들었다.
 

 알아야하는 개념의 크기가 너무 방대해서 알아야 한다니까 공부하지만 스스로 느끼며 이래서 필요하구나 라는 결핍을 느껴가며 공부하는 것이 필요하긴 하다. 
 

 하지만 좀 모순적이게도 방대한 개념앞에서 무엇하나 하기가 겁나는 것도 사실인 것 같다. 뭐라도 손으로 짜고, 눈앞의 닥친것을 생각을 덜어가며 공부하는 것이 제일 바람직하겠지만 참 행동이 어려운 것도 사실인 것 같다. 아무튼
  

 * M : Model 
 어플리케이션의 데이터 부분의 관리에 해당되는 부분이다.

 * V : View
 어플리케이션의 보여지는 부분에 관한 부분이에 관한 부분이다.

 * C : Controller
 데이터와 보여지는 부분을 연결해주고 분리시켜주고 연결시켜주는 부분이다.

 
 주로 정리할 내용은 M 에 관한 내용이다. 내가 공부했을때 낯설기도, 이해는 되지만 실행의 과정이 조금은 어려웠기에 초점을 맞추어 정리 할께여.





## M : model에 관하여
데이터의 접근을 나눠줘야 함은 알았지만 view는 뭐 직관적으로 조금은 이해가 갔지만 model의 개념이 정확히 처음부터 잡히지는 않았던것 같다. 

내가 한 project에서 model은 DAO와 DTO로 분리가 되었다. 



* DTO(Data Transfer Object)
 문자의 이해만으로도 개념을 훔쳐 볼수 있다. 문자대로 데이터의 변환의 객체이다. 
 
 데이터베이스에서 데이터들을 가져올때 데이터의 형태가 우리가 사용하는 코드에서 가용 가능한 상태로 배달되는 건 아니기때문에, 받아온 데이터의 가용가능한 상태로의 변환을 해주는 객체가 바로 DTO이다.

 ```
    //DB에 접근하여 가져온 데이터들을 프로젝트 내에서 가용가능한
    //    데이터로 반환 해주는 Data Transfer Object

    public class DtoMember
    {
        public String id;
        public String title;
        public String author;
        public String e_mail;
        public int cnt;
        public String date;
        public String password;
        public String content;
        public int nochool;

        public DtoMember(
           String id,
           String title,
           String author,
           String e_mail,
              int cnt,
           String date,
           String password,
           String content,
              int nochool
           )
        {
            this.id = id;
            this.title = title;
            this.author = author;
            this.e_mail = e_mail;
            this.cnt = cnt;
            this.date = date;
            this.password = password;
            this.content = content;
            this.nochool = nochool;
        }
        //모든 데이터의 반환
    }     
}         
                  
 ```
 


* DAO(Data Access Object)

문자대로 데이터의 접근에 관한 내용이다. 데이터베이스의 접속과정과 접속하여 읽어오고 닫아주고, 특정 조건의 데이터만을 받아오고 해주는 모든 과정의 데이터 단의 접근을 해주는 객체이다.




위의 과정 속에서 view 단에 접근은 없는것이 중요하다. 하여 나중에 유지보수 view의 업데이트 과정이나 시즌별 view의 작업시에 데이터의 접근은 분리 되어있기 때문에 논리적으로 건드려지거나 하는 부분이 없어져 용이하다. 

이러한 이유 때문에 프론트엔드 직군 시선으로의 mvc 패턴의 이해와, 어떻게 효율적으로 model 에서 데이터를 받아 오는가와, view와의 효율적인 분리의 이해가 필요할것 같다. 



