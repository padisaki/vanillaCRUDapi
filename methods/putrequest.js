//UPDATE EXISTING MOVIES
const requestBodyParser = require("../utils/bodyparser");
const writeToFile = require("../utils/write-to-file");


module.exports = async (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseUrl);
    let id = req.url.split("/")[3];
    //const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/id);

    if (baseUrl === "/api/movies/" /*&& regexV4.test(id*/) {
        try {
            let body = await requestBodyParser(req)
            const index = req.movies.findIndex((movie) => {
                return movie.id === id
            });
    
            if (index === -1) {
                res.statusCode = 404;
                res.write(
                    JSON.stringify("MOVIE NOT FOUND")
                )
                res.end();
            } else {
                req.movies[index] = {id, ...body};
                writeToFile(req.movies);
                res.writeHead(200, {"Content-Type": "application/json"});
                res.end(JSON.stringify(req.movies[index]))
            }
        } catch (err) {
            console.log(err);
            res.writeHead(400, { "Content-type": "application/json" });
            res.end(JSON.stringify("ERROR 400: VALIDATION FAILED - INVALID REQUEST BODY"));
        }
    }  else {
        res.writeHead(404, { "Content-type": "application/json" });
        res.end(JSON.stringify("ERROR 404: NOT FOUND - ROUTE NOT FOUND"));
    };

};