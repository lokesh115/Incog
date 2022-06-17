import React,{useState} from "react";
import '../App.css';
import {Button,Card} from "react-bootstrap";

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
        <Card className="post" style={{objectFit:"cover",width: "50rem", borderRadius:"0.5cm"}}>

          <div style={{marginBottom:"5%", justifyContent:"left"}}>
          <h3 style={{fontSize:"18px",display: "inline", wordWrap:"break-word"}}>{props.title}</h3>
          <h2 style={{fontSize:"12px",display: "inline", wordWrap:"break-word"}}><light>Posted</light> by {props.name}</h2>
          <h1 style={{fontSize:"10px",display: "inline", wordWrap:"break-word"}}>{props.time}</h1>
          </div>
          <Button className='btn btn-outline-primary' style={{fontSize:"12px",marginTop:"5%"}}  onClick={showHandler}>{show.button}</Button>
          <Button className='btn btn-outline-primary' style={{fontSize:"12px",marginTop:"5%"}}  onClick={deleteHandler}>Delete</Button>
          {show.value && 
          <div className="postStory">
            <Card style={{objectFit:"cover"}}>
            <p style={{marginTop:"20px", justifyContent:"left"}}>{props.story}</p>
            </Card>
          </div>}
          
        </Card>


    );
}

export default MySoloPost;