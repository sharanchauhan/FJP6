// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let arr=['audio','video','image','software','documents','Applications','other'];
let name=['abc','def','ghi','jkl'];
let ext=['.mp3','.mp4','.jpg','.exe','.docx','.apk','.rar'];
let fs=require('fs');
let path=require('path');

let organised=path.join(__dirname,"Organised");
if(!fs.existsSync(organised))
{
    fs.mkdirSync(organised);
}

for(let i=0;i<arr.length;i++)
{
    let folder=path.join(organised,arr[i]);
    if(!fs.existsSync(folder))
    {
        fs.mkdirSync(folder);
    }
    for(let j=0;j<name.length;j++)
    {
        let fileName=name[j]+ext[i];
        let fileKaPath=path.join(folder,fileName);
        fs.writeFileSync(fileKaPath,"");
    }
}