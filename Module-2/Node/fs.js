let path=require('path');
let fs=require('fs');

let filepath=path.join(__dirname,"file.txt");
// C - Create
fs.writeFileSync(filepath,"Hello writing into file for the first time!!");
// fs.writeFileSync(filepath,"Again writing into file");//When we try to write into the file if it exists the the data into the file gets over writed

// R - Read
console.log("Before update :-");
console.log(fs.readFileSync(filepath,'utf-8'));

// U - Update
console.log("After update:-");
fs.appendFileSync(filepath,"\nNew Line added");
console.log(fs.readFileSync(filepath,'utf-8'));

// D - Delete
fs.unlinkSync(filepath);