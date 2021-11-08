import React from 'react'
import SignInForm from './signInForm'
import Image from './image'
import './style.css'


// main component to call  both of the components that render in the page
export default function SignIn() {
    return (
        <div className="flex flex-wrap-reverse md:h-screen justify-center overflow-x-hidden md:justify-arround ">
            <div className="flex flex-col flex-1 self-center"><Image /></div>
            <div className="w-11/12  items-center self-center md:flex md:flex-col md:flex-1 "><SignInForm /></div>
        </div>
    )
}
