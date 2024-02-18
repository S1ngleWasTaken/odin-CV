import React from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

export default function Form({ handleSubmit }) {
  return (
    <>
      <h2>Fill in the following information.</h2>
      <form action="" onSubmit={handleSubmit} className="form">
        <GeneralInfo/>
        <Education/>
        <Experience/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
