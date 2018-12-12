import React from 'react'

export default class BrandList extends React.Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    // 组件将要被挂载
    componentWillMount() {
        this.getBrandList()
    }
    render() {
        return <div>
            <h1>品牌列表</h1>


            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">添加品牌</h3>
                </div>
                <div className="panel-body form-inline">
                    <div className="input-group">
                        <div className="input-group-addon">品牌名称</div>
                        <input type="text" className="form-control small" ref={ref => this.name = ref} />
                    </div>

                    <button type="button" className='btn btn-info' onClick={() => this.add()}> 添加</button>
                </div>
            </div>

            <table className="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>名称</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.list.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{this.dateFormat(item.ctime)}</td>
                            <td>
                                <a href="javascript:void(0)" onClick={() => this.delItem(item.id)}>删除</a>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    }
    // 获取商品列表
    getBrandList = async () => {
        const { data } = await this.$http('/api/getprodlist')
        // console.log(data)
        this.setState({
            list: data.message
        })
    }
    // 根据id删除商品
    delItem = async (id) => {
        const { data } = await this.$http('/api/delproduct/' + id)
        // console.log(data)
        if (data.status === 0) {
            this.getBrandList()
        }
    }
    // 添加商品
    add = async () => {
        // console.log(this.name.value)
        if (this.name.value.length <= 0) return alert('品牌名不能为空')

        const { data } = await this.$http.post('/api/addproduct', { name: this.name.value.trim() })
        // console.log(data)
        if (data.status === 0) {
            this.name.value = ''
            this.getBrandList()
        }
    }
}