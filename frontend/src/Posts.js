import React from "react";
import './App.css';

function Posts(props){
    return(
        <div className="posts">
          <h3>{props.title}</h3>
          <p>{props.url}</p>
          <h3>number of likes</h3>
        </div>
    );
}

export default Posts;