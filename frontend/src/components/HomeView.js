import React, { useState,useEffect } from "react";
import Posts from "../Posts";
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
        <div className="home">
          <h2>Welcome, {uname}</h2>
          <ul>
            {users.map(user => (
              <li key={user._id}><Posts name={user.name} title={user.title} story={user.story}/></li>
            ))}
          </ul>
          
        </div>
      );
}

export default HomeView;