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

addPost = async (req,res)=>{
    const newPost = new Posts({
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

module.exports.getPost = getPost;
module.exports.addPost = addPost;