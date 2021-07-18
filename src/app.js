const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 3000;

const staticPath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials")

// To set the view engine
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

// Build middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/weather", (req, res) => {
    res.render('weather')
})

app.get("*", (req, res) => {
    res.render('404page', {
        errorMsg: "Opps! page not found, Click Here to go back"
    })
})

app.listen(port, () => {
    console.log(`Listening the port no ${port}`);
})
