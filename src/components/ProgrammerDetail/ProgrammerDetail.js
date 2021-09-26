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
        {details.map((info) => (
          <div className="d-flex my-2 total-box">
            <img className="small-img" src={info.img} alt="" />
            <p className="ms-1">{info.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammerDetail;
