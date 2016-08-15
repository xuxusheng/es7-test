/*
  捕捉错误
  既然 .then(...) 不用写了，那么 .catch(..) 也不用写了，可以直接用标准的 try catch 语法捕捉错误
*/

export default async () => {
    try {
        console.log('start')
        await sleep(3000); //这里会返回一个错误

        // 所以下面的代码不会被执行
        console.log('end')
    } catch (err) {
        console.log(err) // 这里捕捉到错误‘error’
    }
}

var sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 模拟出错，返回‘error’
            reject('error')
        }, time)
    }, time)
}