import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import DisplayedCV from "./DisplayedCV";

export default function App (){
    
    const [generalInfo, setGeneralInfo] = useState({fullName: null, phone: null, email: null})

    const handleSubmit = (event) =>{
        event.preventDefault()
        let formChildren = event.target.children;
        setGeneralInfo({fullName: formChildren[1].value, phone: formChildren[4].value, email: formChildren[7].value})
    }
    
    return(
        <>
            <GeneralInfo handleSubmit = {handleSubmit}/>
            <DisplayedCV generalInfo = {generalInfo}/>
        </>
    )
}