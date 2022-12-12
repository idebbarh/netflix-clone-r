import React, {useState } from 'react'
import './LoginPage.css'
import netflixLogo from '../../assets/images/Netflix_logo.png';
import loginPageBackgroundImage from '../../assets/images/login_page_background.jpg'
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
function LoginPage() {
    const [formData,setFormData] = useState({loginEmailInput:'',loginPassInput:''});
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const handleSubmit = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, formData.loginEmailInput, formData.loginPassInput)
            .catch((error) => {
                alert(error.message)
            });
    }
  return (
    user.isLogin ?
    <Navigate replace to="/browser" /> 
    :
    <div className='loginPage'>
        <div className="loginPage__header">
            <div className="loginPage__logo" onClick={()=>navigate('/')}>
                <img src={netflixLogo} alt="netflix logo" />
            </div>
        </div>

        <div className="loginPage__background">
            <img src={loginPageBackgroundImage} alt="login page background" />
            <div className="loginPage__gradient"/>
        </div>

        <div className="loginPage__loginBody">
            <form className="loginPage__form" onSubmit={(e)=>handleSubmit(e)}>
                <h1 className="loginPage__formTitle">Sign In</h1>
                <input type="email" name="loginEmailInput" placeholder='Email or phone number' id="loginEmailInput" className="loginPage__input input--emailInput" value={formData.loginEmailInput} onChange={(e)=>setFormData(prevState=>({...prevState,[e.target.name]:e.target.value}))} required/>
                <input type="password" name="loginPassInput" placeholder='password' id="loginPassInput" className="loginPage__input input--passInput" value={formData.loginPassInput} onChange={(e)=>setFormData(prevState=>({...prevState,[e.target.name]:e.target.value}))} required/>
                <button className='loginPage__loginBtn'>Sign In</button>
                <p className='loginPage__signUpText'>New to Netflix? <button className='loginPage__signUpBtn' onClick={()=>navigate('/')}>Sign up now</button>.</p>
            </form>
        </div>

    </div>
  )
}

export default LoginPage