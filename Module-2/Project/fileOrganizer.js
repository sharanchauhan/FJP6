// let inputArr=process.argv;
// console.log(inputArr);

// let input=inputArr[2];
let folder=process.argv[2];
// console.log(input);

let fs=require("fs");
let path=require("path");
let folderExists=fs.existsSync(folder);

let extensions={
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".pdf",".xlsx",".doc",".txt"],
    Image:[".jpg",".gif",".jpeg",".png"],
    Software:[".exe"]
}

if(folderExists)
{
    let files=fs.readdirSync(folder);
    for(let i=0;i<files.length;i++)
    {
        let ext=path.extname(files[i]);
        let type=checkType(ext);
        console.log(type);
    }
}
else
{
    console.log("Please Enter a Valid Path");
}

function checkType(ext)
{
    for(let key in extensions)
    {
        let extArr=extensions[key];
        for(let i=0;i<extArr.length;i++)
        {
            if(ext==extArr[i])
            {
                return key;
            }
        }
    }
    return 'Others'
}