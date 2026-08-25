// const fs = require('fs')  common js way


import fs from 'fs';

// reading a file:
const data = fs.readFileSync('./read.txt');  //read file and generates the buffer data
const data1 = fs.readFileSync('./read.txt','utf-8'); // read file and generates the actual data 
console.log(data)
console.log(data1)