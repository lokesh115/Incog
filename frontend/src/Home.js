import React from "react";
import Layout from "./components/Layout";
import {Routes, Route } from "react-router-dom";
import HomeView from "./components/HomeView";
import AddPostForm from "./components/AddPostForm";
import MyPosts from "./components/MyPosts";
import './App.css';

function Home({uname,token}){
  return(
      <Routes>
        <Route exact path="/" element={<Layout />}>
        <Route index path='/' element={<HomeView uname={uname} token={token} />} />
        <Route exact path="/createPost" element={<AddPostForm uname={uname} token={token}/>} />
        <Route exact path="/myPosts" element={<MyPosts uname={uname} token={token}/>} />
        
      </Route>
      </Routes>
  );
    
      
}

export default Home;