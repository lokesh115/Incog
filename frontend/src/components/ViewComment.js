import React,{useState} from "react";
import '../App.css';
import {Button,Card} from "react-bootstrap";

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
        <div className="" style={{}}>
            {!deleting &&
                <Card className="comments" style={{width: "42rem"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p style={{fontSize:"14px"}}><span>{props.postedUser} :</span> {props.message}</p>
                    <p style={{fontSize:"8px"}}>{props.time}</p> 
                </div>
                {
                deleting && 
                    <p className="comm">Deleted</p>
            }
                
                {isOwner &&
                    <Button className="btn-success btn-lg float-right" variant="outline-light" style={{ fontSize:"12px"}} onClick={deteleHandler}>Delete</Button>}
                </Card>}
        </div>
    )
}

export default ViewComment;