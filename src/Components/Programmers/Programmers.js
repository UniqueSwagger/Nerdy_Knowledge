import React, { useEffect, useState } from "react";
import AddedProgrammer from "../AddedProgrammer/AddedProgrammer";
import Programmer from "../Programmer/Programmer";
import "./Programmers.css";

const Programmers = () => {
  //fetching data from programmers.json and set programmers
  const [programmers, setProgrammers] = useState([]);
  useEffect(() => {
    fetch(`programmers.json`)
      .then((res) => res.json())
      .then((data) => setProgrammers(data));
  }, []);
  //handling added members
  const [member, setMember] = useState([]);
  const controlAddedProgrammers = (programmer) => {
    programmer.isAdded = true;
    const updateMember = [...member, programmer];
    setMember(updateMember);
  };
  return (
    <div className="row programmers ">
      <div className="col-lg-9">
        <div className="programmer my-3">
          {programmers.map((programmer) => (
            <Programmer
              controlAddedProgrammers={controlAddedProgrammers}
              key={programmer.id}
              programmer={programmer}
            ></Programmer>
          ))}
        </div>
      </div>
      <div className="col-lg-3">
        <AddedProgrammer addedMembers={member} />
      </div>
    </div>
  );
};

export default Programmers;
