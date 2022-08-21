import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  {
    id: 1,
    name: "shifat",
    img: expert1,
  },
  {
    id: 2,
    name: "shawon",
    img: expert3,
  },
  {
    id: 3,
    name: "Redowan",
    img: expert4,
  },
  {
    id: 4,
    name: "Noor e",
    img: expert5,
  },
  {
    id: 5,
    name: "Shabrina",
    img: expert6,
  },
  {
    id: 6,
    name: "Mansurul",
    img: expert2,
  },
];

const Experts = () => {
  return (
    <div id="experts" className="container mt-5">
      <h2 className="text-primary text-center">Our Experts</h2>
      <div className="row">
        {
            experts.map(expert => <Expert 
                key={expert.id}
                expert={expert}></Expert>)
        }
      </div>
    </div>
  );
};

export default Experts;
