import React from 'react'
// 按需导入路由组件
import { HashRouter, Route, Link, Redirect } from 'react-router-dom'

// 导入需要的组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import Top250 from '@/components/Top250'


// BrowserRouter
export default class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return <HashRouter>
            <div>
                <h3>App根组件</h3>

                <Link to="/home">首页</Link>&nbsp;&nbsp;
                <Link to="/movie">电影</Link>&nbsp;&nbsp;
                <Link to="/movie/top250">top250</Link>&nbsp;&nbsp;
                <Link to="/about">关于</Link>
                <hr />

                {/* 路由规则 */}

                <Route exact path="/" render={() => <Redirect to="/home" />} />

                <Route path="/home" component={Home} />
                <Route path="/movie" component={Movie} exact />
                <Route path="/movie/:type" component={Top250} exact />
                <Route path="/about" component={About} />
            </div>
        </HashRouter>
    }
}