const fs = require('fs')

function getFiles(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}

// const p = getFiles('./files/111.txt')

// p.then(function (data) {
//     console.log('成功了' + data)
// }, function(err) {
//     console.log('失败了' + err)
// })

// getFiles('./files/111.txt').then(res => {
//     console.log(res)
//     return getFiles('./files/222.txt')
// }).then(res => {
//     console.log(res)
//     return getFiles('./files/333.txt')
// }).then(res => {
//     console.log(res)
//     return getFiles('./files/444.txt')
// }).catch(err => {
//     console.log('出错了' + err);
// })


// async  和 await 简化 promise 写法
async function getFilesContent() {
    const result1 = await getFiles('./files/111.txt')
    console.log(result1)

    const result2 = await getFiles('./files/222.txt')
    console.log(result2)

    const result3 = await getFiles('./files/333.txt')
    console.log(result3)
} 

getFilesContent()