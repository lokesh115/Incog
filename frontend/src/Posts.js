import React from "react";
import './App.css';
import ViewStory from "./components/ViewStory";
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";


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