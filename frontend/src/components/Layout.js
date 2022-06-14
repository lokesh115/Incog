import { Outlet, Link } from "react-router-dom";
import React from "react";
const Layout = () => {
  return (
    <div className='login'>
      <nav>
        <ul className="postsList">
            <li key="HomeKey"><Link to="/home/*">Home </Link></li>
            <li key="NewPostKey"><Link to="/createPost">New Post</Link></li>
            <li key="MyPosts"><Link to="/myPosts">My Posts</Link></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;