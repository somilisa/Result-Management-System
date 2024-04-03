import React from "react";
const InternCard = ({ name, attendance, appraisal, overallGrade }) => {
  return (
    <div className="table-row">
      <p>{name}</p>
      <p>{attendance}</p>
      <p>{appraisal}</p>
      <p>{overallGrade}</p>
    </div>
  );
};
export default InternCard;
