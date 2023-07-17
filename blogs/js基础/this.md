# this

### 关键词
- TC39

### 执行上下文对象
指向函数执行时所在的上下文对象，箭头函数（表达式）除外，它直接指向函数定义时所在的上下文对象。

普通对象（无论多少层级）、普通函数调用，this指向全局
```js
const obj = {a:this}
obj.a // window

const fn = function (){ return this }
fn() // window
```

### this指向的4种情况
1. 普通函数调用
2. 对象方法调用
3. new 构造函数
4. call、apply和bind

### 对象方法调用
```js
var x = 1;

var obj = {
  x: 3,
  fun: function () {
    var x = 5;
    return this.x;
  }
};

var fun = obj.fun;
console.log(obj.fun(), fun());
```

```js
var obj = {
  name: "zhangsan",
  sayName: function () {
    console.info(this.name);
  }
}

var wfunc = obj.sayName;
obj.sayName();
wfunc();
var name = "lisi";
obj.sayName();
wfunc();
```

```js
var name = 'test'
var a = {
  name: 'ass',
  getName: function () {
    return this.name;
  }
}
var b = a.getName;
b();
```
### 构造函数调用（new）
```js
var a = 5;
function test () {
  a = 0;
  console.log(a);
  console.log(this.a);
  var a;
  console.log(a);
}
new test();
```
```js
const Person = (name = "wang", age = 10) => {
  this.name = name;
  this.age = age;
  return this.name + ' is ' + this.age + 'years old'
}
let result = new Person('zhang', 11)
console.log(result)
```
```js
var person = {
  age: 18,
  getAge: function () {
    return this.age;
  }
};
var getAge = person.getAge
getAge()
```
### call调用
```js
function fun () {
  return () => {
    return () => {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var f = fun.call({ name: 'foo' })
var t1 = f.call({ name: 'bar' })()()
var t2 = f().call({ name: 'baz' })()
var t3 = f()().call({ name: 'qux' })
```
### 箭头函数调用
```js
let obj1 = {
  a: 1,
  foo: () => {
    console.log(this.a)
  }
}
obj1.foo()
const obj2 = obj1.foo
obj2()
```

### 异步回调
```js
var name = 'global';

var obj = {
  name: 'local',
  foo: function () {
    this.name = 'foo';
  }.bind(window)
};

var bar = new obj.foo();
setTimeout(function () {
  console.log(window.name);
}, 0);
console.log(bar.name);

var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);
```
