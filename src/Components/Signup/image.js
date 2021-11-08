import React from 'react'
import signUp from '../../Utilities/Images/signup.json';
import Lottie from 'react-lottie';
export default function Image() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: signUp,
       
      };
    return (
        <div className="lg:mx-0 mx-3 px-10">
            <Lottie 
	    options={defaultOptions}
        height={500}
        width={500}
      />
        </div>
    )
}
