import React from "react";

const Programmer = (props) => {
  // destructuring properties
  const { name, work, age, country, salary, image } = props.programmer;
  return (
    <div className="m-3 card border-0 p-4">
      <img
        style={{ borderRadius: "50%" }}
        className="w-50 d-block mx-auto mb-2"
        src={image}
        alt=""
      />
      <h5>Name: {name}</h5>
      <h6>Work: {work}</h6>
      <h6>Age: {age}</h6>
      <h6>Country: {country}</h6>
      <h6>Salary: ${salary}</h6>
      {
        // adding members button
        props.programmer.isAdded ? (
          <button className="btn btn-success w-75 mx-auto my-3">
            {" "}
            <i className="fas fa-user-check"></i> Added Successfully
          </button>
        ) : (
          <button
            onClick={() => props.controlAddedProgrammers(props.programmer)}
            className="btn btn-primary w-75 mx-auto my-3"
          >
            {" "}
            <i className="fas fa-user-plus"></i> Add Member
          </button>
        )
      }
    </div>
  );
};

export default Programmer;
