// function add(a,b){
//     sum = a+b;
//     console.log(sum)
// }

// add(10,30);


// const obj = {
//     name:"Dhaval",
//     show:function(){
//         function test(){
//             console.log(this);
//         }
//         test();
//     }
// }

// obj.show();

// function greet(){
//         let name = "Dhaval";
//         return name;
// }

// function hoc(cb){
//         let msg = 'Hello ' + cb()
//         console.log(msg)
// }

// hoc(greet);

// call back function: a function that we pass inside a function as an argument is consider as a call


//higer order function :  a function that recieves a function as an argument is considered as a higher order function


// function greet(){
//         let name = "Dhaval";
//         return name;
// }

// function hoc(cb){
//         let msg = 'Hello ' + cb()
//         console.log(msg)
// }

// hoc(greet);



// function hoc(cb){
//         let msg = 'Hello ' + cb()
//         console.log(msg)
// }
// hoc(() => {
//     let name = "Dhaval";
//     return name;
// })


//iife : immeditely invoked function expression

(function (){
    console.log("This is iife function")
})();

