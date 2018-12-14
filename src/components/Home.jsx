import React from 'react'
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return <div>
            <h1>Home组件</h1>
            <button onClick={() => this.goAbout()}>关于</button>
            <hr/>
            <button onClick={() => this.fetchRQ()}>使用fetch-jsonp发送请求</button>

        </div>
    }

    goAbout = () => {
        // console.log(this)
        this.props.history.push('/about')
    }

    fetchRQ = async () =>{
        // console.log(11);
        const res = await this.$http('https://api.douban.com/v2/movie/in_theaters')
        const data = await res.json()
        console.log(data)
    }
}