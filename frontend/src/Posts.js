import React from "react";
import './App.css';
import {Link} from "react-router-dom";

function Posts(props){
    return(
        <div className="posts">
          <h2>{props.name}</h2>
          <h3>{props.title}</h3>
          
          {//<p>{props.story}</p>;
          }
          <Link to="/viewStory" state={props}>Click</Link>
        </div>
    );
}

export default Posts;