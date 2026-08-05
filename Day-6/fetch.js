
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        // Convert Response object into JSON
        return response.json();
    })
    .then((users) => {
        // users contains the actual data returned by the API
        console.log(users);
    });


fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        // This converts the response into JSON.
        // It will only execute if the request is successful.
        return response.json();
    })
    .then((data) => {
        // Print the actual data received from the server.
        console.log(data);
    })
    .catch((error) => {
        // Handle any error that occurs during the request.
        console.log("Error:", error);
    });