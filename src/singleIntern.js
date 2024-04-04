import React from "react";
const InternCard = ({ name, rank, attendance, appraisal, overAllGrade }) => {
  return (
    <div className="table-row">
      <p>{rank}</p>
      <p>{name}</p>
      <p>{attendance}</p>
      <p>{appraisal}</p>
      <p>{overAllGrade}</p>
    </div>
  );
};
export default InternCard;
