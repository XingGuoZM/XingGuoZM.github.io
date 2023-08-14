# Typescript面试题
* 在TypeScript中tsconfig.json有什么作用？
* 在TypeScript中说说你对声明合并的理解
* 在TypeScript中as语法是什么？
* 在TypeScript中枚举和常量枚举有什么区别？
* 在TypeScript中如何实现继承？
* 如何将多个ts文件合并为一个js文件？
* 在TypeScript支持静态类吗？为什么？
* 在TypeScript中控制成员可见性有哪些方法？
* 在TypeScript中如何创建对象？
* 在TypeScript中如何定义和使用泛型？
* 在TypeScript中如何创建和使用装饰器？
* 什么是TypeScript接口？
* 在TypeScript中如何与其他工具和库集成？
* 在TypeScript中的lambda函数是什么？
* 在Typescript中如何将字符串转换为数字？
* 在TypeScript中如何访问模块外定义的类？
* 在TypeScript中的getter/setter是什么？有什么作用？
* 在TypeScript中支持哪些JSX模式？
* 在TypeScript中如何让接口的所有属性都可选？
* 在TypeScript中如何从子类调用基类构造函数？
* 在TypeScript中有哪些三斜杠指令？
* 在TypeScript中是如何检查null和undefined的？
* 在TypeScript中如何创建变量？
* 在TypeScript中解释下rest参数的作用及规则
* 你是如何编译TypeScript的文件？
* 请说说在TypeScript中什么是联合类型？
```
所谓“联合类型”其实就是多种类型的联合，也就是不仅仅一种类型。联合类型（Union Types）可以通过管道(|)给变量设置多种类型，赋值时可以根据设置的类型来赋值
```
* 请说说在TypeScript中什么是交叉类型？
```
所谓“交叉类型”通过&符号将多个类型进行合并成一个类型
原子类型进行合并是never，是没有意义的。例如number & string，不可能有既满足字符串又满足数字类型。
合并的接口类型中具有同名属性，如果同名的属性类型相同则合并之后还是原本的类型，如果不同合并之后为never。

```
* 在TypeScript中是如何实现函数重载的？
* 在TypeScript中Omit类型有什么作用？
* 在TypeScript中使用unknown的场景是什么？
* 在TypeScript中什么是三斜线指令？
* 在TypeScript中如何定义类？
* 在TypeScript中的类与JavaScript类有什么不同？
* 在TypeScript中怎样定义和使用命名空间？
* 在TypeScript中是怎样进行类型检查的？
* 在TypeScript中的void类型是什么？在什么场景下使用？
* 在TypeScript中如何定义、导入和导出模块？
* 在TypeScript中的null与undefined有什么区别？
* 在TypeScript中如何支持类型推断？
* 在TypeScript中any和unkown有什么区别？
* 在TypeScript中装饰器有哪些应用场景？
* 请说说你对TypeScript中装饰器的理解
* 请说说你对TypeScript中mixin的理解
* 请说说你对TypeScript中类的理解
* 在TypeScript中never与void有什么区别？
* TypeScript有哪些内置数据类型？
* 在TypeScript中interface与type有什么区别？
* 请说说你对TypeScript中泛型的理解
* 请说说你对TypeScript中模块的理解
* 为什么要推荐使用TypeScript?
* 请说说TypeScript有哪些特性？
* 请说下TypeScript中的类型断言是什么？
* 请说下在TypeScript中命名空间与模块的区别？
* TypeScript中支持的访问修饰符有哪些？
* 请说说你对TypeScript中枚举的理解
* TypeScript中的Declare关键字有什么作用？
* 你觉得TypeScript难吗？
* 说说你对TypeScript的了解，它和JS有什么关系？
* 你有在项目中使用过TypeScript吗？
* 在TypeScript中泛型有什么作用？
* 你是怎么优化你的 ts 代码的？
* 你有用过哪些ts的高级类型？
* extends 和 implements 有什么区别？
* interface 和 type 到底有什么区别？

### TS笔试题
1. 为什么会报错？如何解决
```
type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: 'customer'
  }
}
```
参考
```
因为 T 只是约束与 User 类型，而不局限于User 类型，所以返回为T类型不仅仅只有 id和kind，So需要一个接收其他类型的变量
解决方案：

type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    kind: 'customer'
  }
}
```
2. 我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息
```
function f(a: string | number, b: string | number) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok
```
参考
```
// 函数重载
function f(a:number,b:number):number;
function f(a:string,b:string):string;

function f(a:number|string,b:number|string):number|string{
    if(typeof a === 'string'){
        return a+':'+b;
    }else{
        return (a as number) + (b as number);
    }
}
```

3. 如何定义一个 SetOptional和SetRequired 工具类型，分别支持把给定的 keys 对应的属性变成可选的？和必填的。对应的使用示例如下所示：
```
type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean; 
// }

// 测试用例
type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
// type SomeRequired = {
// 	a: number;
// 	b: string; // 该属性已变成必填
// 	c: boolean; // 保持不变
// }
```
### 工具泛型的实现
```ts
// 实现Partial:将传入的属性变为可选项
type Partial<T>={ [P in keyof T]?:T[P] }
// Required:将传入的属性变为必选项
type Required<T>={[P in keyof T]-?:T[P]}
// Mutable:将 T 的所有属性的 readonly 移除
type Mutable<T>={-readonly [P in keyof T]:T[P]}
//Readonly:将传入的属性变为只读选项
type Readonly<T>={readonly [P in keyof T]:T[P]}
// Recorder:将 K 中所有的属性的值转化为 T 类型
type Recorder<K extends keyof any,T>={[P in K]:T}
// Pick:从 T 中取出 一系列 K 的属性
type Pick<T,K extends keyof any>={[P in K]:T[P]}

//Exclude: 条件语句
type Exclude<T,U>=T extends U ? never : T;
// 例如， Exclude 的作用是从 T 中找出 U 中没有的元素, 换种更加贴近语义的说法其实就是从T 中排除 U
type T = Exclude<1|2,1|3> // 2

// Extract的作用是提取出 T 包含在 U 中的元素, 换种更加贴近语义的说法就是从 T 中提取出 U
type Extract<T,U>=T extends U? T:never;

// Omit: Pick 和 Exclude 进行组合, 实现忽略对象某些属性功能
type Omit<T,K>=Pick<T,Exclude<keyof T,K>>
// 例如
type Foo = Omit<{name:string,age:number},'name'> // {age:number}

// ReturnType:在条件类型语句中, 我们可以用 infer 声明一个类型变量并且对它进行使用,我们可以用它获取函数的返回类型
type ReturnType<T> = T extends(...args:any[])=>infer R?R:any;
//infer R 就是声明一个变量来承载传入函数签名的返回值类型, 简单说就是用它取到函数返回值的类型方便之后使用.例如
function foo(x:number):Array<number>{
  return [x];
}
type Foo = ReturnType<typeof foo>

// AxiosReturnType:

```