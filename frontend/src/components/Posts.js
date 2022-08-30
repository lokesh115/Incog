import React,{useState} from "react";
import '../App.css';
import ViewComment from './ViewComment'
import {Button,Card,FormControl,InputGroup} from 'react-bootstrap';

function Posts(props){

    const [show,setShow] = useState({
        button:"View",
        value:false
    });

    const [comments,setComments] = useState([{"date":"date","time":"time"}]);

    const [commentView,setCommentView] = useState(false);

    const [newComment, setNewComment] = useState('');


    const deleteHandler = ()=>{
      console.log(props.isAdmin);
      const req = {
          method:"DELETE",
          headers:{
              'Content-Type': 'application/json',
              'auth-token' : props.token
          },
          body:JSON.stringify({
                  "_id" : props.id
              })};
          fetch("https://incog-back.herokuapp.com/api/posts/delPost",req)
          .then(response=>response.json())
          .then(data=>{
              console.log(data.message);
              });
      
  }

    const commentReq = {
      method:"POST",
      headers:{
          'Content-Type': 'application/json',
          'auth-token' : props.token
      },
      body:JSON.stringify({
              "postId" : props.id,
          })
  };

    const clickHandler = ()=>{
      if(show.value){
          setShow({...show,button: "View",value:false});
      }
      else{
          setShow({...show,button: "Hide",value:true});
      }
    }
    const addCommentReq = {
      method:"POST",
      headers:{
          'Content-Type': 'application/json',
          'auth-token' : props.token
      },
      body:JSON.stringify({
              "postId" : props.id,
              "comment" : newComment,
              "name" : props.user,
          })
  };
  const addNewComment = ()=>{
    console.log(newComment);
    fetch('https://incog-back.herokuapp.com/api/posts/addComment',addCommentReq)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
      });
      viewCommentHandler();

  }

  const viewCommentHandler = ()=>{
    setCommentView(!commentView);
    setComments([{"comment":"No Comments Yet"}]);
    fetch('https://incog-back.herokuapp.com/api/posts/viewComment',commentReq)
    .then((response)=>response.json())
    .then((data)=>{if(data.length>0){
      setComments(data);
    }});
  }

    return(
          <Card className="post" style={{objectFit:"cover",maxWidth: "50rem", borderRadius:"0.5cm"}}>
          <div style={{marginBottom:"5%", justifyContent:"left"}}>
          <h3 style={{fontSize:"18px",display: "inline", wordWrap:"break-word"}}>{props.title} <span className="span1" style={{fontSize:"12px",display: "inline", wordWrap:"break-word"}}>Posted by {props.name}</span></h3>
          <h1 style={{fontSize:"10px",display: "inline", wordWrap:"break-word"}}>{props.date} at {props.time}</h1>
          </div>
          {show.value && 
          <div>
            <Card style={{objectFit:"cover"}}>
            <p style={{marginTop:"20px", justifyContent:"left"}}>{props.story}</p>
            </Card>
            
            </div>
          }

          <Button className='btn btn-outline-primary' style={{fontSize:"12px",marginTop:"5%"}}  onClick={clickHandler}>{show.button} Story</Button>
          {props.isAdmin && <Button variant='btn btn-outline-primary' style={{fontSize:"12px",marginTop:"5%"}} onClick={deleteHandler}>Delete</Button>}
          <Button className='btn btn-outline-primary' style={{fontSize:"12px",marginTop:"5%"}}  onClick={viewCommentHandler}>Comments</Button>

          {commentView && 
            <div>
              <InputGroup className="mb-3" style={{marginTop:"5%"}}>
              <FormControl
                placeholder="Add comment"
                aria-label="Recipient's username"
                aria-describedby="comment-addon"
                style={{borderRadius:"2cm",backgroundColor:"#c3d7e8"}}
                onChange={(e)=>setNewComment(e.target.value)}
              />
            <Button variant="outline-secondary" id="comment-addon" onClick={addNewComment}>
            POST
            </Button>
            </InputGroup>
            <ul style={{margin:"0%", padding:"0%", textAlign:"center"}}>
              {comments.map(comm => (
                
                <li key={comm._id+5}><ViewComment message={comm.comment} postedUser={comm.name} token={props.token} _id={comm._id} user={props.user}/></li>
    
              ))}
            </ul>
          </div>}
          </Card>
    );
}

export default Posts;