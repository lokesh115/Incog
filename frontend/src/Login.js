import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import './App.css';


function Login() {
  
      const[user , setUser] = useState({name: ""});
      const[error , setError] = useState("");
      

      const Login =
        (details) =>{
            console.log(details);
  
            if (details.status){
              console.log("Logged in");
              setUser({"name": details.name})
  
            }else {
             console.log(details.message);
             setError(details.message);
            }
              
        };
  
      const Logout = () =>{
          setUser({name: ""});
          console.log("Logout");
      }
      return(
          <div className='App'>
              {(user.name !="") ? (
                <div className="welcome">
                <h2>Welcome, <span>{user.name}</span></h2>
                <button onClick={Logout}>Logout</button>
                </div>
            ): (
             <LoginForm Login={Login} error={error}/>   
            )}

          </div>
          
          
      ); 
      
  }

export default Login;