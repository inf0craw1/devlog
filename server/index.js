const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");

const db = require("./db");
const UserController = require("./models/UserController");
const port = 4000;
const cors = require("cors");
app.use(cors());
app.use("/users", UserController);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


server.listen(port);
