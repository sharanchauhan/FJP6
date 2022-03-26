const request=require("request");
request('https://www.google.co.in',function(error,response,body) {
    if(error)
    {
        console.log("Error:- "+error);
    }
    else
    {
        console.log("Body:-"+body);
    }
});