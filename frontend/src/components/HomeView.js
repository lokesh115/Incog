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
      fetch(process.env.REACT_APP_API_URL.concat("api/posts/view"),reqData)
      .then(response=>response.json())
      .then(posts=>{setUsers(posts)});
      //console.log(users);
    });
    
    return (
        <div className="home">
          <h2>Welcome, {uname}</h2>
          {users.map(user => (
            <div>
            <Posts title={user.title} story={user.story}/>
            <br/>
            </div>
          ))}
        </div>
      );
}

export default HomeView;