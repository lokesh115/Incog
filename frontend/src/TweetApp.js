import React, { useState } from "react";
import Tweet from "./Tweet";
import './App.css';

function TweetApp(){
    const [users, setUsers] = useState([
        { name: "lokesh", message: "Hello there"},
        { name: "gowtham", message: "i am here"},
        { name: "Naveen", message: "hey hi"}
      ]);
    
      return (
        <div className="app">
          {users.map(user => (
            <Tweet  name={user.name} message={user.message}/>
          ))}
         
        </div>
      );
}

export default TweetApp;