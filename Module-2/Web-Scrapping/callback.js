//Javascript is a synchronous language

const fs=require('fs');
console.log("Before");
fs.readFile("request.js",cb);
function cb(error,data)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(data+" ");
    }
}

console.log("After");
console.log("One more time printing a statement");