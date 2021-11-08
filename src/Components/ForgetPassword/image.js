import React from 'react'
import Lottie from 'react-lottie';
import signInImg from '../../Utilities/Images/signin.json';
export default function Image() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: signInImg,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
       
            <Lottie 
	    options={defaultOptions}
        height={500}
        width={500}
      />
     
    )
}
