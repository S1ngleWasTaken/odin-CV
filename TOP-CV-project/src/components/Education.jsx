import React from "react";

export default function Education() {
  return (
    <div>
      <label htmlFor="SchoolName">School name:</label>
      <input
        type="text"
        name="SchoolName"
        id="SchoolName"
        placeholder="John Doe University"
      />
      <br />
      <label htmlFor="studyTitle">Title of study:</label>
      <input
        type="text"
        name="studyTitle"
        id="studyTitle"
        placeholder="shrug"
      />
      <br />
      <label htmlFor="studyDate">Date of study:</label>
      <input
        type="date"
        name="studyDate"
        id="studyDate"
      />
      <br />
    </div>
  );
}
