import React,{useState} from "react";
import '../App.css';


function ViewComment(props){


    const [isOwner,setIsOwner] = useState(props.user===props.postedUser);
    const [deleting,setDeleting] = useState(false);
    const delCommReq = {
        method:"DELETE",
        headers:{
            'Content-Type': 'application/json',
            'auth-token' : props.token
        },
        body:JSON.stringify({
                "_id" : props._id,
            })
    };

    const deteleHandler = ()=>{
        fetch("https://incog-back.herokuapp.com/api/posts/delComment",delCommReq)
        .then(response=>response.json())
        .then(data=>console.log(data))

        setIsOwner(false);
        setDeleting(true);
    }

    return(
        <div className="comments">
            {!deleting &&
                <div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p style={{fontSize:"10px",color:"blue"}}>{props.postedUser}</p>
                    <p style={{fontSize:"6px"}}>{props.time}</p> 
                </div>
                <p style={{fontSize:"8px"}}>{props.message}</p>
                {isOwner &&
                    <button onClick={deteleHandler}>Delete</button>}
                </div>}
            
            {
                deleting && 
                    <p>Deleted</p>
            }
        </div>
    )
}

export default ViewComment;