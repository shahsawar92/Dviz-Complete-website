import React from 'react'
import { images } from '../../Utilities/Images'
import Image from '../Signin/image'

export default function PasswordChanged() {
    return (
        <div>
            <div className="flex flex-wrap-reverse md:h-screen justify-center overflow-x-hidden md:justify-arround ">
            <div className="flex flex-col flex-1 self-center  lg:w-1/2"><Image /></div>
            <div className="w-11/12  self-center md:flex md:flex-col md:flex-1 lg:w-1/2 ">
                
                <div className='md:w-3/4'>  
    
                <div className='bg-white py-10'>
    
                <h1 className='text-2xl  font-medium text-primary mt-4 mb-12 text-center'>
                  <img className={"m-auto"} src={images.logo} alt="DVIZ LOGO" ></img>
                </h1>
                <div>
                <h2 className="text-lg font-semibold text-center ">Change Password</h2>
                    <div className="text-center">Your password is now changed..</div>
                    
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
