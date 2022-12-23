import React from "react";
import "./RegForm.css";
function RegForm({ formData, setFormData, handleNavigationToNexPage }) {
  return (
    <form
      className="signupPage__form"
      onSubmit={(e) => {
        e.preventDefault();
        setFormData((prevState) => ({ ...prevState, isValidInfo: true }));
        handleNavigationToNexPage();
      }}
    >
      <h1 className="signupPage__formTitle">
        Create a password to start your membership
      </h1>
      <h2 className="signupPage__formSubTitle">
        Just a few more steps and you're done!
      </h2>
      <h2 className="signupPage__formSubTitle">We hate paperwork, too.</h2>
      <input
        type="email"
        name="signupEmailInput"
        placeholder="Email or phone number"
        id="signupEmailInput"
        className="signupPage__input input--emailInput"
        value={formData.signupEmailInput}
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        required
      />
      <input
        type="password"
        name="signupPassInput"
        placeholder="password"
        id="signupPassInput"
        className="signupPage__input input--passInput"
        value={formData.signupPassInput}
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        required
      />
      <button className="signup__nextBtn">next</button>
    </form>
  );
}
export default RegForm;
