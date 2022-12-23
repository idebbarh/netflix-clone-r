import React, { useState, useEffect } from "react";
import "./SignupPage.css";
import netflixLogo from "../../assets/images/Netflix_logo.png";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import SettingUp from "./settingup/SettingUp";
import PlanForm from "./planform/PlanForm";
import RegForm from "./regform/RegForm";
import PaymentPage from "./creditoption/PaymentPage";
const PATHS = {
  signup: "regform",
  regform: "planform",
  planform: "creditoption",
};

function SignupPage() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [formData, setFormData] = useState({
    signupEmailInput: "",
    signupPassInput: "",
    isValidInfo: false,
  });
  const location = useLocation();
  const curPath =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  useEffect(() => {
    const signupEmailValue = localStorage.getItem("signupEmailValue");
    if (signupEmailValue) {
      setFormData((prevState) => ({
        ...prevState,
        signupEmailInput: JSON.parse(signupEmailValue),
      }));
    }
  }, []);
  const addUserToDb = async (user) => {
    try {
      await setDoc(doc(db, "users", user.email), {
        userEmail: user.email,
        userProfiles: [],
        userActiveProfile: null,
        isLogin: true,
      });
    } catch (e) {
      alert(e.message);
    }
  };
  const handleSubmit = async () => {
    createUserWithEmailAndPassword(
      auth,
      formData.signupEmailInput,
      formData.signupPassInput
    )
      .then((userCredential) => {
        const user = userCredential.user;
        addUserToDb(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleNavigationToNexPage = () => {
    if (curPath in PATHS) {
      navigate(`${PATHS[curPath]}`);
    }
  };
  return user.isLogin ? (
    <Navigate replace to="/browser" />
  ) : (
    <div className="signupPage">
      <div className="signupPage__header">
        <div className="signupPage__logo" onClick={() => navigate("/")}>
          <img src={netflixLogo} alt="netflix logo" />
        </div>
        <button
          className="signupPage__headerAuthLink"
          onClick={() => navigate("/login")}
        >
          {["regform", "signup"].includes(curPath) ? "sign in" : "sing out"}
        </button>
      </div>
      <div className="signupPage__signupBody">
        <Routes>
          <Route path="/" element={<SettingUp />} />
          <Route
            path="regform"
            element={
              <RegForm
                formData={formData}
                setFormData={setFormData}
                handleNavigationToNexPage={handleNavigationToNexPage}
              />
            }
          />
          <Route
            path="planform"
            element={<PlanForm isValidInfo={formData.isValidInfo} />}
          />
          <Route
            path="creditoption"
            element={<PaymentPage isValidInfo={formData.isValidInfo} />}
          />
        </Routes>
        {curPath !== "regform" && (
          <button
            className="signup__nextBtn"
            type="button"
            onClick={handleNavigationToNexPage}
          >
            {!(curPath in PATHS) ? "pay" : "next"}
          </button>
        )}
      </div>
    </div>
  );
}

export default SignupPage;
