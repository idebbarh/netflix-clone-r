import React, { useState } from 'react'
import './LoginPage.css'
import netflixLogo from '../../assets/images/Netflix_logo.png';
import loginPageBackgroundImage from '../../assets/images/login_page_background.jpg'
function LoginPage() {
    const [formData,setFormData] = useState({loginEmailInput:'',loginPassInput:''})
  return (
    <div className='loginPage'>
        <div className="loginPage__logo">
            <img src={netflixLogo} alt="netflix logo" />
        </div>
        <div className="loginPage__background">
            <img src={loginPageBackgroundImage} alt="login page background" />
            <div className="loginPage__gradient"/>
        </div>
        <div className="loginPage__loginBody">
            <form className="loginPage__form">
                <h1 className="loginPage__formTitle">Sign In</h1>
                <input type="email" name="loginEmailInput" id="loginEmailInput" className="loginPage__emailInput" value={formData.loginEmailInput} onChange={(e)=>setFormData(prevState=>({...prevState,[e.target.name]:e.target.value}))}/>
                <input type="password" name="loginPassInput" id="loginPassInput" className="loginPage__passInput" value={formData.loginPassInput} onChange={(e)=>setFormData(prevState=>({...prevState,[e.target.name]:e.target.value}))}/>
                <button className='loginPage__loginBtn'>Sign In</button>
            </form>
            <p className='loginPage__signUpText'>New to Netflix? <button className='loginPage__signUpBtn'>Sign up now</button>.</p>
        </div>
    </div>
  )
}

export default LoginPage