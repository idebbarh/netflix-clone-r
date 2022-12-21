import React, { useEffect  } from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home page/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser, removeUser } from "./features/userSlice";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import LoginPage from "./pages/login/LoginPage";
import GetStartedPage from "./pages/get started/GetStartedPage";
import SignupPage from "./pages/signup/SignupPage";
import LoadingScreen from './components/loading screen/LoadingScreen'
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const getUserDataFromDataBase = async (email) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch(setUser(docSnap.data()));
    }
  };
  
  useEffect(() => {
   const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        getUserDataFromDataBase(user.email);
      } else {
        dispatch(removeUser());
      }
    });
      return ()=>{
          unsub();
      }
  }, []);
  return (
    <div className="app">
      {user ? 
          <Routes>
          <Route path="/" element={<GetStartedPage />} />
          <Route path="browser/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
           <Route path="/signup/*" element={<SignupPage />} />
           </Routes> :
  <LoadingScreen/>}
    </div>
  );
}

export default App;
