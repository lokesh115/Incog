import React, {useState,useEffect} from 'react';
import '../index.css';

function LoginForm({Login , error}) {

    const [details, setDetails] = useState({
        name : "",
        email: "" ,
        password: "", 
        message:"", 
        status:false, 
        JWT_token:"",
        isAdmin:false
    });
    const [submitting, setSubmitting] = useState(false);
    const [creating, setCreating] = useState(false);

    const user_data = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email" : details.email,
            "password" : details.password
        }) }
    
    useEffect(()=>{
        Login(details);
    })
    
    const submitHandler = e => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(()=>{
            setSubmitting(false);
        },2000)
        
        fetch("https://incog-back.herokuapp.com/api/user/login",user_data)
        .then(response => response.json())
        .then(data=>{
            if(!data.status){
                setDetails({...details,
                    message:data.message,
                })
            }else{
                setDetails({...details, 
                    message:data.message, 
                    status:true, 
                    JWT_token:data.JWT_token,
                    name:data.name,
                    isAdmin:data.isAdmin
                })
                //console.log("isAdmin"+details.isAdmin);
                //console.log(details);
                //console.log(data.isAdmin);
                
            }
        })
        details.password='';
        //Login(details);
    };
    const createHandler = e =>{
        e.preventDefault();
        setCreating(true);
        setTimeout(()=>{
            setSubmitting(false);
        },2000)
        fetch("https://incog-back.herokuapp.com/api/user/register",user_data)
        .then(response => response.json())
        .then(data=>{
            //console.log(data.message);
            if(!data.status){
            setDetails({...details,
                message:data.message,
                })
            }else{
                setDetails({...details, 
                    message:data.message, 
                    status:true
            })
            }
        })}
        
    

    return(
        <form onSubmit={submitHandler} className="App">
            <div className="form-inner">
                {(error !=="") ? (<div className="error">{error}</div>): ""}
                <h1 style={{textAlign : "center", color:"#4267B2", fontFamily:"Helvetica, Arial, sans-serif"}}>incog</h1>
                <br/>
                <div className="form-group">
                    <input placeholder='Username' type="text" name="email" id= "email" onChange={e => setDetails({...details,email: e.target.value })}value={details.email}/>

                </div>
                <div className="form-group">
                    <input placeholder='Password' type="password" name="password" id= "password" onChange={e => setDetails({...details,password: e.target.value })}value={details.password}/>

                </div>

                <div><input type="submit" value="LOGIN"/></div>
                
                <div><input type="button" value="Create new account" onClick={createHandler}/></div>

                {submitting &&
                <div className="submit_notify">Loading...</div>
            }
                {creating &&
                <div className="submit_notify">Creating...</div>
            }
            </div>
        </form>    

    )
}

export default LoginForm