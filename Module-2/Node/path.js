// "/Users/sharanchauhan/Documents/FJP6/Module-2/Node/path.js"
let path=require('path');
console.log(path.extname("/Users/sharanchauhan/Documents/FJP6/Module-2/Node/path.js"));
// console.log(path.basename("/Users/sharanchauhan/Documents/FJP6/Module-2/Node/path.js"));
console.log(path.basename(__dirname));
console.log(path.basename(__filename));