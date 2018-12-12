// 1.导入react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 导入BrandList 的配置文件
import '@/brandlistconfig'
// 导入 评论 组件
import BrandList from '@/components/BrandList'

ReactDOM.render( <div>
        <BrandList> </BrandList> 
    </div> , document.getElementById('app'))