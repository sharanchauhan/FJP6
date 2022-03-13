// read content of unorganised folder and make  an array which has extension name of each file
let fs=require('fs');
let path=require('path');

let data=fs.readdirSync("/Users/sharanchauhan/Documents/FJP6/Module-2/Node/unorganised");
console.log(data);
let arr_ext=[];
for(let i=0;i<data.length;i++)
{
    arr_ext.push(path.extname(data[i]));
}

console.log(arr_ext);