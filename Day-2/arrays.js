nums = [10,20,30,40,50,"abc", false];
// console.log(nums)

// for(i=0; i< nums.length; i++)
// {
//     console.log(nums[i])
// }

// for(let i of nums){
//     console.log(i);
// }    

// number = 10
// console.log("Type Of Number Varialbe is : ", typeof number);


// n - null
// n - number 
// b - boolean 
// b - bigint 
// s - symbol
// s - string
// u - undefined


// let name = "Dhaval"
// console.log("Type Of Number Varialbe is : ", typeof name);
// const mark = 70
// console.log("Type Of Number Varialbe is : ", typeof mark);
// var isMarried = false
// console.log("Type Of Number Varialbe is : ", typeof isMarried);
// score = null
// console.log("Type Of Number Varialbe is : ", typeof score);


// const PI = 3.14

// // let , var , const

// // var : var can be redeclared as well as updated  (functional scope)
// var a ;  //declartion

// a = 10 ; //initialization

// // let : let can not be redeclared nut it can be updated ( block scope)

// let b;
// b = 12;
// b=30;
// console.log(b)


// // const : it can neither redeclared nor updated ( block scope)

// const g = 9.8;
// console.log(g)


// {
//     let teacher = "risav"
//     console.log(teacher)
// }
// let teacher = "Khan sir"
// console.log("teacher value is ", teacher)  

// {
//     var marks = 20;
// }
// console.log(marks)


const obj = {
    'name' : "vinay",
    'age' : 28,
    'address' : "data"
}
console.log(obj)

for(let key in obj ){
    console.log(key);  //its give the keys
    console.log(obj[key]); // its give the values
}

