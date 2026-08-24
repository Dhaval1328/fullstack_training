import http from "http";

const PORT = 5000;

const app = http.createServer((req, res) => {

    console.log(req.url);

    if (req.url === "/") {
        res.end("This is my First Server");
    }
    else if (req.url === "/about") {
        res.end("This is About Page");
    }
    else {
        res.end("404 Page Not Found");
    }

});

app.listen(PORT, () => {
    console.log(`Server is Running At http://localhost:${PORT}`);
});