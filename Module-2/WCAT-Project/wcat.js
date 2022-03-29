let command=process.argv[2]
let fileName=process.argv[3]

let path=require("path")
let fs=require("fs")

let filePath=path.join(__dirname,fileName);
if(command=="-n")
{
    let file=fs.readFileSync(filePath,'utf-8');
    // console.log(file);
    let count=0
    for(let i=0;i<file.length;i++)
    {
        if(file[])
    }
}

