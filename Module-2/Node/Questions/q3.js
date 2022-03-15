//copy index.html file from module1 to a new folder inside module2 having name html.
let fs=require('fs');
let path=require('path');
let source=path.join(__dirname,"..","..","..","Module-1","project","index.html");
let destination=path.join(__dirname,"..","..","html.html");

fs.copyFileSync(source,destination);