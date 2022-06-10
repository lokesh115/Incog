import { Outlet, Link } from "react-router-dom";
import React from "react";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <Link to="/">Home </Link>
            <br/>
            <Link to="/createPost"> New Post</Link>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;