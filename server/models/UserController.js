const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const User = require("./User");

router.post("/join", (req, res) => {
    console.log(req.body);
    User.create({
        id: req.body.id,
        password: req.body.password,
        name: "default-name"
    },
    function(err, user){
        if ( err ) return res.status(500).send("User create error" + err);
        return res.status(200).send(user);
    });
});

router.post("/login", (req, res) => {
    console.log(req.body);
    User.findOne( {id: req.body.id, password: req.body.password},
        function(err, user){
            if( err ) return res.status(500).send("User found error" + err);
            if(!user) return res.status(404).send("User Not found");
            return res.status(200).send(user);
            
        }
    )}
);

module.exports = router;