import React, {useState} from 'react';
import LoginForm from './components/SignUpForm';
import './App.css';
import SignUpForm from './components/components/SignupForm';


function SignUp() {
      }
  
      const[user , setUser] = useState({name: "" , email: ""});
      const[error , setError] = useState("");
  
      const SignUp =  details =>{
          console.log(details);

          if (details.email == adminUser.email && details.password == adminUser.password){
            console.log("Sign Up");
            setUser({
                name: details.name,
                email: details.email
            });

          }
            
      }
  
      const redirect = () =>{
          setUser({name: "",email: ""});
          console.log("go to login");
      }
      return{(
          <div className='App'>
              {(user.email !="") ? (
                <div className="welcome">
                <h2>account created,<span>{user.name}</span></h2>
                <button onClick={redirect}>Go to login</button>
                </div>
            ): (
             <SignUpForm Login={Login} error={error}/>  
            )}
            
          </div>
          
          
      );
            } 
      


export default Signup;