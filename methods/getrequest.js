module.exports = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseUrl);
    let id = req.url.split("/")[3];
    //const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/id);

    if (req.url === "/api/movies") {
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    // } else if (!regexV4.test(id)) {
    //     res.writeHead(400, { "Content-type": "application/json" });
    //     res.end(JSON.stringify("ERROR 400: VALIDATION FAILED - INVALID UUID"));
    } else if (baseUrl === "/api/movies/" /*&& regexV4.test(id*/) {
            //fetch an individual movie
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        let filteredMovie = req.movies.filter((movies) => {
            return movies.id === id;
        });

        if (filteredMovie.length > 0) {
            res.statusCode = 200;
            res.write(JSON.stringify(filteredMovie));
            res.end();
        } else {
            res.statusCode = 404;
            res.write(JSON.stringify("ERROR 404:NOT FOUND - MOVIE NOT FOUND"));
            res.end();
        }

    } else {
        res.writeHead(404, { "Content-type": "application/json" });
        res.end(JSON.stringify("ERROR 404: NOT FOUND - ROUTE NOT FOUND"));
    };
};


