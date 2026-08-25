// const fs = require('fs')  common js way


import fs from 'fs';

// // reading a file:
// const data = fs.readFileSync('./read.txt');  //read file and generates the buffer data
// const data1 = fs.readFileSync('./read.txt','utf-8'); // read file and generates the actual data 
// console.log(data)
// console.log(data1)


// //appending a file :
// fs.appendFileSync('./read.txt', "I am learning How TO Uppend Text In fs")

// const data2 = fs.readFileSync('./read.txt','utf-8');
// console.log(data2)


// //rename a file:
// fs.renameSync("./read.txt","ABC.txt")


fs.unlinkSync("./ABC.txt");