import React, { useState} from "react";
import '../App.css';
import '../index.css';
import {useNavigate} from 'react-router-dom';
import {Button,Form,Card} from 'react-bootstrap';

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
        <Card style={{width:"24rem"}}>
        
        <Form onSubmit={submitHandler}>
                <h2 style={{marginBottom:"7%"}}>Create new post!</h2>

                <Form.Group style={{marginBottom:"5%"}}>
                    <Form.Control placeholder="Title" type="title" name="title" id= "title" onChange={e => setNewPost({...newPost,title: e.target.value })} value={newPost.title}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control style={{lineHeight:"2em",rowGap:'7'}} placeholder="Description" type="story" name="story" id= "story" onChange={e => setNewPost({...newPost,story: e.target.value })} value={newPost.story}/>
                </Form.Group>

                {!submitting && <Button style={{marginTop:"5%"}} type="submit">POST</Button>}

                {submitting &&
                <div className="submit_notify">Posted</div>}
        </Form>  
        </Card>
    )
}


export default AddPostForm;