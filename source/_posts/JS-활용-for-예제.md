---
title: JS 활용 for 예제
date: 2020-07-29 13:08:21
categories:
- 내가 공부한거
- JavaScript
- 활용
---
## for문의 활용을 통한 예제

for의 중첩문과 canvas의 활용을 통해서 원의 n분점을 연결하는 도형을 만들어 보기로 했다. 좀 재미있어 보여서

우선 처음에는 밑과 같이 move와 line을 이용해서 각각 돌렸었는데 

```js
 function diamond(c, n, x, y, r, color) {
        c.strokeStyle = color;
        c.beginPath();
        
        for(let i = 0; i < n; i++){
          let t = i * 2 * Math.PI / n;

          for(let j = i + 1; j < n; j++){
            let s = j * 2 * Math.PI / n;

            c.moveTo(x + r * Math.cos(t), y + r * Math.sin(t));
            c.lineTo(x + r * Math.cos(s), y + r * Math.sin(s));
          }
        }
        c.stroke();
      }

```

예제와 같이 미리 좌표를 설정해 준후 중첩문을 이용하여 돌리는게 더 효율적임을 알게 되었다. 

그래픽 디자인 적인 시선의 예제가 처음에는 흥미롭기만 했는데 그안의 알고리즘을 이해하는 과정 또한 생각보다 깊고 흥미로웠다.

```js
window.onload = function() {
        let canvas = document.getElementById("mycanvas");
        let ctx = canvas.getContext("2d");

        diamond(ctx, 6, 170, 170, 150, 'darkblue');
        diamond(ctx, 12, 500, 170, 150, 'darkblue');
        diamond(ctx, 20, 170, 500, 150, 'darkblue');
      };
      

      function diamond(c, n, x, y, r, color){
          let p = generatePoints(n, x, y, r);

          c.strokeStyle = color;
          c.beginPath();

          for(let i = 0; i < n; i++){
              for(let j = i + 1; j < n; j++){
                  c.moveTo(p[i].x, p[i].y);
                  c.lineTo(p[j].x, p[j].y);
              }
          }
          c.stroke();
      }

      function generatePoints(n, x, y, r) {
          let points = [];

          for(let i = 0; i < n; i++){
              let t = i * 2 * Math.PI / n;

              points[i] = {
                  x: x + r * Math.cos(t),
                  y: y + r * Math.sin(t)
              }
          }
          return points;
      }

```



![diamond](https://user-images.githubusercontent.com/67617819/88758771-38711c00-d1a4-11ea-9502-c8b64c5c39cc.png)

// 이 코드는 모던 자바스크립트 입문(徹底マスターJavaScriptの教科書) 에서 인용한 것입니다.  
// [ISBN #978-4797388640]. Copyright 2017 by 磯博