const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.static("public"));

const PORT = process.env.PORT || 5050;

app.use(cors());

app.use(express.json());

const moviesRoute = require("./routes/movies-route");
app.use("/api/movies", moviesRoute);


app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});