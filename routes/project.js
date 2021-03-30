const express = require("express");
const router = express.Router();
const createError = require("http-errors");

const { projects } = require("../data.json");

router.get("/", (req, res) => {
    return res.redirect("/projects/0");
})

router.get("/:id", (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find(({id}) => id.toString() === projectId);
    if (project) {
        res.render("project", {project});
    } else {
        next(createError(404, 'We can\'t seem to find the project page you requested does\'t exists'));
    }
})

module.exports = router;