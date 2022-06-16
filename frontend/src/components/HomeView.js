import React, { useState,useEffect } from "react";
import Posts from "./Posts";
import '../App.css';
import {Card} from 'react-bootstrap'; 

function HomeView({uname,token,isAdmin}){
    const [users, setUsers] = useState([]);
    let reqData = {
      method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'auth-token': token }
    }

    useEffect(()=>{
      fetch(("https://incog-back.herokuapp.com/api/posts/view"),reqData)
      .then(response=>response.json())
      .then(posts=>{setUsers(posts)});
    });
    
    return (
        <div>
          <ul style={{listStyleType:"None"}}>
            {users.map(user => (
              <Card className="p-3 mb-2 border border-info" style={{width: "26rem"}}>
                <li key={user._id} ><Posts name={user.name} title={user.title} story={user.story} id={user._id} time={user.time} token={token} user={uname} isAdmin={isAdmin}/></li>
              </Card>      
            ))}
          </ul>
          
        </div>
      );
}

export default HomeView;