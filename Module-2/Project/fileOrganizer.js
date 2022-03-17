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
        let p=path.join(__dirname,type);
        if(!fs.existsSync(p))
        {
            fs.mkdirSync(p);
        }
        let source =path.join(__dirname,"Downloads",files[i]);
        let destination=path.join(__dirname,type,files[i]);
        fs.copyFileSync(source,destination);
        fs.unlinkSync(source);
    }
    fs.rmdirSync(path.join(__dirname,"Downloads"));
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

// Snippet to move file

// function moveFile(folderPath,pathOfFolder,fileName){
//     let sourcePath = path.join(folderPath,fileName);
//     let destinationPath = path.join(pathOfFolder,fileName);
//     fs.copyFileSync(sourcePath,destinationPath);
//     fs.unlinkSync(sourcePath);
// }