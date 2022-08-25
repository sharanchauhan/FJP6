const  express = require("express")
const cookieParser = require("cookie-parser");
var jwt = require('jsonwebtoken');
const secretKey = "kjds5439jkfdsljfsop"
const app = express();
app.use(express.json());
app.use(cookieParser);
const userModel = require("./userModel");

app.post("/signup",async function(req,res){
    try
    {
        let data = req.body;
        console.log(data);
        let newUser =await userModel.create(data);
        res.json({
            message:"data recieved",
            data:data})
    }
    catch(err)
    {
        res.send(err.message);
    }
})

app.get("/users",function(req,res){
    console.log(req.cookies);

})

app.post("/login",async function(req,res){
    try{
        let data = req.body;
        // console.log(data);
        let {email,password} = data;
        if(email && password){
            let user = await userModel.findOne({email:email});
            console.log(user);
            if(user){
                if(user.password == password){
                    //create JWT -> payload, secret key, algo by default -> SHA256
                    const token = jwt.sign({ data: user['_id'] }, secretKey);
                    console.log(token);
                    //put token into cookies
                    res.cookie("JWT",token);
                    res.send("User logged in");
                }else{
                    res.send("Email or Password does not match");
                }
            }else{
                res.send("User with this email does not exist. Kindly sign up");
            } 
        }else{
            res.send("Kindly enter email and password both");
        }
    }catch(err){
        console.log(err.message);
    }
})

app.get("/user",protectRoute, async function(req,res){
    try{
        const userId = req.userId;
        const user = await userModel.findById(userId);
        //to send json data
        res.json({
            data:user,
            message:"Data about logged in user is send"
        })
    }catch(err){
        res.send(err.message)
    }

})

app.get("/users", protectRoute,async function(req,res){
    try{
        let users = await userModel.find();
        res.json(users);
    }catch(err){
        res.send(err.message);
    }
    // console.log(req.cookies);

    // res.send("cookie read");

})

function protectRoute(req,res,next){
    try{
        let cookies = req.cookies;
        let JWT = cookies.JWT;
        if(cookies.JWT){
            const token = jwt.verify(JWT,secretKey);
            console.log(token);
            let userId = token.data;
            req.userId = userId;
            next();
        }else{
            res.send("You are not logged in. Kindly login");
        }
    }catch(err){
        console.log(err);
        res.send(err.message)
    }

}

app.listen(4000,function(){
    console.log("server started at 4000");
})