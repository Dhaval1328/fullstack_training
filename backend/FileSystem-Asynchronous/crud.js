import fs from 'fs';

// // Create a directory
// fs.mkdir("test", (err) => {

//     if (err) {
//         throw err;
//     }

//     console.log("Directory Created...");
// });

// fs.readdir("F:\\MERN_Training\\backend\\FileSystem-Asynchronous", (err, data) => {

//     if (err) {
//         throw err;
//     }

//     console.log(data);

//     for (let x of data) {
//         console.log(x);
//     }

// });

// fs.rmdir("test", (err) => {

//     if (err) {
//         throw err;
//     }

//     console.log("Directory Removed...");

// });


import fs from "fs";

// Write file
fs.writeFile("./abc.txt", "Hello Good Morning", (err) => {
    if (err) {
        throw err;
    }

    console.log("File Created Successfully");

    // Read file
fs.readFile("./abc.txt", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }

    console.log(data);

        // Append file
fs.appendFile("./abc.txt", "\nTea Is Good", (err) => {
    if (err) {
        throw err;
    }

    console.log("Data Appended Successfully");
});
});
});