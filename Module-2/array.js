// Declaring and printing an empty array
let arr=[]
console.log(arr);

// Declaring and initializing the array with different types of data
let a=[1,2,3,4,5,true,"Hello World!!",6.7,false]
console.log(a);

console.log("Element at 0th index = "+a[0]);
console.log("Element at 5th index = "+a[5]);
console.log("Element at 6th index = "+a[6]);
a[2]="Changed";
console.log("**************************************************************************************");
// Array methods:-
// 1.push

console.log("Array before push = "+a);
a.push("New Item");
console.log("Array after push = "+a);

//2. pop

console.log("Array before pop : ",eleArr);
eleArr.pop();
console.log("Array after pop: ",eleArr);

//3. shift

console.log("Array before shift: ",eleArr);
eleArr.shift();
console.log("Array after shift: ",eleArr);


//4. unshift

console.log("Array before unshift: ",eleArr);
eleArr.unshift("newly added item");
console.log("Array after unshift: ",eleArr);

//length

let len = eleArr.length;
console.log(len);