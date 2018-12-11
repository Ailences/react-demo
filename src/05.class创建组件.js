// 1.导入react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 导入 LifeCycle 组件
import LifeCycle from '@/components/LifeCycle'

class  Wapper extends React.Component {
    constructor() {
        super()
        this.state = {
            c:99
        }
    }
    render () {
        return <div>
            <button onClick={() => this.addC()}> 让 Wrapper 中的 c 自增 + 1</button>
            <h6>当前最新的c 的值为:{this.state.c}</h6>

            <hr/>
            <LifeCycle initcount={this.state.c}></LifeCycle>

        </div>
    }

    addC= ()=>{
        this.setState({
            c: this.state.c + 1
        })
    }
}



ReactDOM.render(<div>
    <Wapper></Wapper>
</div>, document.getElementById('app'))
