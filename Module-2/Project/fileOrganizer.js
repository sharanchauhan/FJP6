// let inputArr=process.argv;
// console.log(inputArr);

// let input=inputArr[2];
let folder=process.argv[2];
// console.log(input);

let fs=require("fs");
let folderExists=fs.existsSync(folder);
if(folderExists)
{
    let files=fs.readdirSync(folder);
    console.log(files);
}
else
{
    console.log("Please Enter a Valid Path");
}

