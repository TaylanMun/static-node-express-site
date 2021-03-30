const express = require("express");
const router = express.Router();

// get projects from the data file
const { projects } = require("../data.json");

// render index template on request with list of projects
router.get('/', (req, res) => {
    res.render("index", { projects });
})

module.exports = router;