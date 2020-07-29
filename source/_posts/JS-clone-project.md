---
title: JS clone  project
date: 2020-07-28 12:56:53
categories:
- 내가 만든거
- JavaScript
---
js에서 간단한 DOM의 사용을 공부했다. `new Date()`를 통해 활용해 볼 수 있는 것 을 찾아보다가 online tutorial에서 디자인을 가져와서 시계를 구현 해 보았다. 
<!--more-->
<br>



```js
<script>
        window.onload = function(){

            const deg = 6;

            const hr = document.querySelector('#hr');
            const mn = document.querySelector('#mn');
            const sc = document.querySelector('#sc');

            setInterval(() => {
                
                let day = new Date();
                let hh = day.getHours() * 30;
                let mm = day.getMinutes() * deg;
                let ss = day.getSeconds() * deg;

                hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
                mn.style.transform = `rotateZ(${mm}deg)`;
                sc.style.transform = `rotateZ(${ss}deg)`;
            })  
        }
    </script>

```

window 객체와 DOM 객체를 불어오는 과정을 활용해 보고 싶었다. 
로직은 간단한데 디자인이 너무 이뻣던것 같다ㅋㅋㅋ.  

<img  alt="clock" src="https://user-images.githubusercontent.com/67617819/88617814-84539080-d0d2-11ea-9c32-b6b3a3b3910c.png">



