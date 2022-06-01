import React,{useState} from 'react';
import './App.css';


function Create(){

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
            <h2 className="login">Signup</h2>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="uname">Username: </label>
                <input type="text" id="uname" name="uname" className='login_input'/><br/>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password" className='login_input'/><br/>
                <input type="submit" value="Submit" className='login_submit'/>
            </form>
            {submitting &&
                <div className="submit_notify">Creating new account...</div>
            }
        </div>
    );
}

export default Create;