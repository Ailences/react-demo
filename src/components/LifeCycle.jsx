import React from 'react'

import Types from 'prop-types'

export default class Counter extends React.Component {
    static propTypes = {
        initcount: Types.number.isRequired
    }
    static defaultProps = {
        initcount: 10
    }


    constructor(props) {
        super()
        // console.log(props)
        this.state = {
            msg: 'hhh',
            wight: props.initcount
        }
    }
    componentWillMount() {
        // console.log(this.props.initcount)
        // console.log(this.state.msg)
    }
    render() {
        return <div>
            <button onClick={() => this.add()}>点击+1</button>
            <h3 id="myh3">当前的数量{this.state.wight}</h3>
        </div>
    }
    componentDidMount() {
        // console.log(document.getElementById('myh3').innerHTML)
    }



    shouldComponentUpdate(newProps, newState) {
        // if (newState.wight % 2 === 0) { // 偶数
        //   return true
        // }
        // return false
        return newState.wight % 2 === 0
    }

    componentWillReceiveProps(newProps) {
        // console.log('接收到了新属性' + this.props.initcount)
        console.log('接收到了新属性' + newProps.initcount)
        this.setState({
            wight:newProps.initcount
        })

    }
    add = () => {
        this.setState({
            wight: this.state.wight + 1
        })
    }
}