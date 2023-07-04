const express = require("express");
const router = express.Router();
const { fetchscore, idscores } =require("../controller/controll")

// fetch data from database
router.get('/stdscores', fetchscore);

// fetch data from database by id
router.get('/stdscoresid/:id', idscores);

module.exports=router;