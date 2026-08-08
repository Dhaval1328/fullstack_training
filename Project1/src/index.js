// let arr = [34, 12, 54, 35, 67];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// let average = sum / arr.length;

// console.log("Average:", average);

// arr.reduce((sum ,value ,index ,  array) =>{
//     return sum += value
// }, 0)

// console.log(sum);

let arr = [34,12,54];

let [a,b,c] = arr;

console.log(a);
console.log(b);
console.log(c);


let student = {
    name='Dhavl',
    age:20
}

let {name,age}= student
console.log(name)
console.log(age)