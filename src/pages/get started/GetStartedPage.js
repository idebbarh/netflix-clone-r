import React, { useState } from 'react'
import netflixLogo from '../../assets/images/Netflix_logo.png';
import './GetStartedPage.css'
import getStartedPageBackgroundImage from '../../assets/images/login_page_background.jpg'
import { Navigate, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
function GetStartedPage() {
    const [emailInputValue,setEmailInputValue] = useState('');
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const submitHandler = async (e)=>{
        e.preventDefault();
        const docRef = doc(db,'users',emailInputValue);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
          navigate('/login');
        }else{
          localStorage.setItem('signupEmailValue',JSON.stringify(emailInputValue));
          navigate('/signup');
        }
    }
  return (
    
    user.isLogin ? 
        <Navigate replace to="/browser" /> 
          :
          <div className='getStartedPage'>
              <div className="getStartedPage__header">
                  <div className="getStartedPage__logo">
                      <img src={netflixLogo} alt="netflix logo" />
                  </div>
                  <button className="getStartedPage__signInBtn" onClick={()=>navigate('/login')}>sign in</button>
              </div>
              <div className="getStartedPage__background">
                  <img src={getStartedPageBackgroundImage} alt="get started page background" />
                  <div className="getStartedPage__gradient"/>
              </div>
              
              <div className="getStartedPage__text">
                <h1 className="getStatedPage__title">Unlimited movies, TV shows, and more.</h1>
                <h2 className="getStatedPage__subTitle">Watch anywhere. Cancel anytime.</h2>
                <form className="getStartedPage__form" onSubmit={(e)=>submitHandler(e)}>
                    <h3 className='getStartedPage__formTitle'>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="getStartedPage__formLockup">
                      <div className="getStartedPage__emailInputContainer">
                        <input type="email" className='getStartedPage__Emailinput' name='getStartedEmailInput' value={emailInputValue} onChange={(e)=>setEmailInputValue(e.target.value)} required id='getStartedEmailInput'/>
                        <label className="getStartedPage__emailInputPlaceHolder" htmlFor='getStartedEmailInput'>Email address</label>
                      </div>
                      <button className='getStartedPage__submitBtn'>get started</button>
                    </div>
                </form>
              </div>
          </div>
  )
}

export default GetStartedPage