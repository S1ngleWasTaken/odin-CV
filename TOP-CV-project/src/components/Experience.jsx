import React from "react";

export default function Experience() {
  return (
    <div>
      <label htmlFor="CompanyName">Company name:</label>
      <input
        type="text"
        name="CompanyName"
        id="CompanyName"
        placeholder="John Doe company"
      />
      <br />
      <label htmlFor="positionTitle">Position Title:</label>
      <input
        type="text"
        name="positionTitle"
        id="positionTitle"
        placeholder="CEO of the world"
      />
      <br />
      <label htmlFor="Resposibilities">Job responsibilities:</label>
      <input
        type="text"
        name="Responsibilities"
        id="Responsibilities"
        placeholder="managing you"
      />
      <br />
      <label htmlFor="workingSince">Date of signing:</label>
      <input type="date" name="workingSince" />
      <br />
      <label htmlFor="workingUntil">Date of resigning:</label>
      <input type="date" name="workingUntil" />
      <br />
    </div>
  );
}
