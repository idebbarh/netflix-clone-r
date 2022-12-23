import React from "react";
import "./PlanContainer.css";
import CheckIcon from "@mui/icons-material/Check";

function PlanContainer({
  title,
  description,
  price,
  isActive,
  planId,
  setSelectedPlan,
}) {
  return (
    <div
      className={`planContainer ${isActive ? "planContainer--active" : ""}`}
      onClick={() => setSelectedPlan(planId)}
    >
      <h2 className="planContainer__title">{title}</h2>
      <p className="planContainer__description">{description}</p>
      <span className="planContainer__price">{price}</span>
      {isActive && (
        <span className="planContainer__checkBtn">
          <CheckIcon />
        </span>
      )}
    </div>
  );
}
export default PlanContainer;
