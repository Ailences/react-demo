// 1.导入react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 2.创建虚拟DOM元素
// const myh1 = React.createElement('h1', {
//     id: 'myh1',
//     title: 'this is a h1'
// }, '这是一个大大的h1')


// jsx语法
// const mydiv = <div>
//     这是一个div元素
//     <h2>这是一个标题</h2>
// </div>
let a = 100
let b = '敢为人先'
let flag = true
let h3 = <h3>这里h3</h3>
let arr = [
    <p>这是p1</p>,
    <p><b>这是p2</b></p>
]
let arrStr = ['张继科', '王皓', '马琳', '马龙', '信凯伦']
// 1. 第一种方案  定义一个新数组 用来存放名称标签
var nameArr = []
arrStr.forEach((item) => {
    const tmp = <h3>{item}</h3>
    nameArr.push(tmp)
})

// 3.使用 ReactDOM 把虚拟DOM 渲染到页面上
ReactDOM.render(<div>
    {a}
    <hr />
    {b}
    <hr />
    {flag ? '真的' :'假的'}
    <hr />
    {h3}
    <hr />
    {arr}
    <hr />
    {nameArr}
</div>, document.getElementById('app'))