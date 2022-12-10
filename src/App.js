import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home page/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser, removeUser } from "./features/userSlice";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import AuthPages from "./pages/auth pages/AuthPages";
import Profiles from "./pages/home/profiles/Profiles";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const getUserDataFromDataBase = async (email) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch(setUser(docSnap.data()));
    }
  };
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserDataFromDataBase(user.email);
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div className="app">
      {user !== null ? (
        <Routes>
          <Route path="/" element={<Navigate replace to="/browser" />} />
          <Route path="browser/*" element={user.userActiveProfile ? <HomePage /> : <Profiles/>} />
        </Routes>
      ) : (
        <AuthPages />
      )}
    </div>
  );
}

export default App;
