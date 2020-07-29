---
title: HTML header 구조틀 잡는 흐름
date: 2020-07-09 12:42:14
categories:
- 내가 공부한거
- HTML
---
기본적으로 틀을 잡는 흐름을 파악하는게 처음에는 어려워서 섹터를 작성하는 흐름을 정리함으로서 이런식으로 html 코드의 작성 흐름이 된다를 정리해 보겠다.

<img src = /img/guthub_clone_page.jpg>

<!--more-->
페이지의 header  즉

<img src = /img/guthub_clone_page_header_structure.jpg>

부분을 작성하는 흐름을 잡는 방식의 html 작성만으로 하면 

<img src=/img/html_example_result.jpg>

의 구조만이 남게 되지만 전의 정리 내용에서 말했듯 html 의 의미는 구조의 속성이름과 역활의 표시가 중요하기 때문에 html 로써 웹의 구조를 잡는 다는 것 div등을 사용하여 **구조를 쌓는다** 는 과정이 중요하다.

위의 내용의 코드는

```
<body>
    <div class="header">
        <div class="container">
            <div class="container-left">
                <div class="logo">
                </div>
                <div class="menu">
                    <div class="menu-item">Personal</div>
                    <div class="menu-item">Open source</div>
                    <div class="menu-item">Business</div>
                    <div class="menu-item">Explore</div>
                </div>
            </div>
        </div>
    </div>
</body>
```

와 같이 정리 되는데 신경 써야할 부분들이

* 들여쓰기를 통한 상속관계 표시
가시적으로 구조적 포함 관계가 어떻게 형성되어 있는지를 코드로써 확인 할 수 있게 신경 써야 한다.


* div class
div의 class를 상세히 적음 으로서 나만 알 수 있는 구조가 아니라 누가 읽어도 이런 구조의 이런 역활임을 확인 할 수 있게 가급적 상셰히 적어 두어야 한다.


위의 내용 처럼 div를 너무 사용하게 되면 의미가 옅어질 수 있기에 html5 이후로는 의미를 가지는 태그들이 등장하여 브라우저 보조기기들이 의미를 파악할 수 있게 되었기에 의미의 태그를 익힐 필요가 있다.

ex)
```
<div class = “header”>

=>

<header>
```