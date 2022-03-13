// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let arr=["audio","video","image","software","documents","applications","other"];
let fs=require('fs');
let path=require('path');

for(let i=0;i<arr.length;i++)
{
    let n=arr[i];
    let folder=path.join(__dirname,n);
    if(arr[i]==n)
    {
        if(!fs.existsSync(folder))
        {
            fs.mkdirSync(folder);
        }
        fs.writeFileSync(path.join(folder,"f1.mp3"),"");
        fs.writeFileSync(path.join(folder,"f2.mp3"),"");
        fs.writeFileSync(path.join(folder,"f3.mp3"),"");
        fs.writeFileSync(path.join(folder,"f4.mp3"),"");
    }
}