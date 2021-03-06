import React, { useState} from "react";
import '../App.css';
import '../index.css';
import {useNavigate} from 'react-router-dom';

function AddPostForm({uname,token}){
    const [newPost, setNewPost] = useState({
        name : "",
        title : "",
        story : "" ,
        token: "", 
        message:"", 
        JWT_token:""
    });

    const [submitting, setSubmitting] = useState(false);

    const post_data = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'auth-token': token },
        body: JSON.stringify({
            "name" : uname,
            "title" : newPost.title,
            "story" : newPost.story,
        }) }

    const submitHandler = (e)=>{
        e.preventDefault();
        setSubmitting(true);
        //console.log(newPost)
        //console.log(uname,token);
        fetch("https://incog-back.herokuapp.com/api/posts/add",post_data)
        .then(response => response.json())
        .then(data=>{
            //console.log(data.message);
            setNewPost({...newPost,message:data.message});
            console.log("Post Added");
        })
        navigate(-1)
        //Login(details);
        
        
    };
    
    const navigate = useNavigate();

    return(
        <div>
        
        <form onSubmit={submitHandler}>
        
            <div className="form-inner">
                <button className="logout" onClick={() => navigate(-1)}>Home</button>
                
                <h2>Fill the form</h2>

                <div className="form-group">
                    <label htmlFor= "title">Title:</label>
                    <input type="title" name="title" id= "title" onChange={e => setNewPost({...newPost,title: e.target.value })} value={newPost.title}/>

                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="story" name="story" id= "story" onChange={e => setNewPost({...newPost,story: e.target.value })} value={newPost.story}/>

                </div>

                {!submitting && <input type="submit" value="POST"/>}

                {submitting &&
                <div className="submit_notify">Posted</div>
            }
            </div>
        </form>  
        </div>
    )
}


export default AddPostForm;