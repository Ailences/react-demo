// 1.导入react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 按需导入antd 组件
import { DatePicker } from 'antd'
import { Button } from 'antd';
// 全局导入样式表
// import 'antd/dist/antd.css';


ReactDOM.render( <div>
        <DatePicker />
        <hr/>
        <Button type="primary"></Button>
    </div> , document.getElementById('app'))