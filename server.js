var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
var db = require("./models");
var PORT = process.env.PORT || 3000;



var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  });
});
