// Q - Write a function f that returns product of x and y with both of the following function calls

// f(x, y)
// f(x)(y)

function f(x,y)
{
    if(y==undefined)
    {
        return function(y)
        {
            return y*x;
        }
    }
    else
    {
        return x*y;
    }
}

console.log(f(5,3));
console.log(f(5)(3));

// checking commit