import React, {useState,useEffect} from 'react';
import '../index.css';
import { Button,Card,Form } from 'react-bootstrap';
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
        <Form onSubmit={submitHandler} className="App">
            <div className="App">
                {(error !=="") ? (<div className="error">{error}</div>): ""}

                <Card className="p-3 mb-2 text-primary" style={{width: "16rem"}}>
                    <Card.Body>
                    <Card.Title>incog</Card.Title>
                    </Card.Body>

                    <Form.Group controlId="uname" style={{marginBottom:"10px"}}>
                    <Form.Control placeholder='Username' type="text" name="email" id= "email" onChange={e => setDetails({...details,email: e.target.value })}value={details.email}/>
                    </Form.Group>

                    <Form.Group controlId="password" style={{marginBottom : "15px"}}>
                    <Form.Control placeholder='Password' type="password" name="password" id= "password" onChange={e => setDetails({...details,password: e.target.value })}value={details.password}/>
                    </Form.Group>

                <div style={{marginBottom : "10px"}}><Button variant="primary" type="submit">Login</Button></div>
                <div><Button variant="primary" onClick={createHandler}>Create new account</Button></div>

                </Card>

                {submitting &&
                <div className="">Loading...</div>
            }
                {creating &&
                <div className="">Creating...</div>
            }
            </div>
        </Form>    

    )
}

export default LoginForm