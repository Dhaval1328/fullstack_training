import fs from 'fs';


fs.writeFileSync('./Test.txt','Hello This Is For Testing Purpose');

const data1 = fs.readFileSync('./Test.txt','utf-8');
console.log(data1)