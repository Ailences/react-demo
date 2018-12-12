import React from 'react'

export default class AxiosGet extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return <div>
            <button onClick={() => this.getInfo()}>点击按钮发送get请求</button>
            <br />
            <hr />
            <button onClick={() => this.postInfo()}>点击按钮发送post请求</button>
        </div>
    }
    getInfo = async () => {
        const { data } = await this.$http('/api/getlunbo')

        console.log(data)
    }
    postInfo = async () => {
        // axios.post('http://klxin.cn:8899/api/post','name=zs&age=22').then(res => {
        //     console.log(res);
        // })
        // this.$http.post('/api/post', {
        //     name: 'zs',
        //     age: 33
        // }).then(res => {
        //     console.log(res);
        // })
        const res = await this.$http.post('/api/post',{
            name: 'zs',
            age: 33
        })

        console.log(res);
    }
}