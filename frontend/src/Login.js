import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Home from './Home';
import './App.css';
//import {Card} from 'react-bootstrap';

function Login() {
  
      const[user , setUser] = useState({name: "", token:"",isAdmin:false});
      const[error , setError] = useState("");
      

      const Login =
        (details) =>{
            //console.log(details);
  
            if (details.status){
              console.log("Logged in");
              setUser({
                "name": details.email,
                "token": details.JWT_token,
                "isAdmin": details.isAdmin
              })
              console.log(details);
  
            }else {
             //console.log(details.message);
             setError(details.message);
            }
              
        };
  
      const Logout = () =>{
          setUser({
            name: "",
            token:""});
          console.log("Logged out");
      }
      return(
          <div className='App'>
              {(user.name !=="") ? (
                <div>
                <Home uname={user.name} token={user.token} isAdmin={user.isAdmin} Logout={Logout}/>
                </div>
            ): (
             <LoginForm Login={Login} error={error}/>   
            )}

          </div>
          
          
      ); 
      
  }

export default Login;