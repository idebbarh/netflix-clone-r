import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./ChangePlan.css";
import PlanContainer from "./PlanContainer";
import { db } from "../../firebase";
function ChangePlan() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [selectedPlan, setSelectedPlan] = useState(user.selectedPlan);
  useEffect(() => {
    const getProducts = async () => {
      const q = collection(db, "products");
      const docsRef = await getDocs(q);
      setProducts(() =>
        docsRef.docs.map((prod) => {
          return { ...prod.data(), prodId: prod.id };
        })
      );
    };
    getProducts();
  }, []);

  const plansElem = products.map((plan) => {
    return (
      <PlanContainer
        key={plan.prodId}
        prodId={plan.prodId}
        title={plan.name}
        quality={plan.quality}
        resolution={plan.resolution}
        price={plan.price}
        isActive={plan.prodId === selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
    );
  });
  const updatePlanHandler = async () => {
    if (user.selectedPlan !== selectedPlan) {
      const docRef = doc(db, "users", user.userEmail);
      await updateDoc(docRef, { selectedPlan: selectedPlan });
    }
  };
  return (
    <div className="changePlan">
      <div className="changePlan__plansContainer">{plansElem}</div>
      <button
        className={`changePlan__continueBtn ${
          user.selectedPlan === selectedPlan
            ? "changePlan__continueBtn--inactive"
            : ""
        }`}
        onClick={updatePlanHandler}
      >
        continue
      </button>
    </div>
  );
}
export default ChangePlan;
