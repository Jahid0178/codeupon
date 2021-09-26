import React from "react";
import "./ProgrammerDetail.css";

const ProgrammerDetail = (props) => {
  const { details } = props;
  let salary = 0;
  for (const programmer of details) {
    salary = salary + programmer.salary;
  }

  return (
    <div className="sticky-top">
      <div className="details-container">
        <h3 className="text-center">Programmer Details</h3>
        <p>Total Added: {props.details.length}</p>
        <p>Total Salary: $ {salary}</p>
      </div>
    </div>
  );
};

export default ProgrammerDetail;
