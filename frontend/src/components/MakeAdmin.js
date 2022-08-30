import React,{useState} from "react";
import {FormControl,InputGroup,Button,Card} from 'react-bootstrap'

function MakeAdmin(props){

    const [uname,setUname] = useState("")
    const [message,setMessage] = useState("")
    const adminReq = {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'auth-token': props.token },
        body: JSON.stringify({
            "email" : uname,
        }) }

    const makeAdminHandler = ()=>{
        fetch("https://incog-back.herokuapp.com/api/user/makeAdmin",adminReq)
        .then(response=>response.json())
        .then(data=>setMessage(data.message));
    }
    return(
        <div>
            <br/>
            <h1>Make Admin!!!</h1>
            <br/>
            <p>Enter a username!! And make them an admin!!</p>
            <Card style={{objectFit:"cover",maxWidth:"40rem"}}>
            <InputGroup className="mb-3" style={{marginTop:"5%",maxWidth:"30rem"}}>
              <FormControl
                placeholder="Enter username"
                aria-describedby="comment-addon"
                style={{borderRadius:"2cm",backgroundColor:"#c3d7e8"}}
                onChange={e=>{setUname(e.target.value)}}
              />
            <Button variant="outline-secondary" id="comment-addon" onClick={makeAdminHandler}>
            Approve
            </Button>
            </InputGroup>
            </Card>
            <p>{message}</p>
        </div>
    );
}

export default MakeAdmin;