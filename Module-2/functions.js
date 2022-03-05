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
let mul=function mul(num1,num2)
{
    return(num1*num2);
}
console.log("Multiplication = "+mul(5,7));