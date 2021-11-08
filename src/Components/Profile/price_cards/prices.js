import React, { useState } from 'react'
import PaypalComponent from '../paypalComponent';

export default function Prices() {
    const [showModal, setShowModal] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);
    const [showModal3, setShowModal3] = React.useState(false);
   const values={disc:"starter",price:100}
  const  values2={disc:"pro",price:500}
  const  values3={disc:"vip",price:1000}
    const handleClick=(props)=>{
        
        if(props===1){
            
            setShowModal(true);
        }
        if(props===2){
            
            setShowModal2(true);
        }
        if(props===3){
            
            setShowModal3(true);
        }
    }
    return (
        <>
        {showModal &&<PaypalComponent setShowModal={setShowModal} values={values}/>}
        {showModal2 &&<PaypalComponent setShowModal={setShowModal2} values={values2}/>}
        {showModal3 &&<PaypalComponent setShowModal={setShowModal3} values={values3}/>}
        <div className="flex md:flex-row flex-col  md:justify-evenly ">
    
        
           <div  className="md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-t-2 ">
           <div className="flex flex-col py-4">
           <h1 className="self-center  text-xl">STARTER</h1>
                        <hr/>
                        <p className="text-sm self-center pt-4"> Start with a basic flow.</p>
                        <p className=" text-lg font-semibold self-center pt-4  ">Grooves : 3*</p>
                        <p className="text-lg font-semibold self-center pt-3 line-through">Extra Grooves : x</p>
                        <p className="text-lg font-semibold self-center pt-2 line-through ">Customization : x </p>
                        <h2 className="text-3xl font-semibold self-center pb-2 pt-4 ">$15</h2>
                        <button className=" w-4/5  border-2 py-2 shadow-lg self-center rounded-lg hover:bg-gray-500"
                         onClick={()=>handleClick(1)}
                        >Subscribe</button>
                   </div>

          
            </div>
            {/* end of first */}
            {/* 2nd */}
           
           <div  className="md:w-1/4 w-7/12 self-center bg-white shadow-xl  border-t-2 ">
           <div className="flex flex-col py-4">

           <h1 className="self-center text-xl">PRO</h1>
                        <hr/>
                        <p className="text-sm self-center px-7 pt-4"> Run multiple flows and become flexible while using our Lead CRM.</p>
                        <p className=" text-lg font-semibold self-center pt-2 ">Grooves : 6</p>
                        <p className="text-lg font-semibold self-center pt-3 ">Extra Grooves : 80</p>
                        <p className="text-lg font-semibold self-center pt-2 line-through ">Customization : x </p>
                        <h2 className="text-3xl font-semibold self-center pb-2 pt-2 ">$500</h2>
                        <button className="border-2 w-4/5 py-2 shadow-lg self-center rounded-lg hover:bg-gray-500 " 
                         onClick={()=>handleClick(2)}
                        >Subscribe</button>
                   </div>
            
            </div>
        
            {/* end of second */}
            {/* start of 3rd */}
           
           <div  className=" md:w-1/4 w-7/12 self-center my-6 bg-white shadow-xl border-t-2 ">
           <div className="flex flex-col py-4">
           <h1 className="self-center text-xl">VIP</h1>
                        <hr/>
                        <p className="text-sm self-center pt-4"> Build your own and more</p>
                        <p className=" text-lg font-semibold self-center pt-4 ">Grooves : 14**</p>
                        <p className="text-lg font-semibold self-center pt-3 ">Extra Grooves : $79</p>
                        <p className="text-lg font-semibold self-center pt-2 ">Customization : </p>
                        <h2 className="text-3xl font-semibold self-center pb-2 pt-4 ">$1000</h2>
                        <button className=" w-4/5 self-center border-2 shadow-lg rounded-lg hover:bg-gray-600 py-2"
                         onClick={()=>handleClick(3)}
                        >Subscribe</button>
                   </div>
            
            </div>
     
            {/* end of 3rd */}
            </div>
            </>
    )
}
