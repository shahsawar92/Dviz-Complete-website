import React, { useContext, useEffect, useState } from 'react'
import PayPal from '../paypal';
import PaypalComponent from '../paypalComponent';
import {useContexts} from '../../Context/context'
import axios from 'axios';

export default function Prices() {
    const [counterVip, setCounterVip]=useState(1)
    const [starterActive,setStarterActive]=useState(false)
    const [proActive,setproActive]=useState(false)
    const [vipActive,setvipActive]=useState(false)
    const [counterPro, setCounterPro]=useState(1)
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] =useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [addProGrooves,setaddProGroves]=useState(false)
    const [addVipGrooves,setaddVipGrooves]=useState(false);
    const {profileData }=useContext(useContexts);
  const plan_id="P-8XC30638NN0098448MEE2UFI";
  const plan_id2="P-4FC00435N8891101MMEE2VYQ";
  const plan_id3="P-96A251586U560802XMEE2WQI";
  const plan_id_addPro="P-3UF088138S573254CMEXZAWY";
  const plan_id_addVip="P-944133830R0875825MEXZAAA";
  let config = {
    headers: {
       'Content-Type': 'application/json'
    }
  }
  const URL='https://shahbaz.dviz.tech/plansubscription/';
  let starterPlan = profileData?.starter_plan_check;
  let proPlan = profileData?.pro_plan_check;
  let vipPlan = profileData?.vip_plan_check;
//   const values={
//       params:{
//       'id':4,
//       'username': 'rehman',
//       'plan':'Starter' }
//   }
  useEffect(()=>{
      if(starterPlan||proPlan||vipPlan){
      if(starterPlan){ setStarterActive(true); setvipActive(false);setproActive(false)}
      if (proPlan ) { setStarterActive(false); setvipActive(false);setproActive(true)}
      if (vipPlan )  { setStarterActive(false); setvipActive(true);setproActive(false)}
      }else{
         setStarterActive(false); setvipActive(false);setproActive(false)
      }
  } ,[starterPlan, proPlan, vipPlan])
  
  useEffect(()=>{
    axios.post(URL, {
        params: {
            'id':4,
            'username': 'rehman',
             'plan':'Starter'
        }
    },config)
    .then(response => {
      console.log("response of login:",response);
      if(response.status===200){
          
      }
    })
    .catch(error=>{
        console.log("profile:",error);
    })

    
  },[])
console.log("proactive, vipactive, starteractive",proActive,vipActive,starterActive);
  //functions
    const handleClick=(e,props)=>{
        console.log(e?.target?.innerText);
        if(props===1){
            
            setShowModal(true);
        }
        if(props===2){
            
            if(e?.target?.innerText=="Add Grooves"){
                setaddProGroves(true);
            }else
            setShowModal2(true);
        }
        if(props===3){
            if(e?.target?.innerText=="Add Grooves"){
                setaddVipGrooves(true);
            }else
            setShowModal3(true);
        }
    }
    const handleCounterminus=()=>{
            if(counterVip<=1){
                setCounterVip(1)
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
        if(counterPro<=1){
            setCounterPro(1)
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
        {addProGrooves &&<PaypalComponent setShowModal={setaddProGroves} plan_id={plan_id_addPro} name={"vip"} grooves_quantity={counterPro}/>}
        {addVipGrooves &&<PaypalComponent setShowModal={setaddVipGrooves} plan_id={plan_id_addVip} name={"vip"} grooves_quantity={counterVip}/>}

        <div className="flex md:flex-row flex-col md:justify-evenly ">
    
        
        <div  className={starterActive? "md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 border-red-600 ":(!vipActive && !proActive && !starterActive)?"md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 ":"md:w-1/4 w-7/12 opacity-40 self-center my-6 bg-white shadow-xl border-t-2"}>
           <div className="flex flex-col py-4">
           <h1 className="self-center  text-xl">STARTER</h1>
                        <hr/>
                        <p className="text-sm self-center pt-4"> Start with a basic flow.</p>
                        <p className=" text-lg font-semibold self-center pt-4  ">Grooves : 3*</p>
                        <p className="text-lg font-semibold self-center pt-3 line-through">Extra Grooves : x</p>
                        <p className="text-lg font-semibold self-center pt-2 line-through ">Customization : x </p>
                        <h2 className="text-3xl font-semibold self-center pb-2 pt-4 ">$15</h2>
                        <button className=" w-4/5  border-2 py-2 shadow-lg self-center rounded-lg hover:bg-gray-500"
                          onClick={(e)=>handleClick(e,1)}
                          disabled={proActive || vipActive } 
                        >Subscribe</button>
                   </div>

          
            </div>
            {/* end of first */}
            {/* 2nd */}
           
            <div  className={proActive? "md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 border-red-600 ":(!vipActive && !proActive && !starterActive)?"md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 ":"md:w-1/4 w-7/12 opacity-40 self-center my-6 bg-white shadow-xl border-t-2"}>
           <div className="flex flex-col py-4">

           <h1 className="self-center text-xl">PRO</h1>
                        <hr/>
                        <p className="text-sm self-center px-7 pt-4"> Run multiple flows and become flexible while using our Lead CRM.</p>
                        <p className=" text-lg font-semibold self-center pt-2 ">Grooves : 6</p>
                        <p className="text-lg font-semibold self-center pt-3 ">Extra Grooves : 80</p>
                        <p className="text-lg font-semibold self-center pt-2 line-through ">Customization : x </p>
                        <h2 className="text-3xl font-semibold self-center pb-2 pt-2 ">$500</h2>

                        <span className={proActive?"self-center": "hidden"}
                        
                        id={"VipCounter"} ><button className="py-2 px-2 bg-gray-400 " onClick={()=>handleCounterminusPro()}>-</button><span className="border-2 border-gray-800 py-2 px-4">{counterPro}</span> <button className="py-2 px-2 bg-gray-400 " onClick={()=>handleCounterplusPro()}>+</button></span>
                        <button className="border-2 w-4/5 py-2 shadow-lg self-center rounded-lg hover:bg-gray-500 "
                        disabled={starterActive || vipActive }  
                        onClick={(e)=>handleClick(e,2)}
                        >{proActive?"Add Grooves":"Subscribe"}</button>
                   </div>
            
            </div>
        
            {/* end of second */}
            {/* start of 3rd */}
           
            <div  className={vipActive? "md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 border-red-600 ":(!vipActive && !proActive && !starterActive)?"md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 ":"md:w-1/4 w-7/12 opacity-40 self-center my-6 bg-white shadow-xl border-t-2"}>
           <div className="flex flex-col py-4">
           <h1 className="self-center text-xl">VIP</h1>
                        <hr/>
                        <p className="text-sm self-center pt-4"> Build your own and more</p>
                        <p className=" text-lg font-semibold self-center pt-4 ">Grooves : 14**</p>
                        <p className="text-lg font-semibold self-center pt-3 ">Extra Grooves : $70</p>
                        <p className="text-lg font-semibold self-center pt-2 ">Customization : </p>
                        <h2 className="text-3xl font-semibold self-center pb-2 pt-4 ">$1000</h2>

                        <span className={vipActive?"self-center": "hidden"}
                        
                        id={"VipCounter"} ><button className="py-2 px-2 bg-gray-400 " onClick={()=>handleCounterminus()}>-</button><span className="border-2 border-gray-800 py-2 px-4">{counterVip}</span> <button className="py-2 px-2 bg-gray-400 " onClick={()=>handleCounterplus()}>+</button></span>
                        <button disabled={starterActive || proActive} className=" w-4/5 self-center border-2 shadow-lg rounded-lg hover:bg-gray-600 py-2"
                         onClick={(e)=>handleClick(e,3)}
                        >{vipActive?"Add Grooves":"Subscribe"}</button>
                   </div>
            
            </div>
     
            {/* end of 3rd */}
            </div>
            </>
    )
}
