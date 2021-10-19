const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");




const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));


app.get("/", function (req, res) {

    // var day = new Date();
    // var today = day.getDay();
    // var dayType = "";

    // var weekday = new Array(7);
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thrusday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";



    // if (today === 6 || today === 0){
    //     dayType = weekday[today];

    // }
    // else{

    //     dayType = weekday[today];
    // }

  const today = date.getDate();

    res.render("list", {
        listTitle: today,
        addNewItems: items
    });

});

app.post("/", function (req, res) {

    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        addNewItems: workItems
    });
});

app.get("/about", function(req, res){
    res.render("about");
});

app.post("/work", function (req, res) {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})


app.listen(process.env.PORT || 3000, function () {
    console.log("App is listen at port 3000.");

});