const express = require("express");
const router = express.Router();

// render about template on request
router.get('/', (req, res) => {
    res.render("about");
})

module.exports = router;