mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/stackoverflow",
    {useNewUrlParser: true, useUnifiedTopology: true});

var PostSchema = mongoose.Schema({
    title : String,
    publishingDate : {
        type : Date,
        default : Date.now
    },
    upvotes : Number,
    content : String,
    author : String
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;