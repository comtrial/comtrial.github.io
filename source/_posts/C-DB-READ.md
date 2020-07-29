---
title: C# DB READ
date: 2020-07-07 09:05:25
categories:
- 내가 공부한거
- C#
---

구현한 프로젝트 중에서 모든 것을 다루진 않고 member 창을 켰을때 DB의 모든 내용을 화면에 표시해 주는 기능의 정리를 해보겠다.
<br>

기능의 흐름을 보자면 상단의 member 항목을 클릭시 member에 해당하는 view 창을 띄우고 DB에서 모든 데이터들을 리스트로써 받아와서 controller로 연결해주어 member 창에 뿌려지게 된다.
<br>
<!--more-->
대략적인 순서는 이렇게 된다.


1. 상단바의 member 를 클릭시, memberController에 연결 시켜준다.

1. model 에서 모든 데이터를 받아오는 코드를 작성해 준다.

1. memberController에서 model에서 작성된 함수를 이용하여 member view에 전달해 준다.

<br>

이 각각의 흐름에 해당하는 코드는 이렇다.

1. 
```
<li class="nav-item">
     <a class="nav-link text-dark" asp-area="" asp-controller="Member" asp-action="Member">Member</a>
</li>
```
asp-controller를 통해 member controller에 전달하게 되고 asp-action을 통해 member 함수를 실행하게 된다.

1. 
```
public IActionResult Member()
        {
            DaoMember dao = new DaoMember(_db);
            //db conn을 파라미터로 전달하기 위한 dao 생성자 호출

            return View(dao.SelectAllMember());
        }
```
연결 시켜줄 view에 모든 db의 데이터를 전달하기 위해서 model의 dao를 이용하여 selectAllmember 함수를 작성해 준다.

1. 
```
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
dao에선 db에 connection 하여 select * 쿼리 문을 작성해주어서 nochool 값이 1인 모든 데이터를 reader를 통해 읽어들어와 dto를 통해 반환 후 listmember 로서 받아오는 것 이다.
<br>

cf) nochool 값이 있는 이유는 db에서의 데이터 값의 삭제등은 좀 위험한 일이기 때문에 delete문을 작성하는 것 보다. update문을 이용하여 nochool 값을 변경해주는 식으로 data 를 다루는 것이 유의해야할 부분인 것 같다.
<br>

DATA의 READ 과정만을 정리 했지만 사실 모든 기능의 흐름이 이러하다. view에 무엇을 띄우고 싶고, 그 띄우고 싶은 정보들의 data 가 무엇인지를 파악하여 controller 에서 어떤 data를 가져와서 어떤 view에 연결할 것인지를 파악후, model에서 data의 접근의 코드를 작성해 주면 되는 것 이다.



