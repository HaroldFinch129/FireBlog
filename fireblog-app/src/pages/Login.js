import React from 'react'
import './Login.css';

const Login = () => {
    return (
        <div className="Login_container">
            
            <div className="form_container">
                <form action="" className="Login_form">
                    <div className="form_image"></div>
                    <h1 className="form_header">LOGIN</h1>
                    <input type="text" className="form_input"/>
                    <input type="text" className="form_input"/>
                    <button className="form_button">login</button>
                    <button className="form_button">with google</button>

                </form>

            </div>
        </div>
    )
}

export default Login
