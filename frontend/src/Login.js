import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Home from './Home';
import './App.css';


function Login() {
  
      const[user , setUser] = useState({name: "", token:""});
      const[error , setError] = useState("");
      

      const Login =
        (details) =>{
            //console.log(details);
  
            if (details.status){
              console.log("Logged in");
              setUser({
                "name": details.email,
                "token": details.JWT_token
              })
  
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
          <div>
              {(user.name !=="") ? (
                <div>
                <Home uname={user.name} token={user.token}/>
                <button className='logout' onClick={Logout}>Logout</button>
                </div>
            ): (
             <LoginForm Login={Login} error={error}/>   
            )}

          </div>
          
          
      ); 
      
  }

export default Login;