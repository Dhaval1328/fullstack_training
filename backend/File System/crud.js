// const fs = require('fs')  common js way


import fs from 'fs';

//how to create a file:
fs.writeFileSync('./read.txt',"Hell This Is My read.txt file")

// reading a file:
const data = fs.readFileSync('./read.txt');  //read file and generates the buffer data
const data1 = fs.readFileSync('./read.txt','utf-8'); // read file and generates the actual data 
console.log(data)
console.log(data1)


//appending a file :
fs.appendFileSync('./read.txt', "I am learning How TO Uppend Text In fs")

const data2 = fs.readFileSync('./read.txt','utf-8');
console.log(data2)


//rename a file:
fs.renameSync("./read.txt","ABC.txt")

//delete.file
fs.unlinkSync("./ABC.txt");

//copy a file

fs.copyFileSync('./read.txt','abc.txt')
console.log("File Copied")

//Does A FIle exist or not

fs.existsSync("./read.txt")