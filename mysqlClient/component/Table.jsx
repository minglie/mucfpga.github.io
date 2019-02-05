const Table=(props)=>{
    return (
        <div className="table-responsive">
            <table className="table table-striped ">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>图标</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>邮费</th>

                    <th className="text-center">操作</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>1</td>
                    <td>图标</td>
                    <td>背包1111111</td>
                    <td>20元</td>
                    <td>10元</td>

                    <td className="text-center">修改  删除</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>图标</td>
                    <td>thinpad笔记本电脑</td>
                    <td>20元</td>
                    <td>10元</td>

                    <td className="text-center">修改  删除</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>图标</td>
                    <td>iphone7</td>
                    <td>20元</td>
                    <td>10元</td>

                    <td className="text-center">修改  删除</td>
                </tr>

                </tbody>
            </table>
        </div>

    )
}
