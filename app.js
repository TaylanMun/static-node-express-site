const express = require("express");
const path = require("path");
const createError = require("http-errors");
// Initialize our express app
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Add static middleware
app.use("/static", express.static(path.join(__dirname, "public")));

// define routes
const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const projectsRouter = require("./routes/project");

// add routes
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/projects", projectsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404, 'We can\'t seem to find the page you\'re looking for.'));
});

// global catch error
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.render("page-not-found", { err });
    } else {
        res.status(err.status || 500).render("error", { err });
    }
});

// Log server started successfully and listening port 3000
app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
