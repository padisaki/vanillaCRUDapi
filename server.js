const http = require("http");
const getReq = require("./methods/getrequest");
const putReq = require("./methods/putrequest");
const postReq = require("./methods/postrequest");
const deleteReq = require("./methods/deleterequest");
//import movies - no const because movies will change when we change or add new movies
let movies = require("./data/movies.json");

//USING DOTENV
//require("dotenv").config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    //manipulate the request
    req.movies = movies;

    switch (req.method) {
        case "GET":
            getReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify("ERROR 404: NOT FOUND - ROUTE NOT FOUND"));
            res.end();
    }
});

server.listen(PORT, () => {
    console.log(`server started on port : ${PORT}`)
});
