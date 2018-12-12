import React from 'react'
const qs = require('qs')

// 将 axios 挂载 到 React 上
import axios from 'axios'

axios.defaults.transformRequest = [function (data, hrader) {
    // const arr = []

    // for (let key in data) {
    //     arr.push(key + '=' + data[key])
    // }
    // return arr.join('&')
    return data=qs.stringify(data)
}]

axios.defaults.baseURL = 'http://klxin.cn:8899/'
// 将 axios 挂载 到 父类的 原型上；
React.Component.prototype.$http = axios