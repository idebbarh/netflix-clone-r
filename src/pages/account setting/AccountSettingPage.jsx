import React, { useState } from "react";
import AccountSettingPageHeader from "../../components/account setting/AccountSettingPageHeader";
import "./AccountSettingPage.css";
import { Navigate } from "react-router-dom";
import { selectUser } from "../../features/userSlice.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChangePlan from "../../components/account setting/ChangePlan";
function AccountSettingPage() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [isChangePlanOpen, setIsChangePlanOpen] = useState(false);
  return user.isLogin ? (
    <div className="accountSettingPage">
      <AccountSettingPageHeader />
      <div className="accountSettingPage__settingBody">
        <h1 className="accountSettingPage__title">account</h1>
        <div className="accountSettingPage__section">
          <h2 className="accountSettingPage__subTilte">MEMBERSHIP & BILLING</h2>
          <button className="accountSettingPage__cancelMemberShipBtn">
            cancel membership
          </button>
          <ul className="accountSettingPage__sectionInfo">
            <li className="bold">{user.userEmail}</li>
            <li>Your next billing date is January 3, 2023.</li>
          </ul>
        </div>
        <div className="accountSettingPage__section">
          <h2 className="accountSettingPage__subTilte">PLAN DETAILS</h2>
          <ul className="accountSettingPage__sectionInfo">
            <li className="bold">Standard</li>
          </ul>
          <button
            className="accountSettingPage__changePlanBtn"
            onClick={() => setIsChangePlanOpen((prevState) => !prevState)}
          >
            change plan
          </button>
        </div>
        {isChangePlanOpen && <ChangePlan />}
      </div>
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
}
export default AccountSettingPage;
