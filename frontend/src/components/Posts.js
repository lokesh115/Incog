import React,{useState} from "react";
import '../App.css';
import ViewComment from './ViewComment'

function Posts(props){

    //console.log(props);

    const [show,setShow] = useState({
        button:"View",
        value:false
    });

    const [comments,setComments] = useState([{"comment":"No Comments Yet"}]);

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
            fetch('https://incog-back.herokuapp.com/api/posts/viewComment',commentReq)
            .then((response)=>response.json())
            .then((data)=>{
              console.log(data);
              if(data.length>0) setComments(data); 
            });
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
      clickHandler();

  }

    return(
        <div className="posts">
          <div style={{display: "flex", justifyContent: "space-between"}}>
          <h2>{props.name}</h2>
          <p style={{fontSize:"8px"}}>{props.time}</p>
          </div>
          <h3>{props.title}</h3>
          {//<p>{props.story}</p>;
          }
          <button className='delete' onClick={clickHandler}>{show.button}</button>
          {props.isAdmin && <button className="delete" onClick={deleteHandler}>Delete</button>}
          {show.value && 
          <div className="postStory">
            <p>{props.story}</p>
            <input className="form-control" type="text" placeholder="Add comment" onChange={(e)=>setNewComment(e.target.value)}/>
            <button className = "btn" onClick={addNewComment}>ADD</button>
            <ul className="postsList">
              {comments.map(comm => (
                <li key={comm._id+5}><ViewComment message={comm.comment} postedUser={comm.name} time={comm.time} token={props.token} _id={comm._id} user={props.user}/></li>
              ))}
            </ul>
          </div>}
        </div>
    );
}

export default Posts;