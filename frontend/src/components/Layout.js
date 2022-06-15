import { Outlet, Link } from "react-router-dom";
import React from "react";
const Layout = ({isAdmin}) => {
  console.log(isAdmin);
  return (
    <div className='login'>
      <nav>
        <div className="btn-group">
            <Link to="/"><button>Home</button> </Link>
            <Link to="/createPost"><button>New Post</button></Link>
            <Link to="/myPosts"><button>My Posts</button></Link>
            {isAdmin &&
            <Link to="/makeAdmin"><button>Make Admin</button></Link>}
        </div>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;