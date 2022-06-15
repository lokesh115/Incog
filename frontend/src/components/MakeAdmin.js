import React,{useState} from "react";

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
            <h1>Make Admin!!!</h1>
            <p>Enter a username!! And make them an admin!!</p>
            <input type="text" placeholder="Enter username" onChange={e=>{setUname(e.target.value)}}/>
            <button onClick={makeAdminHandler}>Approve</button>
            <p>{message}</p>
        </div>
    );
}

export default MakeAdmin;