/*
 获得返回值：
 await 等待的虽然是 promise 对象，但不必写 .then(..),直接可以得到返回值。
*/

export default async () => {
    console.log('start')
    let result = await sleep(3000)
    console.log(result)
}

var sleep = function(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 返回ok
            resolve('ok')
        }, time)
    })
}