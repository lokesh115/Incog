import React from "react";
import Layout from "./components/Layout";
import {Routes, Route } from "react-router-dom";
import HomeView from "./components/HomeView";
import AddPostForm from "./components/AddPostForm";
import MyPosts from "./components/MyPosts";
import MakeAdmin from "./components/MakeAdmin";
import './App.css';

function Home({uname,token,isAdmin}){
  return(
      <Routes>
        <Route exact path="/" element={<Layout isAdmin={isAdmin}/>}>
        <Route index path='/' element={<HomeView uname={uname} token={token} isAdmin={isAdmin} />} />
        <Route exact path="/createPost" element={<AddPostForm uname={uname} token={token} isAdmin={isAdmin}/>} />
        <Route exact path="/myPosts" element={<MyPosts uname={uname} token={token} isAdmin={isAdmin}/>} />
        {isAdmin &&
        <Route exact path="/makeAdmin" element={<MakeAdmin uname={uname} token={token} isAdmin={isAdmin}/>} />}
        
      </Route>
      </Routes>
  );
    
      
}

export default Home;