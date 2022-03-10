//Function without parameters
function hello()
{
    console.log("Hello from function hello");
}
hello();

//Functions with parameters
function add(num1,num2)
{
    console.log("Addition = "+(num1+num2));
}
add(5,3);

//Function with parameters and return type
function sub(num1,num2)
{
    return (num1-num2);
}
let ans=sub(2,9);
console.log("Substraction = "+ans);

//Storing function in a variable
let mul=function multiply(num1,num2)
{
    return(num1*num2);
}
console.log("Multiplication = "+mul(5,7));

// IFFE -> Immediately Invoked Function Expression
(function()
{
    console.log("Called from IFFE");
})();

//IFFE -> Immediately Invoked Function Expression with parameters
(function(num1,num2)
{
    console.log("Multiplying again = "+(num1*num2));
})(5,5);

(function(num1,num2)
{
    console.log("Division Result = "+(num1/num2));
})(10,5);