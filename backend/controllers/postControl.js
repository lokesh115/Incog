const Comments = require('../models/Comments');
const Posts = require('../models/Posts');

getPost = async (req,res)=>{
    /*
    res.json({
        posts: {
            title: 'My first post',
            description: 'Random data you should not access'
        }
    })
    */
    let allPosts = await Posts.find({isAllowed: true})
    allPosts = allPosts.reverse();
    //console.log(allPosts);
    res.json(allPosts);

}

getUserPost = async (req,res)=>{
    let uname = req.body.name;
    let userPosts = await Posts.find({name:uname});
    userPosts = userPosts.reverse();
    try{
        res.json(userPosts);
    }catch(err){
        res.json({"message":err});
    }
}

addPost = async (req,res)=>{
    const newPost = new Posts({
        name: req.body.name,
        title: req.body.title,
        story: req.body.story,
        isAllowed: req.body.isAllowed 
    });
    try{
        const savedPost = await newPost.save(newPost);
        res.send({message: "Post Added!"});
    }catch(err){
        res.status(400).send(err);
    }
}

deletePost = async(req,res)=>{
    const id = req.body._id;
    const removedPost = await Posts.deleteOne({_id:id});
    try{
        res.json({"message":"Post Deleted"});
    }catch(err){
        res.json({"message":err});
    }
}

addPost = async (req,res)=>{
    const newPost = new Posts({
        name: req.body.name,
        title: req.body.title,
        story: req.body.story,
        isAllowed: req.body.isAllowed 
    });
    try{
        const savedPost = await newPost.save(newPost);
        res.send({message: "Post Added!"});
    }catch(err){
        res.status(400).send(err);
    }
}

addComment = async(req,res)=>{
    const newComment = new Comments({
        postId : req.body.postId,
        comment : req.body.comment,
        name : req.body.name
    });
    try{
        const savedComment = await newComment.save(newComment);
        res.send({message: "Comment Added!"});
    }catch(err){
        res.status(400).send(err);
    }
}

viewComment = async(req,res)=>{
    let postComments = await Comments.find({postId:req.body.postId});
    postComments = postComments.reverse();
    try{
        res.json(postComments);
    }catch(err){
        res.json({"message":err});
    }   
}

deleteComment = async(req,res)=>{
    const id = req.body._id;
    const removedComment = await Comments.deleteOne({_id:id});
    try{
        res.json({"message":"Comment Deleted"});
    }catch(err){
        res.json({"message":err});
    }
}

module.exports.getPost = getPost;
module.exports.addPost = addPost;
module.exports.getUserPost = getUserPost;
module.exports.deletePost = deletePost;
module.exports.addComment = addComment;
module.exports.viewComment = viewComment;
module.exports.deleteComment = deleteComment;