//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fs=require('fs');
let path=require('path');

let data=fs.readdirSync("/Users/sharanchauhan/Documents/FJP6/Module-2/Node/unorganised");
console.log(data);
let arr_ext=[];
for(let i=0;i<data.length;i++)
{
    if(path.extname(data[i])==".mp3")
    {
        console.log(data[i]+"-> Audio File")
    }
    else if(path.extname(data[i])==".mp4")
    {
        console.log(data[i]+"-> Video File")
    }
    else if(path.extname(data[i])==".jpg")
    {
        console.log(data[i]+"-> Image File")
    }
    else if(path.extname(data[i])==".zip")
    {
        console.log(data[i]+"-> Zip File")
    }
    else if(path.extname(data[i])==".xlsx")
    {
        console.log(data[i]+"-> Excel File")
    }
    else if(path.extname(data[i])==".pdf")
    {
        console.log(data[i]+"-> PDF File")
    }
    else if(path.extname(data[i])==".doc")
    {
        console.log(data[i]+"-> Document File")
    }
}
