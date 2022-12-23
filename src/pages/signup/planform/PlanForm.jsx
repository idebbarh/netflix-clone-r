import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import "./PlanForm.css";
import PlanFormPlanInfoContainer from "../../../components/signup/planform/PlanFormPlanInfoContainer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function PlanForm({ isValidInfo }) {
  const [selectedPlan, setSelectedPlan] = useState(2);
  return isValidInfo ? (
    <div className="planform">
      <h1 className="planform__tile">Choose the plan that’s right for you</h1>
      <ul className="planfom__checkmarkGroup">
        <li>
          <CheckIcon />
          Watch all you want. Ad-free
        </li>
        <li>
          <CheckIcon />
          Recommendations just for you.
        </li>
        <li>
          <CheckIcon />
          Change or cancel your plan anytime.
        </li>
      </ul>
      <div className="planform__mainInfo">
        <div className="planform__plansNames">
          <div className="planform__planNameContainer">
            <div
              className={`planform__planName${
                selectedPlan === 1 ? " planform__planName--active" : ""
              }`}
              onClick={() => setSelectedPlan(1)}
            >
              <span>Basic</span>
              {selectedPlan === 1 && <ArrowDropDownIcon />}
            </div>
          </div>
          <div className="planform__planNameContainer">
            <div
              className={`planform__planName${
                selectedPlan === 2 ? " planform__planName--active" : ""
              }`}
              onClick={() => setSelectedPlan(2)}
            >
              <span>Standard</span>
              {selectedPlan === 2 && <ArrowDropDownIcon />}
            </div>
          </div>
          <div className="planform__planNameContainer">
            <div
              className={`planform__planName${
                selectedPlan === 3 ? " planform__planName--active" : ""
              }`}
              onClick={() => setSelectedPlan(3)}
            >
              <span>Premium</span>
              {selectedPlan === 3 && <ArrowDropDownIcon />}
            </div>
          </div>
        </div>
        <div className="planform__plansBenefets">
          <span className="gridCell">Monthly price</span>
          <span className="gridCell">Video quality</span>
          <span className="gridCell">Resolution</span>
          <span className="gridCell">
            Watch on your TV, computer, mobile phone and tablet
          </span>
        </div>
        <PlanFormPlanInfoContainer
          key={1}
          price="MAD65"
          quality="Good"
          resolution="720p"
          isActive={selectedPlan === 1}
          setSelectedPlan={setSelectedPlan}
          planId={1}
        />
        <PlanFormPlanInfoContainer
          key={2}
          price="MAD95"
          quality="Better"
          resolution="1080p"
          isActive={selectedPlan === 2}
          setSelectedPlan={setSelectedPlan}
          planId={2}
        />
        <PlanFormPlanInfoContainer
          key={3}
          price="MAD125"
          quality="Best"
          resolution="4K+HDR"
          isActive={selectedPlan === 3}
          setSelectedPlan={setSelectedPlan}
          planId={3}
        />
      </div>
    </div>
  ) : (
    <Navigate replace to="/signup" />
  );
}
export default PlanForm;
