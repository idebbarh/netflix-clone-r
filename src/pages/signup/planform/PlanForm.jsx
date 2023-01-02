import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import "./PlanForm.css";
import PlanFormPlanInfoContainer from "../../../components/signup/planform/PlanFormPlanInfoContainer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function PlanForm({ isValidInfo, setSelectedPlan, selectedPlan }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const q = collection(db, "products");
      const docsRef = await getDocs(q);
      console.log(docsRef);
      setProducts(() =>
        docsRef.docs.map((prod) => {
          return { ...prod.data(), prodId: prod.id };
        })
      );
    };
    getProducts();
  }, []);
  return isValidInfo ? (
    products.length > 0 && (
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
            {products.map((product) => {
              return (
                <div
                  className="planform__planNameContainer"
                  key={product.prodId}
                >
                  <div
                    className={`planform__planName${
                      selectedPlan === product.prodId
                        ? " planform__planName--active"
                        : ""
                    }`}
                    onClick={() => setSelectedPlan(product.prodId)}
                  >
                    <span>{product.name}</span>
                    {selectedPlan === product.prodId && <ArrowDropDownIcon />}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="planform__plansBenefets">
            <span className="gridCell">Monthly price</span>
            <span className="gridCell">Video quality</span>
            <span className="gridCell">Resolution</span>
            <span className="gridCell">
              Watch on your TV, computer, mobile phone and tablet
            </span>
          </div>
          {products.map((product) => {
            return (
              <PlanFormPlanInfoContainer
                key={product.prodId}
                price={product.price}
                quality={product.quality}
                resolution={product.resolution}
                isActive={selectedPlan === product.prodId}
                setSelectedPlan={setSelectedPlan}
                planId={product.prodId}
              />
            );
          })}
        </div>
      </div>
    )
  ) : (
    <Navigate replace to="/signup" />
  );
}
export default PlanForm;
