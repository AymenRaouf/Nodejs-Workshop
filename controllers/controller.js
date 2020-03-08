var Post = require("../models/db"),
    bodyParser = require('body-parser'),
    express = require("express"),
    app = express(),
    methodOverride = require("method-override");
    app.use(methodOverride("_method"));


getPosts = function(req,res){
    Post
        .find({}, function(err, posts){
            if(err) console.log("couldn't find posts");
            else res.render("posts",{ps:posts});
        });
}

getPost = function(req,res){
    var title = req.params.id;
    console.log(title)
    Post
        .find({title: title}, function(err, post){
            if(err) console.log(err);
            else res.render("post", {p : post});
    })

}

addPost = function(req,res){
    var post = {
        title : req.body.title,
        author : req.body.author,
        content : req.body.content,
        upvotes : req.body.upvotes
    };
    Post
        .create(post, function(err, post){
            if(err) console.log(err);
            else res.send("inserted");
    })
}

updatePost = function(req,res){
    var oldPosttitle = req.params.id,
        newPost = req.body.post;
    Post
        .update({title: oldPosttitle},newPost, function(err, post){
            if(err) console.log(err);
            else res.send("updated");
        })
}

deletePost = function(req,res){
    var title = req.params.id;
    console.log(title)
    Post
        .remove({title: title}, function(err, post){
            if(err) console.log(err);
            else res.send("deleted");
        })
}

module.exports = {getPosts, getPost, addPost, updatePost, deletePost}