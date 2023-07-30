// const Koa = require('koa');

// const app = new Koa();

// const route = require('koa-route');

// const serve = require('koa-static');

// const path = require('path');

// const home = serve(path.join(__dirname), '/public/');

// const hello = ctx => {
//   ctx.response.body = '<h1>hello Koa</h1>';
// }

// app.use(home);
// app.use(route.get('/', hello));

// app.listen(3000);

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST' && req.url === '/users') {
//     res.end(JSON.stringify({ data: { "status": 200, "message": "Hello World!" } }))
//   } else {
//     res.end(JSON.stringify({ "status": 400, "message": "request error" }))
//   }
// });

// server.listen(3000);