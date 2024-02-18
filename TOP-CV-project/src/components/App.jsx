import React, { useState } from "react";
import Form from "./Form";
import DisplayedCV from "./DisplayedCV";
import Education from "./Education";


export default function App (){
    
    const [generalInfo, setGeneralInfo] = useState({fullName: null, phone: null, email: null})
    const [education, setEducation] = useState({schoolName: null, schoolName: null, studyDate: null})

    const handleSubmit = (event) =>{
        event.preventDefault()
        let formChildren = event.target.children;

        let generalInfoChildren = formChildren[0].children;
        let educationChildren = formChildren[1].children;


        console.log({fullName: educationChildren[1].value, phone: educationChildren[4].value, email: educationChildren[7].value});
        setGeneralInfo({fullName: generalInfoChildren[1].value, phone: generalInfoChildren[4].value, email: generalInfoChildren[7].value})
        setEducation({schoolName: educationChildren[1].value, title: educationChildren[4].value, studyDate: educationChildren[7].value})
    }
    
    return(
        <>
            <Form handleSubmit = {handleSubmit}/>
            <DisplayedCV    generalInfo = {generalInfo}
                            education = {education}/>
        </>
    )
}