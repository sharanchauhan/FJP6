let path=require('path');
let fs=require('fs');
// To create a directory
if(!fs.existsSync("/Users/sharanchauhan/Documents/FJP6/Module-2/Node/folder"))
{
    fs.mkdirSync("/Users/sharanchauhan/Documents/FJP6/Module-2/Node/folder");
}
// To read a directory
let data=fs.readdirSync(__dirname);
// console.log(data);

//To delete a directory
fs.rmdirSync("/Users/sharanchauhan/Documents/FJP6/Module-2/Node/folder");

// To copy the file.txt file into the Dummy Folder
let source=path.join(__dirname,"file.txt");
let destination=path.join(__dirname,"Dummy Folder","file.txt");

fs.copyFileSync(source,destination);