---
title: 'C# project-data-read '
date: 2020-07-14 15:02:29
categories:
- 내가 만든거
- C#
---

뜬금없이 C#이라 그냥 넘어 갈까 하다가, datbase를 경험해보고 mysql과 또 맥이라서 어쩔 수 없이(?) 경험하게 된 터미널의 이해와 node js 사용 경험이 값져서 정리해 보겠습니당. 사실 그저 프로그래밍 언어의 습득 보다는 하나의 프로젝트라고 하기는 거창하지만 기능의 구현 단계가 너무나도 중요하고 좋은 경험 이었던 것 같다. mvc라는 개발 패턴의 경험도 그러하고 그저 언어의 for문을 이용한 구구단의 출력보다, 훨씬 하나하나의 과정이 힘들지만 값졌다. 
<!--more-->
 mariadb 설치 부터 너무 고생했어서 화도 나고 했지만 뭔가 해놓고 나니까 DB의 접근과 입력이나 sql을 다뤄본 경험이 생각보다 값진것 같다는 생각에 다행이었다. 

 우선 프로젝트의 최종적인 목표

 * 데이터베이스에 입력된 내용의 출력과 수정, 삭제의 웹폼

<br>

 을 위한 과정은 이러 했습니다. 프로젝트의 흐름을 정리 하기 위해 data read 의 과정을 밑의 순서로 정리해 보겠습니다.

1. mariadb의 설치와 sql을 통한 데이터의 입력

1. C# visual studio 를 이용한 mvc 패턴의 이해

1. web form에서의 html을 이용한 화면의 구성

1. Controller의 역활

1. C# 을 이용한 db연결과 db에 쿼리문을 작성해 데이터의 내용 추출 

1. Data의 화면 배치

1. 프로젝트의 느낀점

<br>

### 1. Mariadb의 설치와 sql을 통한 데이터의 입력

1. insert 구문의 이해와 실행 화면

* 데이터 삽입의 2가지 방법

1.
```sql
insert into 테이블명(column_list)
values(colum_list에 넣을 value_list);
```

이 방식의 데이터 삽입은 입력할 데이터의 컬럼명과 입력 할 값을 일 대일로 매핑하여 입력한다. 테이블 명 뒤에 () 안에 입력할 테이블의 컬럼을 정의하며, 컬럼의 순서는 테이블의 실제 컬럼 순서와 매치될 필요는 없다. 여기서 정의 하지 않은 컬럼은 데이터 삽입 시에 null이 입력된다. 

2.
```sql
insert into 테이블명
values(전체 column에 넣을 value_list);
```
이 방식은 모든 컬럼에 데이터를 입력하는 경우로 굳이 컬럼 요소들을 입력하지 않아도 되지만, 컬럼의 순서대로 모든 데이터가 입력되어야 한다.

cf)
2번째 방식의 경우 모든 컬럼을 입력하지 않아도 되지만, 컬럼의 추가와 같은 데이터의 변경이 있을 때 쿼리에서 에러가 발생한다.
그렇기 때문에 테이블에 컬럼이 많아지고 모든 컬럼에 데이터를 입력한다고 하더라도,첫번째방식으로 사용하는게 선호된다. 

<br>

2. select 구문의 이해와 실행 화면

*기본 형식
select[열] from[테이블] where[조건]
 
주로 사용하는 테이블을 조회 시 사용하는 문장입니다. (전체 열의 조회 시 * 입력)

* order by 문
select * from 테이블 [where 조건] order by 열 asc || desc

테이블에 있는 조건에 충족하는 열들을 가져와 order by에 지정된 열을 기준으로 정렬된다.


<br>

3. delete 와 nochool

데이터의 삭제의 경우 쿼리에서 delete문이 있지만 사실상 데이터의 삭제는 굉장이 조심히 다뤄야 할 문제 이기 때문에 nochool 값의 update를 통해서 데이터의 보여짐을 조절하는 것이 바람직하다. 따라서 delete 문 보다는 nochool 의 update 를 통해서 data의 삭제를 구현했다. 

<br>

###  MVC패턴

Model-View-Controller 로의 개발 단계로 나눈 패턴은 그저 보여지는 부분의 코딩에서는 필요성을 정확하게 느낄 수는 없었지만 db를 다루고 db와의 접근을 view 단의 수정을 해 볼 때 model 과 view 의 분리가 필요함을 절실하게 느낄 수 있었습니다. 

자세한건 '내가 공부한거' 에서 정리 하고 여기서는 개발의 플로우만 정리하겠습니다. 


1. 데이터베이스의 연결 세팅을 해준다.

1. view 단의 생성과 필요한 정보가 무엇임을 파악한다.

1. controller를 이용하여 보여질 뷰와 뿌려질 데이터를 model 단에서 가져온다.

1. model에서 DAO, DTO를 이용하여 controller에 전할 할 데이터를 정리해 주는 함수의 작성을 한다.

<br>

### 3. Web form에서의 html을 이용한 화면의 구성(View)

화면의 구성에 초점보다는 db와의 연결을 통해 데이터의 입출력에 초점이 있었기에 많은 것을 건들이지는 않았지만 html에서 사용되는 `li`나 `div` 말고 `<form>`과
`action`, `table`등의 서버와의 연결의 속성들이 어떻게 구현이 되고 사용되는 지를  알아봄에 의미가 있었습니다. 

rayout단에서 간단하게 목록을 추가해주었습니다. 

화면 구성은 이렇게 하고 member목록의 클릭시에 데이터의 read 를 통해 nochool 값이 '1'인 데이터의 출력을 구현 했습니다. Controller를 이용하여 Model의 selectAllMember 메서드를 불러와서 불러온 data_list를 Member 창에 연결해 주었습니다.

```html
<li class="nav-item">
    <a class="nav-link text-dark" asp-area="" asp-controller="Member" asp-action="Member">Member</a>
</li>
```

<br>

### 4. Controller의 역할

DB와의 연결을 View와 분리 시키기위한 역할 로써 Model에서의 data_read 과정 method를 불러와 Member 창에 연결 시켜 주었습니다. 
```C#
public IActionResult Member()
        {
            DaoMember dao = new DaoMember(_db);
            //db conn을 파라미터로 전달하기 위한 dao 생성자 호출

            return View(dao.SelectAllMember());
        }
```

<br>

### 5. C# 을 이용한 db연결과 db에 쿼리문을 작성해 데이터의 내용 추출(Model)

Model애서는 db에 접속하여 쿼리문 command를 입력해서 select 문을 이용하여 nochool 값인 data_list를 불러오는 코드를 짜준다.
데이터가 하나가 아니기에 list를 활용하여 데이터들을 담아 return해 준다.

```C#
public List<DtoMember> SelectAllMember()
        {
            List<DtoMember> lst = new List<DtoMember>();
            //모든 데이터의 입력이기 때문에 list로서의 dtomember들 반환


            using(MySqlConnection conn = _DB.Connection)
                //윈폼과는 다른 conn 연결 과정
            {
                 conn.Open();
                
                MySqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "select *  from tb_member where nochool = 1";
                //db의 데이터들을 모두 받아오기 위한 cmd 작성 과정

                MySqlDataReader reader = cmd.ExecuteReader();
                //db의 데이터를 읽기위한 reader 객체 형성

                while(reader.Read())
                {
                    Console.WriteLine("================");
                    Console.WriteLine("{0} | {1} | {2} | {3} | {4} | {5} | {6} | {7}",
                        reader["id"].ToString(),
                        reader["title"].ToString(),
                        reader["author"].ToString(),
                        reader["e_mail"].ToString(),
                        reader["cnt"].ToString(),
                        reader["date"].ToString(),
                        reader["password"].ToString(),
                        reader["content"].ToString()
                        );
                    //컨솔 창에 정보 띄우기

                    DtoMember member = new DtoMember(
                        reader["id"].ToString(),
                        reader["title"].ToString(),
                        reader["author"].ToString(),
                        reader["e_mail"].ToString(),
                        Int32.Parse(reader["cnt"].ToString()),
                        reader["date"].ToString(),
                        reader["password"].ToString(),
                        reader["content"].ToString());
                    //이 프로젝트에서 사용할 수 있는 데이터로의 transfer을 위한 dto 생성자 호출

                    lst.Add(member);
                    //다수의 데이터 라인이기 때문에 list 로써의 할당
                }
                reader.Close();
                //리더가 계속 열러 있을경우 오류가 발생하기 때문에 닫아줘야함
            }
            return lst;
        }

```

### 6. Data의 화면 배치(View)

```html
<div class="text-center">
        <h1 class="display-4">Member</h1>


        <p>
            <button class="btn-light"><a asp-action="NewMember">NewMember</a></button>
        </p>
        <!--새로운 데이터 형성 버튼-->

        <table class="table">
            <tr>
                <th>id</th>
                <th>title</th>
                <th>author</th>
                <th>e_mail</th>
                <th>cnt</th>
                <th>date</th>
                <th>password</th>
                <th>content</th>
                <!--th = 테이블의 제목들에 해당하는 태그-->
            </tr>

            @foreach (var member in Model)
                //cshtml안에서 함수를 사용하기 위한 문법
                //Model에 들어온 list들 중 member 빼오기 위한 코 
            {
                <tr>
                    <td>
                        <label>@member.id</label>
                    </td>
                    <td>
                        <label>@member.title</label>
                    </td>
                    <td>
                        <label>@member.author</label>
                    </td>
                    <td>
                        <label>@member.e_mail</label>
                    </td>
                    <td>
                        <label>@member.cnt</label>
                    </td>
                    <td>
                        <label>@member.date</label>
                    </td>
                    <td>
                        <label>@member.password</label>
                    </td>
                    <td>
                        <label>@member.content</label>
                    </td>
                    <td>
                        <button class="btn-light" value="Edit" onclick="location.href = '@(Url.Action("EditMember", "Member", new { id = member.id }))'">
                            Edit
                        </button>
                        <!--마우스 클릭시 Editmember로 보내주는 이벤트 함
                            , id 값의 전달-->
                    </td>
                    <!-- td = 테이블 열의 요소들에 해당하는 태그-->
                </tr>
            }
        </table>
 </div>
```
 

<br>

### 최종적인 결과물

![C#_Read_view](https://user-images.githubusercontent.com/67617819/87443710-cb507900-c630-11ea-834d-77c23cafec18.jpg)
