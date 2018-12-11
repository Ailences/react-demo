import React from 'react'
// 第一层封装 将样式对象和UI结构分离
// const itemStyle = { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 3px #ccc' }
// const userStyle = { fontSize: '16px' }
// const contentStyle = { fontSize: '14px' }


// 第二层封装 合并为一个大的样式对象
// const styles = {
//     item: { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 3px #ccc' },
//     user: { fontSize: '16px' },
//     content: { fontSize: '14px' }
// }

// 第三层封装 导入抽离的样式模块
import styles from '@/components/styles'
// 使用function构造函数,定义无状态组件
export default function CmtItem(props) {
    return <div style={styles.item}>
        <h2 style={styles.user}>评论人:{props.user}</h2>
        <p style={styles.content}>评论内容:{props.content}</p>
    </div>
}
