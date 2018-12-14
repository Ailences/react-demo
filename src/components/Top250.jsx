import React from 'react'
export default class About extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        console.log(this.props.match.params.type)
        return <div>
            <h1>Top250组件</h1>
        </div>
    }
}