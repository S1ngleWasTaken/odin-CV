import React from "react";

export default function DisplayedCV({ generalInfo }) {
  return (
    <>
    <div>
      <h1>{generalInfo.fullName}</h1>
      <span>{generalInfo.email}</span>
      <br />
      <span>{generalInfo.phone}</span>
    </div>
    </>
  );
}
