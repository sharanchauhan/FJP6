let path=require('path');
let fs=require('fs');

let filepath=path.join(__dirname,"file.txt");
fs.writeFileSync(filepath,"Hello writing into file for the first time!!");
// fs.writeFileSync(filepath,"Again writing into file");//When we try to write into the file if it exists the the data into the file gets over writed

