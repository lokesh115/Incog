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
    const allPosts = await Posts.find({isAllowed: true})
    //console.log(allPosts);
    res.json(allPosts);

}

getUserPost = async (req,res)=>{
    let uname = req.body.name;
    const userPosts = await Posts.find({name:uname});
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

module.exports.getPost = getPost;
module.exports.addPost = addPost;
module.exports.getUserPost = getUserPost;
module.exports.deletePost = deletePost;