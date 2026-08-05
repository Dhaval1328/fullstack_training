
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         // Convert Response object into JSON
//         return response.json();
//     })
//     .then((users) => {
//         // users contains the actual data returned by the API
//         console.log(users);
//     });


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         // This converts the response into JSON.
//         // It will only execute if the request is successful.
//         return response.json();
//     })
//     .then((data) => {
//         // Print the actual data received from the server.
//         console.log(data);
//     })
//     .catch((error) => {
//         // Handle any error that occurs during the request.
//         console.log("Error:", error);
//     });

    

async function getData() {
    try{
        //Fetch data from the server
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")

        //Convert response into JSON
        const data = await response.json();

        //Print the recived data
        console.log(data);
    }catch(error){
        //Handle any error that occurs
        console.log("Error:", error);
    }
}

getData()