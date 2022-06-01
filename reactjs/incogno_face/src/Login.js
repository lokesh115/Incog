import React,{useState} from 'react';
import './App.css';


function Login(){

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event=>{
        event.preventDefault();
        setSubmitting(true);

        setTimeout(()=>{
            setSubmitting(false);
        },3000)
    }

    return(
        <div className="login_form">
            <div>
            <h2 className="login">Login</h2><br/>
            </div>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="uname">Username: </label>
                <input type="text" id="uname" name="uname" className='login_input'/><br/>
                <label htmlFor="password">Password  :   </label>
                <input type="text" id="password" name="password" className='login_input'/><br/>
                <input type="submit" value="Submit" className='login_submit'/>
            </form>
            {submitting &&
                <div className="submit_notify">Submtting Form...</div>
            }
            <div className='create_acc'>
                <a href="http:www.google.com">Create new account</a>
            </div>
        </div>
    );
}
export default Login;