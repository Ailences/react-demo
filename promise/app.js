const fs = require('fs')

function getContentByPath(path, callback) {
    // 注意： fs.readFile 是一个异步方法
    fs.readFile(path, 'utf-8', (err, dataStr) => {
      if (err) return callback(err)
      callback(null, dataStr)
    })
  }

  getContentByPath('./files/111.txt', function (err, data) {
    console.log('最终的内容是：' + data)
  
    getContentByPath('./files/222.txt', function (err, data) {
      console.log('最终的内容是：' + data)
  
      getContentByPath('./files/333.txt', function (err, data) {
        console.log('最终的内容是：' + data)
      })
    })
  })