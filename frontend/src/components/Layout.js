import { Outlet, Link } from "react-router-dom";
import React from "react";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <li key="HomeKey"><Link to="/">Home </Link></li>
            <li key="NewPostKey"><Link to="/createPost">New Post</Link></li>
            <li key="MyPosts"><Link to="/myPosts">My Posts</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;