import React, { useEffect, useState } from "react";
import Programmer from "../Programmer/Programmer";
import ProgrammerDetail from "../ProgrammerDetail/ProgrammerDetail";

const Programmers = () => {
  const [programmers, setProgrammers] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("./programmerData.json")
      .then((response) => response.json())
      .then((data) => setProgrammers(data));
  }, []);

  const handleDetails = (programmer) => {
    if (details.indexOf(programmer) === -1) {
      const detail = [...details, programmer];
      setDetails(detail);
    } else {
      alert("This person already added");
    }
  };

  return (
    <div className="mt-2 ms-2">
      <div className="row">
        <div className="col-md-9 border-end">
          <div className="row">
            {programmers.map((programmer) => (
              <Programmer
                key={programmer.id}
                programmer={programmer}
                handleDetails={handleDetails}
              ></Programmer>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <ProgrammerDetail details={details}></ProgrammerDetail>
        </div>
      </div>
    </div>
  );
};

export default Programmers;
