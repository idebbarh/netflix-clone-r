import React from "react";
import { Navigate } from "react-router-dom";
import "./PaymentPage.css";

function PaymentPage({ isValidInfo }) {
  return isValidInfo ? <div>payent</div> : <Navigate replace to="/signup" />;
}
export default PaymentPage;
