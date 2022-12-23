import React from "react";
import "./SettingUp.css";
import devicesImg from "../../../assets/images/Devices.png";
function SettingUp() {
  return (
    <div className="settingup">
      <img src={devicesImg} className="settingup__devicesImage" />
      <h1 className="settingup__title">Finish setting up your account</h1>
      <h3 className="settingup__subTitle">
        Netflix is personalized for you. Create a password to watch on any
        device at any time.
      </h3>
    </div>
  );
}
export default SettingUp;
