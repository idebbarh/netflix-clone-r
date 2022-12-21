import React, { useEffect, useState } from 'react'
import './SignupPage.css'
import netflixLogo from '../../assets/images/Netflix_logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../firebase'
import { doc, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
function SignupPage() {
    const [formData,setFormData] = useState({signupEmailInput:'',signupPassInput:''});
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    useEffect(()=>{
        const signupEmailValue = localStorage.getItem('signupEmailValue');
        if(signupEmailValue){
            setFormData(prevState=>({...prevState,signupEmailInput:JSON.parse(signupEmailValue)}))
        }
    },[])
    const addUserToDb = async (user)=>{
        try {
            await setDoc(doc(db, "users", user.email), {
                userEmail:user.email,
                userProfiles:[],
                userActiveProfile:null,
                isLogin:true,
              });
          } catch (e) {
            alert(e.message);
          }
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, formData.signupEmailInput, formData.signupPassInput)
        .then((userCredential) => {
            const user = userCredential.user;
            addUserToDb(user);
        })
        .catch((error) => {
            alert(error.message);
        });
    }
  return (
    user.isLogin ?
    <Navigate replace to="/browser" /> 
    :
    <div className='signupPage'>
        <div className="signupPage__header">
            <div className="signupPage__logo" onClick={()=>navigate('/')}>
                <img src={netflixLogo} alt="netflix logo" />
            </div>
            <button className='signupPage__headerAuthLink' onClick={()=>navigate("/login")}>sign in</button>
        </div>
        <div className="signupPage__signupBody">
            <form className="signupPage__form" onSubmit={(e)=>handleSubmit(e)}>
                <h1 className="signupPage__formTitle">Create a password to start your membership</h1>
                <h2 className="signupPage__formSubTitle">Just a few more steps and you're done!</h2>
                <h2 className="signupPage__formSubTitle">We hate paperwork, too.</h2>
                <input type="email" name="signupEmailInput" placeholder='Email or phone number' id="signupEmailInput" className="signupPage__input input--emailInput" value={formData.signupEmailInput} onChange={(e)=>setFormData(prevState=>({...prevState,[e.target.name]:e.target.value}))} required/>
                <input type="password" name="signupPassInput" placeholder='password' id="signupPassInput" className="signupPage__input input--passInput" value={formData.signupPassInput} onChange={(e)=>setFormData(prevState=>({...prevState,[e.target.name]:e.target.value}))} required/>
                <button className='signup__nextBtn'>next</button>
            </form>
        </div>
    </div>
  )
}

export default SignupPage
