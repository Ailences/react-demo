// 1.导入react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 导入 评论 组件
import CmtList from '@/components/CmtList'

ReactDOM.render(<div>
    <CmtList></CmtList>
</div>, document.getElementById('app'))
