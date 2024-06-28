const express = require("express");
const app = express();
const PORT = process.env.PORT;
const fs = require("fs");




app.list(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});