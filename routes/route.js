var express = require('express'),
    getPost = require("../controllers/controller").getPost,
    getPosts = require("../controllers/controller").getPosts,
    addPost = require("../controllers/controller").addPost,
    deletePost = require("../controllers/controller").deletePost,
    updatePost = require("../controllers/controller").updatePost;
    Router = express.Router();

Router.get("/posts/new", function(req, res){
        res.render("postNew");
    });
Router.get("/posts/:id/edit", function(req,res){
        res.render("postsEdit");
    });
Router.get("/posts", getPosts);
Router.get("/posts/:id", getPost);
Router.post("/posts", addPost);
Router.put("/posts/:id", updatePost);
Router.delete("/posts/:id", deletePost);


Router.get("/", function(req,res){
    res.redirect("/posts");
})

module.exports = Router;