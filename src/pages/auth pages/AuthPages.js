import React from "react";
import {Route, Routes} from "react-router-dom";
import GetStartedPage from '../get started/GetStartedPage'
import LoginPage from '../login/LoginPage'
import SignupPage from "../signup/SignupPage";
function AuthPages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetStartedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/*" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default AuthPages;
