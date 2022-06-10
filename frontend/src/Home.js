import React, { useState,useEffect } from "react";
import Posts from "./Posts";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./components/HomeView";
import AddPostForm from "./components/AddPostForm";
import './App.css';

function Home({uname,token}){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomeView uname={uname} token={token} />} />
        <Route path="createPost" element={<AddPostForm uname={uname} token={token} />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
    
      
}

export default Home;