//to hold the values entered by the user
// use react and usestate
import React, { useState } from "react";


//props is a way to send value from parent components to child components
export const Login = (props) => {

    const [email, setEmail] = useState(''); // assigning empty values
    const [pass, setPass] = useState('');
    //capture values entered by the user
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
            <div className = "auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit = {handleSubmit}>

                    <label htmlFor = "UserName">UserName</label>
                    <input value = {email} type = "UserName" placeholder = "your_email@domain.com" id = "UserName" name="UserName"/>

                    <label htmlFor = "Password">Password</label>
                    <input value = {pass} type = "Password" placeholder = "*********" id = "Password" name="Password"/>
                    <button type="submit">Login</button>
                </form>
                <button className="link-button" onClick = {() => props.onFormSwitch('register')}> Don't have an account? Register here. </button>
            </div>

    )
}