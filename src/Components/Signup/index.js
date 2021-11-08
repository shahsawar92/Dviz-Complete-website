import React from 'react'
import SignUpForm from './signUpForm'
import Image from './image'


// main component to call  both of the components that render in the page
export default function SignUp() {
    return (
        <div  className="flex flex-wrap-reverse justify-center overflow-x-hidden md:justify-arround  ">
            <div className="flex flex-col self-center flex-1"><Image /></div>  
            <div className="w-11/12  items-center md:flex md:flex-col md:flex-1 "><SignUpForm /></div>
            
        </div>
    )
}
