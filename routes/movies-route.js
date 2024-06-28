const router = require("express").Router();
const fs = require("fs");

// function to read data file
function readMovies() {
    const moviesData = fs.readFileSync("./data/movies.json");
    const parsedData = JSON.parse(moviesData);
    return parsedData;
}

// GET route /api/movies
router.get("/", (_req, res) => {
    const movies = readMovies();
    res.json(movies);
})

// GET endpoint to retrieve random movie
// router.get("/random", (_req, res) => {
//     const movies = readMovies();

//     if (movies.length === 0) {
//         res.status(404).json({
//             error: "Error finding movies"
//         });
//         return
//     }

//     const randomIndex = Math.floor(Math.random() * movies.length);
//     const randomMovie = movies[randomIndex];

//     res.json(randomMovie);
// })

module.exports = router;