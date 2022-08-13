const express=require('express');

//app signifies -> your server
const app=express();

app.get("/sayHello",function(req,res)
{
    res.send("Hello!! From Server");
});

app.get("/sayBye",function(req,res)
{
    res.send("Bye!! From Server");
});

app.listen(3000,function()
{
    console.log("Server Started at Port 3000");
});