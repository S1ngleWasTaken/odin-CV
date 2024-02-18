import React from 'react'

export default function GeneralInfo (handleSubmit){


    return(
        <>
            <h2>Fill in the following information.</h2>
            <form action="">

                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" id="fullName" placeholder='John Doe'/>
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='example@email.com'/>
                <br />
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='+012 345 678 901'/>
                <br />
                <button type='submit' onSubmit={handleSubmit(e)}>Submit</button>
            </form>
        </>
    )
}