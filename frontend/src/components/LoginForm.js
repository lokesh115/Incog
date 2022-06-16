import React, {useState,useEffect} from 'react';
import '../index.css';
import { Button,Card,Form,Alert } from 'react-bootstrap';
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
    const [signup, setSignup] = useState(false);

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
        details.password = '';
        //Login(details);
    };
    const createHandler = e =>{
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
        
        const clearFields = ()=>{
            //setDetails({...details,email: ' ',password:' ' });
            details.email = '';
            details.password = '';
            console.log(details);
        }
    

    return(
        <Form onSubmit={submitHandler} className="App">
            <div className="App">
                <Card className="p-3 mb-2 text-primary">
                    <Card.Body>
                        <Card.Title>incog</Card.Title>
                    </Card.Body>

                    <Form.Group controlId="uname" style={{marginBottom:"10px"}}>
                        <Form.Control placeholder='Username' type="text" name="uname" onChange={e => setDetails({...details,email: e.target.value })} value={details.email}/>
                    </Form.Group>

                    <Form.Group controlId="password" style={{marginBottom : "15px"}}>
                        <Form.Control placeholder='Password' type="password" name="password" onChange={e => setDetails({...details,password: e.target.value })} value={details.password}/>
                    </Form.Group>
                    {!signup &&
                     <div style={{marginBottom : "10px"}}><Button variant="primary" type="submit">Login</Button></div>
                     }
                    
                    {signup &&
                        <div><Button onClick={()=>{
                            setSignup(true);
                            createHandler();
                            details.password='';
                        }}>Signup</Button></div>
                        }

                </Card>
                {!signup &&
                        <div><p onClick={()=>{setSignup(true)}} style={{textDecoration:"underline",color:"blue"}}>Create new account</p></div>
                        }
                {signup &&
                        <div><p onClick={()=>{setSignup(false);clearFields();}} style={{textDecoration:"underline",color:"blue"}}>Go Back</p></div>
                        }
                {error ==="" && submitting &&
                <Alert className="alert alert-success">Loading...</Alert>
            }
                {error ==="" && creating &&
                <Alert className="alert alert-info">Creating...</Alert>
            }
                {(error !=="") ? (<Alert className="alert alert-warning alert-dismissible fade show">{error}</Alert>): ""}

            </div>
        </Form>    

    )
}

export default LoginForm