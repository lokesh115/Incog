import React from "react";
import './App.css';

function Posts(props){

    
    return(
        <div className="posts">
          <h3>{props.title}</h3>
          {/*
          <p>View {props.url}</p>-->*/}
          <p>{props.story}</p>
        </div>
    );
}

export default Posts;