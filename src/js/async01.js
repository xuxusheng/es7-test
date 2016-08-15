/*
  async 表示这是一个 async 函数，await 只能用在这个函数里面
  await 表示在这里 等待promise返回结果了，再继续执行。
  await 后面跟着的 应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了）
*/



export default async () => {
    // 在这里使用起来就像同步代码一样
    console.log('start')
    await sleep(3000)
    console.log('end')
}

let sleep = function(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}