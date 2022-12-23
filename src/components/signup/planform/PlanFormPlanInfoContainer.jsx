import React from "react";
import "./PlanFormPlanInfoContainer.css";
import CheckIcon from "@mui/icons-material/Check";
function PlanFormPlanInfoContainer({
  price,
  quality,
  resolution,
  isActive,
  setSelectedPlan,
  planId,
}) {
  return (
    <div
      className={`planFormPlanInfoContainer${
        isActive ? " planFormPlanInfoContainer--active" : ""
      }`}
      onClick={() => setSelectedPlan(planId)}
    >
      <span className="gridCell">{price}</span>
      <span className="gridCell">{quality}</span>
      <span className="gridCell">{resolution}</span>
      <span className="gridCell">
        <CheckIcon />
      </span>
    </div>
  );
}
export default PlanFormPlanInfoContainer;
