//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let fs=require('fs');
let path=require('path');
let file=__dirname;
// console.log(file);
let p=path.join(file,"/folder-q1");
if(!fs.existsSync(p))
{
    fs.mkdirSync(p);
}

let filepath=path.join(p,"text-file.txt");
fs.writeFileSync(filepath,"new file has been made");