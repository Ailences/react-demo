import React from 'react'

export default class CmtBox extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    // http://klxin.cn:8899/api/post
    render() {
        return <div>
            <h3>发表评论</h3>
            评论人: <input type="text" ref="user" />
            评论内容: <input type="text" ref="content" />
            <button type="button" className="btn btn-primary" onClick={() => this.postCmt()}>发表评论</button>
        </div>
    }
    postCmt = () => {
        const user = this.refs.user.value
        // console.log(user)
        const content = this.refs.user.value
        // console.log(content)
        if (user.trim().length <= 0 || content.trim().length <= 0) return alert("请填写完整的信息")

        const cmtobj = { user, content, id: Date.now() }

        this.props.func(cmtobj)

        this.refs.user.value = this.refs.content.value = ''
    }
}