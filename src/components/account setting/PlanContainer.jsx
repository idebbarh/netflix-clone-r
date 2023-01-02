import React from "react";
import "./PlanContainer.css";
import CheckIcon from "@mui/icons-material/Check";

function PlanContainer({
  title,
  price,
  isActive,
  prodId,
  setSelectedPlan,
  quality,
  resolution,
}) {
  return (
    <div
      className={`planContainer ${isActive ? "planContainer--active" : ""}`}
      onClick={() => setSelectedPlan(prodId)}
    >
      <h2 className="planContainer__title">{title}</h2>
      <p className="planContainer__description">{quality}</p>
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
