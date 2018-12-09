// 1.导入react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 创建组件的第一种方式
function Hello(props) { 
    console.log(props);
    return <div>这是函数方式定义组件 {props.name} --- {props.age} --- {props.gender}</div>
}
let dog = {
    name:'小黑',
    age:2,
    gender:'雌'
}
ReactDOM.render(<div>
    123
    <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>
    <Hello {...dog}></Hello>
</div>, document.getElementById('app'))