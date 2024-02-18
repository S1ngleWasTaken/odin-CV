import React from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";

export default function Form({ handleSubmit }) {
  return (
    <>
      <h2>Fill in the following information.</h2>
      <form action="" onSubmit={handleSubmit}>
        <GeneralInfo/>
        <Education/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
