使用koa写一个http服务器
```js
const Koa = require('koa');
const route = require('koa-route');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const home = serve(path.join(__dirname), '/public/');

const res = ctx => {
  ctx.response.body = '<h1>hello Koa</h1>';
}

app.use(home);
app.use(route.get('/', res));

app.listen(3000);
```

### koa与洋葱模型