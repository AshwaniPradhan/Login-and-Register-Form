import React, {useState} from "react"

export const Register = (props) => {

    const [email, setEmail] = useState(''); // initilization
    const [pass, setPass]  = useState('');
    const [name, setName]  = useState('');

    //handlesubmit 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email");
    }


    return (
        <div className = "auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit = {handleSubmit} >
                <label htmlFor = "name" > Full Name </label>
                <input value = {name} name = "name" id ="name" placeholder = "full name" /> 
                <label htmlFor = "UserName">UserName</label>
                <input value = {email} type = "UserName" placeholder = "your_email@domain.com" id = "UserName" name="UserName"/>

                <label htmlFor = "Password">Password</label>
                <input value = {pass} type = "Password" placeholder = "*********" id = "Password" name="Password"/>
                <button type="submit">Login</button>
            </form>
                <button className="link-button" onClick = {() => props.onFormSwitch('login')} >Already have an account? Login here. </button>
        </div>
    )
}