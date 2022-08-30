import { Outlet, Link } from "react-router-dom";
import React from "react";
import {Button,Nav,Navbar,Container} from "react-bootstrap";

const Layout = ({isAdmin,Logout}) => {
  console.log(isAdmin);
  return (
    <div className='login'>
      <nav> 
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav mx-auto">
            <Link to="/"><Button variant="primary">Home</Button> </Link>
            <Link to="/createPost"><Button variant="primary">New Post</Button></Link>
            <Link to="/myPosts"><Button variant="primary">My Posts</Button></Link>
            {isAdmin &&
            <Link to="/makeAdmin"><Button>Make Admin</Button></Link>}
            <Button variant="primary" onClick={Logout}>Logout</Button>
          </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;