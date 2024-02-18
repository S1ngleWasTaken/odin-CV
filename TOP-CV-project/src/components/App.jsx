import React, { useState } from "react";
import Form from "./Form";
import DisplayedCV from "./DisplayedCV";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: null,
    phone: null,
    email: null,
  });
  const [education, setEducation] = useState({
    schoolName: null,
    schoolName: null,
    studyDate: null,
  });
  const [experience, setExperience] = useState({
    companyName: null,
    positionTitle: null,
    responsibilities: null,
    workingSince: null,
    workingUntil: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let formChildren = event.target.children;

    let generalInfoChildren = formChildren[0].children;
    let educationChildren = formChildren[1].children;
    let experienceChildren = formChildren[2].children;

    console.log({
      experienceChildren
    });

    setGeneralInfo({
      fullName: generalInfoChildren[1].value,
      phone: generalInfoChildren[4].value,
      email: generalInfoChildren[7].value,
    });

    setEducation({
      schoolName: educationChildren[1].value,
      title: educationChildren[4].value,
      studyDate: educationChildren[7].value,
    });
    
    setExperience({
        companyName: experienceChildren[1].value,
        positionTitle: experienceChildren[4].value,
        responsibilities: experienceChildren[7].value,
        workingSince: experienceChildren[10].value,
        workingUntil: experienceChildren[13].value,
      })
  };

  return (
    <div className="App">
      <div>
        <Form handleSubmit={handleSubmit} />
      </div>
      <div>
        <DisplayedCV generalInfo={generalInfo} education={education} experience={experience}/>
      </div>
    </div>
  );
}
