
//line imports the fs module 
//a filesystem operation you are going to need the fs module from  
//the Node core library. To load this kind of module, or any other "global"  
//module, use the following incantation:

const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)