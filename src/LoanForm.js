import React from "react";
import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";

const LoanForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("The phone number format is incorrect");
    }
    setShowModal(true);
  };

  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  //   let btnClasses = "";
  //   if (btnIsDisabled) {
  //     btnClasses = "disabled";
  //   } else {
  //     btnClasses = "";
  //   }

  const handleDivClick = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
          type="text"
        />

        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
          type="number"
        />

        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
          type="number"
        />

        <label style={{ marginTop: "20px" }}>Are you an employee?</label>
        <input
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
          type="checkbox"
        />

        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>Less than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          id="submit-loan-btn"
        >
          Submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
};

export default LoanForm;
