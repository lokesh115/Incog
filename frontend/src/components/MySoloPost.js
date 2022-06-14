import React,{useState} from "react";
import '../App.css';

function MySoloPost(props){
    const [show,setShow] = useState({
        button:"View",
        value:false
    });

    const showHandler = ()=>{
        if(show.value){
            setShow({...show,button: "View",value:false});
        }
        else{
            setShow({...show,button: "Hide",value:true});
        }
    }

    const deleteHandler = ()=>{
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

    return(
        <div className="posts">
          <h2>{props.name}</h2>
          <h3>{props.title}</h3>
          <p>{props._id}</p>
          <button className='delete' onClick={showHandler}>{show.button}</button>
          <button className="delete" onClick={deleteHandler}>Delete</button>
          {show.value && 
          <div className="postStory">
            <p>{props.story}</p>
          </div>}
        </div>
    );
}

export default MySoloPost;