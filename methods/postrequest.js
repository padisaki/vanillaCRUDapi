const crypto = require("crypto")
const requestBodyParser = require("../utils/bodyparser");
const writeToFile = require("../utils/write-to-file");

//HOW TO CREATE A NEW MOVIE

module.exports = async (req, res) => {
    if (req.url === "/api/movies") {
        try {
            let body = await requestBodyParser(req);
            body.id = crypto.randomUUID();
            req.movies.push(body);
            writeToFile(req.movies);
            res.writeHead(201, { "Content-type": "application/json" });
            res.end();
        } catch (err) {
            console.log(err);
            res.writeHead(404, { "Content-type": "application/json" });
            res.end(
                JSON.stringify
                    ("ERROR 404: VALIDATION FAILED - REQUEST BODY NOT VALID"))
        }
    } else {
        res.writeHead(404, { "Content-type": "application/json" });
        res.end(JSON.stringify("ERROR 404: NOT FOUND - ROUTE NOT FOUND"));
    };
};


