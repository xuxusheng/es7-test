/*
  循环多个await
  await 看起来就像是同步代码，所以可以理所当然的写在for循环里，不必担心以往需要 闭包 才能解决的问题。
*/

export default async () => {
    for(var i = 1; i<=10; i++) {
        console.log('当前是第' + i + '次等待。。')
        await sleep(1000);
    }
}


function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

/*// 值得注意的是，await 必须在 async 函数的上下文中。
let arr = [1,2,3,4,5,6,7,8,9,10];

// 错误示范
arr.forEach(function(v) {
    console.log('当前是第' + v + '次等待。。')
    await sleep(1000); // 错误！await只能在async函数中训醒
})

// 正确示范
for(var v of arr) {
    console.log('当前是第' + v + '次等待。。')
    await sleep(1000); // 正确，for循环的上下文还在async函数中
}*/