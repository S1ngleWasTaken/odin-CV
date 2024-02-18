import React from "react";

export default function DisplayedCV({ generalInfo, education }) {
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
    </>
  );
}
