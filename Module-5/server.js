const express=require('express');

//app signifies -> your server
const app=express();

app.get("/",function(req,res)
{
    res.send("Homepage");
});

app.get("/sayHello",function(req,res)
{
    res.send("Hello!! From Server");
});

app.get("/getMultiply/:num1/:num2",function(req,res) {
    console.log(req.params);
    let num1=req.params.num1;
    let num2=req.params.num2;
    let result=num1*num2;
    res.end("Multiplication of parameters = "+result);
});

app.get("/sayBye",function(req,res)
{
    res.send("Bye!! From Server");
});

app.listen(3000,function()
{
    console.log("Server Started at Port 3000");
});