## promise

* 手写promise，包括then，catch和finally
```js
const PENDING = "pending"; 
const FULFILLED = "fulfilled"; 
const REJECTED = "rejected";
const resolvePromise = (promise, x, resolve, reject) => {
  if (x === promise) {
    // If promise and x refer to the same object, reject promise with a TypeError as the reason.
    reject(new TypeError('循环引用'))
  }
  // if x is an object or function,
  if (x !== null && typeof x === 'object' || typeof x === 'function') {
    // If both resolvePromise and rejectPromise are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored.
    let called
    try { // If retrieving the property x.then results in a thrown exception e, reject promise with e as the reason.
      let then = x.then // Let then be x.then
      // If then is a function, call it with x as this
      if (typeof then === 'function') {
        // If/when resolvePromise is called with a value y, run [[Resolve]](promise, y)
        // If/when rejectPromise is called with a reason r, reject promise with r.
        then.call(x, y => {
          if (called) return
          called = true
          resolvePromise(promise, y, resolve, reject)
        }, r => {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        // If then is not a function, fulfill promise with x.
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    // If x is not an object or function, fulfill promise with x
    resolve(x)
  }
}
function Promise(excutor) {
  let that = this; // 缓存当前promise实例例对象
  that.status = PENDING; // 初始状态
  that.value = undefined; // fulfilled状态时 返回的信息
  that.reason = undefined; // rejected状态时 拒绝的原因 
  that.onFulfilledCallbacks = []; // 存储fulfilled状态对应的onFulfilled函数
  that.onRejectedCallbacks = []; // 存储rejected状态对应的onRejected函数
  function resolve(value) { // value成功态时接收的终值
    if(value instanceof Promise) {
      return value.then(resolve, reject);
    }
    // 实践中要确保 onFulfilled 和 onRejected ⽅方法异步执⾏行行，且应该在 then ⽅方法被调⽤用的那⼀一轮事件循环之后的新执⾏行行栈中执⾏行行。
    setTimeout(() => {
      // 调⽤用resolve 回调对应onFulfilled函数
      if (that.status === PENDING) {
        // 只能由pending状态 => fulfilled状态 (避免调⽤用多次resolve reject)
        that.status = FULFILLED;
        that.value = value;
        that.onFulfilledCallbacks.forEach(cb => cb(that.value));
      }
    });
  }
  function reject(reason) { // reason失败态时接收的拒因
    setTimeout(() => {
      // 调⽤用reject 回调对应onRejected函数
      if (that.status === PENDING) {
        // 只能由pending状态 => rejected状态 (避免调⽤用多次resolve reject)
        that.status = REJECTED;
        that.reason = reason;
        that.onRejectedCallbacks.forEach(cb => cb(that.reason));
      }
    });
  }

  // 捕获在excutor执⾏行行器器中抛出的异常
  // new Promise((resolve, reject) => {
  //     throw new Error('error in excutor')
  // })
  try {
    excutor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
Promise.prototype.then = function(onFulfilled, onRejected) {
  const that = this;
  let newPromise;
  // 处理理参数默认值 保证参数后续能够继续执⾏行行
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
  onRejected = typeof onRejected === "function" ? onRejected : reason => {
    throw reason;
  };
  if (that.status === FULFILLED) { // 成功态
    return newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try{
          let x = onFulfilled(that.value);
          resolvePromise(newPromise, x, resolve, reject); //新的promise resolve 上⼀一个onFulfilled的返回值
        } catch(e) {
          reject(e); // 捕获前⾯面onFulfilled中抛出的异常then(onFulfilled, onRejected);
        }
      });
    })
  }
  if (that.status === REJECTED) { // 失败态
    return newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(that.reason);
          resolvePromise(newPromise, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      });
    });
  }
  if (that.status === PENDING) { // 等待态
// 当异步调⽤用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中
    return newPromise = new Promise((resolve, reject) => {
      that.onFulfilledCallbacks.push((value) => {
        try {
          let x = onFulfilled(value);
          resolvePromise(newPromise, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      });
      that.onRejectedCallbacks.push((reason) => {
        try {
          let x = onRejected(reason);
          resolvePromise(newPromise, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      });
    });
  }
};
```
* 手写promise的all、race、allSettled
```js
const all = (arr) => {
  return new Promise((resolve,reject)=>{
    const ret = [];
    let count = 0;
    for(let i=0;i<arr.length;i++){
      arr[i].then(res=>{
        ret[i] = res;
        count++;
        if(count === arr.length) {
          resolve(ret);
        }
      }).catch(reject)
    }
  })
}
const race = (arr) => {
  return new Promise((resolve,reject)=>{
    for(let i = 0;i<arr.length;i++){
      arr[i].then(resolve).catch(reject);
    }
  })
}
const allSettled = (arr)=>{
  return new Promise((resolve,reject)=>{
    const ret = [];
    let count = 0;
    for(let i=0;i<arr.length;i++){
      arr[i].then(res=>{
        ret[i] = res;
      }).catch(err=>{
        ret[i]=err;
      }).finally(()=>{
        count++;
        if(count === arr.length) {
          resolve(ret);
        }
      })
    }
  })
}
```
* 手写promise的并发（limit）
```js

const request = (msg,delay)=>new Promise(resolve=>setTimeout(()=>resolve(msg),delay));

const arr = [
  ()=>request(1,2000),
  ()=>request(2,1000),
  ()=>request(3,6000),
  ()=>request(4,5000),
  ()=>request(5,4000),
]

const limitPromise = (arr,max)=>{
  const pool = [];
  const wait = [];

  const run = (task)=>{
    task().then(res=>{
      const next = wait.shift();
      console.log(res);
      if(next) run(next);
    })
  }
  for(let i =0;i<arr.length;i++){
    const item = arr[i]
    if(i<max){
      run(item)
    }else{
      wait.push(arr[i]);
    }
  }
}

limitPromise(arr,2);
```
* 手写promise重试（retry）
```js

// 重试
const myPromiseRetry = (promise,times)=>{
  return new Promise((resolve,reject)=>{
    const fn = promise().then(res=>{
      resolve(res);
    }).catch(err=>{
      if(times>0){
        times--;
        fn();
      }else{
        console.error('重试次数使用完毕');
        reject(err);
      }
    })
    fn();
  })
}
```
* 手写promise超时（timeout）
```js
// 超时
const promiseTimeout = (promise,delay)=>{
  return Promise.race([promise,new Promise(resolve=>{
    setTimeout(()=>resolve(),delay)
  })])
}
```

* 用 Promise 封装一个 ajax
* 按要求完成 mergePromise 代码 
```js
const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
const ajax1 = () =>
  timeout(2000).then(() => {
    console.log("1");
    return 1;
  });
const ajax2 = () =>
  timeout(1000).then(() => {
    console.log("2");
    return 2;
  });
const ajax3 = () =>
  timeout(2000).then(() => {
    console.log("3");
    return 3;
  });
const mergePromise = (ajaxArray) => {
  // 1,2,3 done [1,2,3] 此处写代码 请写出ES6、ES3 2中解法
};
mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为[1,2,3]
});
// 执行结果为：1 2 3 done [1,2,3]
```