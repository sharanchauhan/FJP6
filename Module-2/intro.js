// to print anything in javascript
console.log("Hello World!!");

// data types and variables in javascript
// let num=10;
// let char='a';
// let str="Hello";
// let bool=true;

// console.log(num+" "+char+" "+bool+" "+str);

//To print wether a number is prime or not
let n=17,ans=0;
for(let i=2;i*i<=n;i++)
{
    if (n%i==0)
    {
        ans=1;
        console.log("Not Prime");
        break;
    }
}
if(ans==0)
{
    console.log("The number is prime");
}

//While loop
let k=1;
while(k<5)
{
    console.log(k);
    k++;
}