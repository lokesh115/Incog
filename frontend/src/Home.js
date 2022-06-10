import React, { useState } from "react";
import Posts from "./Posts";
import './App.css';

function Home(){
    const [users, setUsers] = useState([
        { title: "lokesh", url: "Hello there"},
        { title: "gowtham", url: "i am here"},
        { title: "Naveen", url: "hey hi"},
        { title: "Naveen", url: "hey hi"},
        { title: "Naveen", url: "hey hi"},
        { title: "Naveen", url: "hey hi"},
        { title: "Naveen", url: "hey hi"}

      ]);
    
      return (
        <div className="app">
          {users.map(user => (
            <div>
            <Posts  title={user.title} url={user.url}/>
            <br></br>
            </div>
          ))}
         
        </div>
      );
}

export default Home;