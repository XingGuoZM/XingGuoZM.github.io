* css实现一个扇形
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>画一个️️扇形</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .sector-wrap {
      width: 100vw;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .sector1 {
      width: 50px;
      height: 50px;
      border-bottom-right-radius: 50px;
      background-color: #110099;
    }

    .sector2 {
      width: 200px;
      height: 100px;
    }

    .sector3 {
      width: 200px;
      height: 100px;
    }
  </style>
</head>

<body>
  <section class="sector-wrap">
    <h1>方法一：border-radius</h1>
    <div class="sector1"></div>
  </section>
  <section class="sector-wrap">
    <h1>方法二：canvas+arc</h1>
    <canvas id="sector2" width='200' height='100'></canvas>
  </section>
  <section class="sector-wrap">
    <h1>方法三：svg+path</h1>
    <svg width='200' height='100'>
      <path xmlns="http://www.w3.org/2000/svg" fill="#110099" d="M 50 50 
      A 50 50 90 0 0 50 -50 
      L 50 50  
      Z" />
    </svg>
  </section>
  <script>
    const drawSector = function () {
      const ctx = document.querySelector('#sector2').getContext('2d');
      ctx.moveTo(50, 50);
      ctx.arc(50, 50, 50, 0, 90 * Math.PI / 180);
      ctx.lineTo(50, 50);
      ctx.fillStyle = '#110099';
      ctx.fill();
    }
    drawSector();

  </script>
</body>

</html>
```
* css实现一个三角形
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>画一个️️三角形</title>
  <style>
    .triangle-sec {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
    }

    .triangle1-wrap {
      width: 50px;
      height: 50px;
      overflow: hidden;
    }

    .triangle1 {
      width: 50px;
      height: 50px;
      background-color: red;
      transform: rotateZ(45deg);
      margin-top: 35px;
    }

    .triangle2 {
      width: 0px;
      height: 0px;
      border-top: solid 50px blue;
      border-bottom: solid 50px transparent;
      border-left: solid 50px transparent;
      border-right: solid 50px transparent;
    }

    .triangle3-wrap {
      width: 100px;
      height: 100px;
      position: relative;
      overflow: hidden;
    }

    .triangle3 {
      width: 50px;
      height: 50px;
      position: absolute;
      background-color: teal;
    }

    .triangle4 {
      width: 50px;
    }

    .triangle5 {
      width: 50px;
      height: 50px;
      background-image: linear-gradient(45deg, #fff 50%, #2980B9 0);
    }

    .triangle6 {
      width: 50px;
      height: 50px;
      position: relative;
      overflow: hidden;
    }

    .triangle6:after {
      content: "";
      width: 50px;
      height: 50px;
      background-color: brown;
      transform: rotate(45deg);
      position: absolute;
      left: 35px;
      top: 0px;
    }

    .triangle7 {
      width: 50px;
      height: 50px;
      background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602140892677&di=754062cafde7897f9550b7691882b17b&imgtype=0&src=http%3A%2F%2Ftrademark-pics-search.oss-cn-shanghai.aliyuncs.com%2Fsmall%2Ft4517751695000576.jpg');
      background-size: 100% 100%;
    }

    .triangle8 {
      font-size: 50px;
      color: darkmagenta;
    }
  </style>
</head>

<body>
  <section class="triangle-sec">
    <h1>方法一: transform rotateZ</h1>
    <div class='triangle1-wrap'>
      <div class='triangle1'></div>
    </div>
  </section>
  <section class="triangle-sec">
    <h1>方法二:border</h1>
    <div class='triangle2'></div>
  </section>
  <section class="triangle-sec">
    <h1>方法三:canvas</h1>
    <canvas id='triangle3' width='50' height='50'></canvas>
  </section>
  <section class="triangle-sec">
    <h1>方法四:svg</h1>
    <svg class="triangle4">
      <path name="三角形" fill="green" d="M50 0 L0 50 L50 50  Z" />
    </svg>
  </section>
  <section class="triangle-sec">
    <h1>方法五:渐变</h1>
    <div class="triangle5"></div>
  </section>
  <section class="triangle-sec">
    <h1>方法六:伪类</h1>
    <div class="triangle6"></div>
  </section>

  <section class="triangle-sec">
    <h1>方法七:background-image</h1>
    <div class="triangle7"></div>
  </section>

  <section class="triangle-sec">
    <h1>方法八:字体icon</h1>
    <div class="triangle8">▲</div>
  </section>

  <script>
    const triangle = document.getElementById('triangle3');
    const ctx = triangle.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(0, 50);
    ctx.lineTo(50, 50);
    ctx.fillStyle = 'aqua';
    ctx.fill(); 
  </script>
</body>

</html>
```
* css实现一个水波纹效果
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>实现水波纹</title>
  <style>
    .wave-wrap {
      width: 500px;
      height: 500px;
      border-radius: 50%;
      position: relative;
    }

    .wave {
      width: 500px;
      height: 500px;
      border-radius: 50%;
      opacity: 0;
      position: absolute;
      animation: waveAnim 4s infinite;
    }

    .w1 {
      background-color: gold;
      animation-delay: 0s;
    }

    .w2 {
      background-color: green;
      animation-delay: 1s;
    }

    .w3 {
      background-color: red;
      animation-delay: 2s;
    }

    .w4 {
      background-color: blue;
      animation-delay: 3s;
    }

    @-webkit-keyframes waveAnim {
      from {
        opacity: 1;
        width: 0;
        height: 0;
        top: 50%;
        left: 50%;
      }

      to {
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  </style>
</head>

<body>
  <div class='wave-wrap'>
    <div class='wave w1'></div>
    <div class='wave w2'></div>
    <div class='wave w3'></div>
    <div class='wave w4'></div>
  </div>
</body>

</html>
```
* 动手实现一个左右固定100px，中间自适应的三列布局？(至少三种)
```html
<html>

<head>
  <meta charset="utf-8" />
  <title>实现三列布局</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .m {
      width: 100vw;
      height: 200px;
    }

    .m1 {
      display: flex;
    }

    .m1>.left {
      width: 100px;
      height: 100%;
      background-color: red;
    }

    .m1>.middle {
      width: calc(100% - 200px);
      background-color: green;
    }

    .m1>.right {
      width: 100px;
      height: 100%;
      background-color: red;
    }

    .m2 {
      position: relative;
      margin-top: 20px;
    }

    .m2>.left {
      width: 100px;
      height: 100%;
      background-color: red;
      position: absolute;
      left: 0;
      top: 0;
    }

    .m2>.middle {
      width: calc(100% - 200px);
      height: 100%;
      background-color: green;
      position: absolute;
      left: 100px;
    }

    .m2>.right {
      width: 100px;
      height: 100%;
      background-color: red;
      position: absolute;
      right: 0;
    }

    .m3 {
      margin-top: 20px;
    }

    .m3>.left {
      width: 100px;
      height: 100%;
      background-color: red;
      float: left;
    }

    .m3>.middle {
      width: calc(100% - 200px);
      height: 100%;
      background-color: green;
      float: left;
    }

    .m3>.right {
      width: 100px;
      height: 100%;
      background-color: red;
      float: left;
    }
  </style>
</head>

<body>
  <section class='m m1'>
    <div class='left'></div>
    <div class='middle'></div>
    <div class='right'></div>
  </section>

  <section class='m m2'>
    <div class='left'></div>
    <div class='middle'></div>
    <div class='right'></div>
  </section>
  <section class='m m3'>
    <div class='left'></div>
    <div class='middle'></div>
    <div class='right'></div>
  </section>
</body>

</html>
```
* 屏幕占满和未占满的情况下，使 footer 固定在底部，尽量多种方法
```html
<html>

<head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .main {
      min-height: 100%;
      padding-bottom: 50px;
      box-sizing: border-box;
    }

    .content {
      width: 100%;
      height: 500px;
      background-color: lightblue;
    }

    footer {
      width: 100vw;
      height: 50px;
      background-color: green;
      margin-top: -50px;
    }
  </style>
</head>

<body>
  <div class='main'>
    <div class='content'></div>

  </div>
  <footer></footer>
</body>

</html>
```
* css 实现多列等高布局，要求元素实际占用的高度以多列中较高的为准
* 怎样用 css 实现一个弹幕的效果，动手实现一下