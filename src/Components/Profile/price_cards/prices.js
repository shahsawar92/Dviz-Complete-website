import React, { useEffect, useState } from 'react'
import PayPal from '../paypal';

export default function Prices() {
    const [counterVip, setCounterVip]=useState(0)
    const [starterActive,setStarterActive]=useState(false)
    const [proActive,setproActive]=useState(false)
    const [vipActive,setvipActive]=useState(false)
    const [counterPro, setCounterPro]=useState(0)
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] =useState(false);
    const [showModal3, setShowModal3] = useState(false);
  const plan_id="P-8XC30638NN0098448MEE2UFI";
  const plan_id2="P-4FC00435N8891101MMEE2VYQ";
  const plan_id3="P-96A251586U560802XMEE2WQI";
  
  let starterPlan = false;
  let proPlan = true;
  let vipPlan = false;
  useEffect(()=>{
      if(starterPlan){ setStarterActive(true); setvipActive(false);setproActive(false)}
      if (proPlan ) { setStarterActive(false); setvipActive(false);setproActive(true)}
      if (vipPlan )  { setStarterActive(false); setvipActive(true);setproActive(false)}
  } ,[])
  
    
  //functions
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
    const handleCounterminus=()=>{
            if(counterVip<=0){
                setCounterVip(0)
            }else 
            setCounterVip(counterVip-1);
        
    }
    const handleCounterplus=()=>{
            if(counterVip>=10){
                setCounterVip(10);
            }else
            setCounterVip(counterVip+1);
       
   
    }
    const handleCounterminusPro=()=>{
        if(counterPro<=0){
            setCounterPro(0)
        }else 
        setCounterPro(counterPro-1);
    
}
const handleCounterplusPro=()=>{
        if(counterPro>=10){
            setCounterPro(10);
        }else
        setCounterPro(counterPro+1);
}
    return (
        <>
        {showModal &&<PayPal setShowModal={setShowModal} plan_id={plan_id} name={"starter"}/>}
        {showModal2 &&<PayPal setShowModal={setShowModal2} plan_id={plan_id2} name={"pro"}/>}
        {showModal3 &&<PayPal setShowModal={setShowModal3} plan_id={plan_id3} name={"vip"}/>}
        <div className="flex md:flex-row flex-col md:justify-evenly ">
    
        
           <div  className={starterActive ? "md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 border-red-600 ":"md:w-1/4 w-7/12 opacity-40 self-center my-6 bg-white shadow-xl border-t-2"}
        >
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
                          disabled={vipActive || proActive} 
                        >Subscribe</button>
                   </div>

          
            </div>
            {/* end of first */}
            {/* 2nd */}
           
            <div  className={proActive ? "md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 border-red-600 ":"md:w-1/4 w-7/12 opacity-40 self-center my-6 bg-white shadow-xl border-t-2"}>
           <div className="flex flex-col py-4">

           <h1 className="self-center text-xl">PRO</h1>
                        <hr/>
                        <p className="text-sm self-center px-7 pt-4"> Run multiple flows and become flexible while using our Lead CRM.</p>
                        <p className=" text-lg font-semibold self-center pt-2 ">Grooves : 6</p>
                        <p className="text-lg font-semibold self-center pt-3 ">Extra Grooves : 80</p>
                        <p className="text-lg font-semibold self-center pt-2 line-through ">Customization : x </p>
                        <h2 className="text-3xl font-semibold self-center pb-2 pt-2 ">$500</h2>
                        <span className={vipActive||starterActive?"hidden": "self-center"} id={"VipCounter"} ><button className="py-2 px-2 bg-gray-400 " onClick={()=>handleCounterminusPro()}>-</button><span className="border-2 border-gray-800 py-2 px-4">{counterPro}</span> <button className="py-2 px-2 bg-gray-400 " onClick={()=>handleCounterplusPro()}>+</button></span>
                        <button className="border-2 w-4/5 py-2 shadow-lg self-center rounded-lg hover:bg-gray-500 "
                        disabled={starterActive || vipActive}  
                        onClick={()=>handleClick(2)}
                        >{proActive?"Add Grooves":"Subscribe"}</button>
                   </div>
            
            </div>
        
            {/* end of second */}
            {/* start of 3rd */}
           
            <div  className={vipActive ? "md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 border-red-600 ":"md:w-1/4 w-7/12 opacity-40 self-center my-6 bg-white shadow-xl border-t-2"}>
           <div className="flex flex-col py-4">
           <h1 className="self-center text-xl">VIP</h1>
                        <hr/>
                        <p className="text-sm self-center pt-4"> Build your own and more</p>
                        <p className=" text-lg font-semibold self-center pt-4 ">Grooves : 14**</p>
                        <p className="text-lg font-semibold self-center pt-3 ">Extra Grooves : $79</p>
                        <p className="text-lg font-semibold self-center pt-2 ">Customization : </p>
                        <h2 className="text-3xl font-semibold self-center pb-2 pt-4 ">$1000</h2>
                        <span  className={proActive||starterActive?"hidden": "self-center"} id={"VipCounter"} ><button className="py-2 px-2 bg-gray-400 " onClick={()=>handleCounterminus()}>-</button><span className="border-2 border-gray-800 py-2 px-4">{counterVip}</span> <button className="py-2 px-2 bg-gray-400 " onClick={()=>handleCounterplus()}>+</button></span>
                        <button disabled={starterActive || proActive} className=" w-4/5 self-center border-2 shadow-lg rounded-lg hover:bg-gray-600 py-2"
                         onClick={vipActive?()=>handleClick(3):()=>alert("done")}
                        >{vipActive?"Add Grooves":"Subscribe"}</button>
                   </div>
            
            </div>
     
            {/* end of 3rd */}
            </div>
            </>
    )
}
