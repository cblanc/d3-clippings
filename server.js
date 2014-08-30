var koa = require("koa");
var serve = require("koa-static");

var app = koa();

app.use(serve(__dirname));

app.listen(3000);

console.log("Listening on port 3000");