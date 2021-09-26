import React from "react";
import "./Programmer.css";

const Programmer = (props) => {
  const { name, role, age, country, img, salary, language } = props.programmer;
  return (
    <div className="col-md-4 mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top p-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Role: {role}</p>
          <p className="card-text">Language: {language}</p>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Country: {country}</p>
          <p className="card-text">Salary: {salary}</p>
        </div>
        <div className="card-footer">
          <button
            onClick={() => props.handleDetails(props.programmer)}
            className="btn btn-regular fw-bold "
          >
            Add To Hire
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programmer;
