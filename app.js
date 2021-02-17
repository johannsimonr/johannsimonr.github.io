const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes/routes.js");
const port = 8040;
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.use(bodyParser.json());

app.listen(port, function () {
    console.log(`Hört auf Port http://localhost:${port}`);
});

app.use(router);

