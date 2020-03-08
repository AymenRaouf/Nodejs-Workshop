var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
    app.use(bodyParser.urlencoded({extended:true}));

    var routes = require("./routes/route");

    methodOverride = require("method-override");

    app.use(methodOverride("_method"));

app.use("/", routes);


app.set("view engine", "ejs");
//app.use(express.static("public"));

app.listen(8080, function(){
    console.log("Server is running...")
})