import React,{useState} from 'react';
import './App.css';


function Login(){

    const [submitting, setSubmitting] = useState(false);


    const handleSubmit = async (event)=>{
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
            <form onSubmit={handleSubmit} method="POST">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" className='login_input'/><br/>
                <label htmlFor="password">Password  :   </label>
                <input type="text" id="password" name="password" className='login_input'/><br/>
                <input type="submit" value="Submit" className='login_submit'/>
            </form>
            {submitting &&
                <div className="submit_notify">Submtting Form...</div>
            }
        </div>
    );
}
export default Login;