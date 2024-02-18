import React from "react";

export default function DisplayedCV({ generalInfo, education, experience }) {
  return (
    <>
    <div>
      <h1>{generalInfo.fullName}</h1>
      <span>Email: {generalInfo.email}</span>
      <br />
      <span>Phone number: {generalInfo.phone}</span>
    </div>

    <div>
      <h2>School name: {education.schoolName}</h2>
      <span>Title of study: {education.title}</span>
      <br />
      <span>Date of study: {education.studyDate}</span>
    </div>

    <div>
        <h2>Experience:</h2>
      <h3>Company name: {experience.companyName}</h3>
      <span>Position title: {experience.positionTitle}</span>
      <br />
      <span>Responsibilies: {experience.responsibilities}</span>
      <br />
      <span>Working Since: {experience.workingSince}</span>
      <br />
      <span>Working Until: {experience.workingUntil}</span>
    </div>
    </>
  );
}
