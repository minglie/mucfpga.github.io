const Head=(props)=>{
    return (
        <nav className="navbar navbar-inverse" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <img src="images/node.jpg" height="44px;" />
                </div>
                <div className="collapse navbar-collapse" id="example-navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">xx1管理</a>
                        </li>
                        <li className="active"><a href="#">xx2设置</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a>欢迎您,admin</a>
                        </li>
                        <li><a href="#">安全退出</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
