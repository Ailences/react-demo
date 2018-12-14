// 1.导入react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

import fetchJSONP from 'fetch-jsonp'

React.Component.prototype.$http = fetchJSONP

// 导入 评论 组件
import App from '@/components/App'

ReactDOM.render( <div>
        <App />
    </div> , document.getElementById('app'))