import fs from 'fs';

// // Create a directory
// fs.mkdir("test", (err) => {

//     if (err) {
//         throw err;
//     }

//     console.log("Directory Created...");
// });

fs.readdir("F:\\MERN_Training\\backend\\FileSystem-Asynchronous", (err, data) => {

    if (err) {
        throw err;
    }

    console.log(data);

    for (let x of data) {
        console.log(x);
    }

});

fs.rmdir("test", (err) => {

    if (err) {
        throw err;
    }

    console.log("Directory Removed...");

});