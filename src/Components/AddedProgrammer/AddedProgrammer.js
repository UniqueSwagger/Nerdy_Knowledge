import React from "react";

const AddedProgrammer = (props) => {
  const { addedMembers } = props;
  // calculating total salary
  const totalSalary = addedMembers.reduce(
    (total, member) => total + member.salary,
    0
  );
  return (
    <div className="text-white mt-5">
      <h3>
        {" "}
        <i className="fas fa-user-tie"></i> Total Member: {addedMembers.length}
      </h3>
      <h4> Total Salary: ${totalSalary}</h4>
      <h5 className="text-center border-top border-bottom my-3 py-3">
        Our honorable programmers
      </h5>
      <ul>
        {
          // added members list
          addedMembers.map((addedMember) => (
            <li key={addedMember.id}>{addedMember.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default AddedProgrammer;
