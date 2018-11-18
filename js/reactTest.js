
page={}
page.fileName="key"
page.Id=0;
try {
    var pageData=M.getObjByFile(page.fileName);
    page.Id=pageData.map(u=>u.id).
    reduce(
        (num1,num2)=>{return num1>num2 ? num1:num2}
    );
}catch (e) {
    page.Id=0;
}


app.begin(function (req) {
    console.log(req.url+ "收到参数-->")
    console.log(req.param)
});

app.end(function (data) {
    console.log("响应参数-->")
    console.log(data)
});


app.post("/add",function (req, res) {
    req.param.id=++page.Id;
    M.addObjToFile(page.fileName,req.param);
    res.send(M.result("添加成功"));
});


app.get("/delete",function (req, res) {

    M.deleteObjByIdFile(page.fileName,req.param.id);
    res.send(M.result("删除成功"));
});





app.post("/update",function (req, res) {
    M.updateObjByIdFile(page.fileName,req.param)
    res.send(M.result("修改成功"));
});




app.get("/listAll",function (req, res) {
    res.send(M.result(M.getObjByFile(page.fileName)));
})


app.get("/getById",function (req, res) {
    var d = M.getObjByFile(page.fileName);
    let r = d.filter(v => v.id == req.param.id);
    res.send(M.result(r));

});


