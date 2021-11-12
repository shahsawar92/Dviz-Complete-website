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
   
    const {profileData,updateInfo,setupdateInfo }=useContext(useContexts);
    
    
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

  let starterPlan = profileData?.starter_plan_check;
  let proPlan = profileData?.pro_plan_check;
  let vipPlan = profileData?.vip_plan_check;

//   useEffect(()=>{
//       if(starterPlan||proPlan||vipPlan){
//       if(starterPlan){ setStarterActive(true); setvipActive(false);setproActive(false);setaddProGroves(false);setaddVipGrooves(false)}else
//       if (proPlan ) { setStarterActive(false); setvipActive(false);setproActive(true);setaddProGroves(false);setaddVipGrooves(false)}else
//       if (vipPlan )  { setStarterActive(false); setvipActive(true);setproActive(false);setaddProGroves(false);setaddVipGrooves(false)}
//       }else{
//          setStarterActive(false); setvipActive(false);setproActive(false);setaddProGroves(false);setaddVipGrooves(false)
//       }
//   } ,[updateInfo])

useEffect(()=>{

    if(starterPlan){ setStarterActive(true); setvipActive(false);setproActive(false)}

    if (proPlan ) { setStarterActive(false); setvipActive(false);setproActive(true)}

    if (vipPlan )  { setStarterActive(false); setvipActive(true);setproActive(false)}

  } ,[updateInfo])


//console.log("proactive, vipactive, starteractive",proActive,vipActive,starterActive);
  //functions
    //  const handleClick=(e,props)=>{
    //     console.log(e?.target?.innerText);
    //     setbuttonClicked(!buttonClicked);
      
    //     setPlanClickedName(e?.target?.innerText);
    //     if(props==='Starter'){
            
    //         setShowModal(true);
    //         setPlanClickedName("Starter")
    //     }
    //     if(props==='Pro'){
            
    //         if(e?.target?.innerText=="Add Grooves"){
    //             setStarterActive(false);
    //              setvipActive(false);
    //             setproActive(false);
    //             setaddVipGrooves(false)
    //             setaddProGroves(true);
    //         }else
    //         setPlanClickedName("Pro")
    //         setShowModal2(true);
    //     }
    //     if(props==='Vip'){
    //         if(e?.target?.innerText=="Add Grooves"){
    //             setStarterActive(false);
    //             setproActive(false);
    //             setaddVipGrooves(false)
    //             setaddProGroves(true);
    //             setaddVipGrooves(true);
    //         }else
    //         setPlanClickedName("Vip")
    //         setShowModal3(true);
    //     }
    // }

    const handleClick=(e,props)=>{
       
        console.log(e.target.innerText);
    
        if(props=="Starter"){
            setShowModal(true);
        }
        if(props=='Pro'){
           if(e.target.innerText=="Add Grooves"){
                setaddProGroves(true); 
            }else  
            setShowModal2(true);  
        }  
        if(props=='Vip'){  
            if(e.target.innerText=="Add Grooves"){  
                setaddVipGrooves(true);  
            }else
             setShowModal3(true);
         }
    
    }
//     const handleCounterminus=()=>{
//             if(counterVip<=1){
//                 setCounterVip(1)
//             }else 
//             setCounterVip(counterVip-1);
        
//     }
//     const handleCounterplus=()=>{
//             if(counterVip>=10){
//                 setCounterVip(10);
//             }else
//             setCounterVip(counterVip+1);
//     }
//     const handleCounterminusPro=()=>{
//         if(counterPro<=1){
//             setCounterPro(1)
//         }else 
//         setCounterPro(counterPro-1);
    
// }
// const handleCounterplusPro=()=>{
//         if(counterPro>=10){
//             setCounterPro(10);
//         }else
//         setCounterPro(counterPro+1);
// }
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
       
        {showModal &&<PayPal setShowModal={setShowModal} plan_id={plan_id} name={"Starter"}/>}
        {showModal2 &&<PayPal setShowModal={setShowModal2} plan_id={plan_id2} name={"Pro"}/>}
        {showModal3 &&<PayPal setShowModal={setShowModal3} plan_id={plan_id3} name={"Vip"}/>}
        {addProGrooves && <PaypalComponent setShowModal={setaddProGroves} plan_id={plan_id_addPro} name={"Vip"} grooves_quantity={counterPro} /> }
        {addVipGrooves && <PaypalComponent setShowModal={setaddVipGrooves} plan_id={plan_id_addVip} name={"Vip"} grooves_quantity={counterVip} />} 

        <div className="flex md:flex-row flex-col md:justify-evenly ">
    
        
        <div  className={starterActive? "md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 border-red-600 ":(!vipActive && !proActive && !starterActive)?"md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 ":"md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-t-2"}>
           <div className="flex flex-col py-4">
           <h1 className="self-center  text-xl">STARTER</h1>
                        <hr/>
                        <p className="text-sm self-center pt-4"> Start with a basic flow.</p>
                        <p className=" text-lg font-semibold self-center pt-4  ">Grooves : 3*</p>
                        <p className="text-lg font-semibold self-center pt-3 line-through">Extra Grooves : x</p>
                        <p className="text-lg font-semibold self-center pt-2 line-through ">Customization : x </p>
                        <h2 className="text-3xl font-semibold self-center pb-2 pt-4 ">$15</h2>
                        <button className= {vipActive || proActive?" w-4/5 self-center border-2 shadow-lg rounded-lg hover:bg-gray-600 py-2":"bg-primeryClr text-white w-4/5 self-center border-2 shadow-lg rounded-lg hover:bg-gray-600 py-2" }
                          onClick={(e)=>handleClick(e,'Starter')}
                          disabled={proActive || vipActive } 
                        >Subscribe</button>
                   </div>

          
            </div>
            {/* end of first */}
            {/* 2nd */}
           
            <div  className={proActive? "md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 border-red-600 ":(!vipActive && !proActive && !starterActive)?"md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 ":"md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-t-2"}>
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
                        <button className= {starterActive || vipActive?" w-4/5 self-center border-2 shadow-lg rounded-lg hover:bg-gray-600 py-2":"bg-primeryClr text-white w-4/5 self-center border-2 shadow-lg rounded-lg hover:bg-gray-600 py-2" }
                        disabled={starterActive || vipActive }  
                        onClick={(e)=>handleClick(e,'Pro')}
                        >{proActive?"Add Grooves":"Subscribe"}</button>
                   </div>
            
            </div>
        
            {/* end of second */}
            {/* start of 3rd */}
           
            <div  className={vipActive? "md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 border-red-600 ":(!vipActive && !proActive && !starterActive)?"md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-2 ":"md:w-1/4 w-7/12  self-center my-6 bg-white shadow-xl border-t-2"}>
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
                        <button disabled={starterActive || proActive} className= {starterActive || proActive?" w-4/5 self-center border-2 shadow-lg rounded-lg hover:bg-gray-600 py-2":"bg-primeryClr w-4/5 self-center text-white border-2 shadow-lg rounded-lg hover:bg-gray-600 py-2" }
                         onClick={(e)=>handleClick(e,'Vip')}
                        >{vipActive?"Add Grooves":"Subscribe"}</button>
                   </div>
            
            </div>
     
            {/* end of 3rd */}
            </div>
            </>
    )
}
