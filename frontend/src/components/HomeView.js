import React, { useState,useEffect } from "react";
import Posts from "./Posts";
import '../App.css';

function HomeView({uname,token}){
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
          <h2 style={{textAlign: "center", fontWeight: "lighter" ,fontFamily: "Brush Script MT, Brush Script Std, cursive"}}>Welcome, {uname}</h2>
          <ul className="postsList">
            {users.map(user => (
              <li key={user._id}><Posts name={user.name} title={user.title} story={user.story} id={user._id} time={user.time} token={token} user={uname}/></li>
            ))}
          </ul>
          
        </div>
      );
}

export default HomeView;