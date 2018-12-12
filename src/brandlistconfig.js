import React from 'react'

// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// 导入axios 并配置
import axios from 'axios'

axios.defaults.baseURL = 'http://klxin.cn:8899/'
axios.defaults.transformRequest = [function (data, header) {
    const arr = []

    for (let key in data) {
        arr.push(`${key}=${data[key]}`)
    }
    return arr.join('&')
}]

React.Component.prototype.$http = axios
// 添加时间过滤器
React.Component.prototype.dateFormat = function (dateStr) {
    // return dateStr + '222'
    const dt = new Date(dateStr)
    const Y = dt.getFullYear()
    const M = (dt.getMonth() + 1).toString().padStart(2,'0')
    
    const D = dt.getDate().toString().padStart(2,'0')
    const hh = dt.getHours().toString().padStart(2,'0')
    const mm = dt.getMinutes().toString().padStart(2,'0')
    const ss = dt.getSeconds().toString().padStart(2,'0')

    return `${Y}-${M}-${D} ${hh}:${mm}:${ss}`
}