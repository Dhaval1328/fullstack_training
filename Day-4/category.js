// synchronus programing 
console.log("Start")
const add = (a,b) => {
    return a+b;
}

const sub = (a,b) =>{
    return a-b;
}

console.log(add(5,3));
console.log(sub(5,3));

console.log("end")

// asynchronus programing

console.log('line 1');
setTimeout(() => console.log('line 2'),3000)
const flag = setInterval(() => console.log('hi'),2000);
console.log('line 3');




//user define asynchronous function
function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

console.log('Line 4');
sum(5,3)
sum(8,2)