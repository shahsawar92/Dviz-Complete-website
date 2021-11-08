import React from 'react'
import Image from '../Signin/image'
import ResetForm from './resetForm'

export default function ResetPassword() {
  return (
    
    <div className="flex flex-wrap-reverse md:h-screen justify-center overflow-x-hidden md:justify-arround ">
    <div className="flex flex-col flex-1 self-center"><Image /></div>
    <div className="w-11/12  self-center md:flex md:flex-col md:flex-1 "><ResetForm /></div>
</div>
  )
}
