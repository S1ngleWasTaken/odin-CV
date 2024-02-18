import React from 'react'

export default function GeneralInfo ({handleSubmit}){

    console.log();
    return(
        <>
            <h2>Fill in the following information.</h2>
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" id="fullName" placeholder='John Doe' required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='example@email.com'  />
                <br />
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" name="phone" id="phone" pattern="[0-9]{3} [0-9]{3} [0-9]{3}" placeholder='+012 345 678 901'  />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}