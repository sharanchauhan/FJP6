// move a file
// npm install mv
let mv=require('mv');
let source="/Users/sharanchauhan/Documents/FJP6/Module-2/Node/Questions/folder-q1/text-file.txt";
let destination="/Users/sharanchauhan/Documents/FJP6/Module-2/Node/Dummy Folder/text-file.txt";

mv(source, destination, function(err) {
    if (err) {
       throw err
   } else {
       console.log("Successfully moved the file!");
   }
});
