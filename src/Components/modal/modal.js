import React, { useContext, useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import { useContexts } from '../Context/context';
import { icons } from '../../Utilities/flow_icons';
import './style.css'
import axios from 'axios';


export default function Model(props) {
    const history= useHistory();
    const {popUpData ,toggleButton,settoggleButton}=useContext(useContexts);
    var retrievedObject = JSON.parse(localStorage.getItem('userdata'));
    const [activateBtnWait,setactivateBtnWait]=useState(false)
      console.log('retrievedObject: ', retrievedObject);
    let config = {
        headers: {
           'Content-Type': 'application/json'
        }
      }
      const url_to_Activate='https://shahbaz.dviz.tech/activateflow/';
      const url_to_addToDashboard='https://shahbaz.dviz.tech/addflow/';

    const values_to_activate={
            "id":retrievedObject.user.pk,
             "username":retrievedObject.user.username,
            'flowName':popUpData?.popUpData[0]?.flowName,
            'flowRef':popUpData?.popUpData[0]?.flowRef,
            'flowLink':popUpData?.popUpData[0]?.flowLink,
            'grooves': popUpData?.popUpData[0]?.NoOFGroovs,
    }

    const [useEffectToggle,setuseEffectToggle]=useState(false);
    const [toggle,settoggle]=useState(false);
     const [dashbaordMsg, setdashbardMsg] = useState("")
    const [toggleActivate,settoggleActivate]= useState(false);
    const [useEffectToggleActivate, setuseEffectToggleActivate]=useState(false);
    var retrievedObject = JSON.parse(localStorage.getItem('userdata'));

      //launch flow function to launch directly from dashboard
      const launchFlow=()=>{
        history.push("/"+popUpData?.popUpData[0]?.flowLink)
      }
        const handleBack=()=>{
        props.setVisiable(false);
    } 
    const handleFunction=(e)=>{
        setdashbardMsg(e.target.innerText)
        settoggle(true)
       setuseEffectToggle(!useEffectToggle)
    }
    //remove from dashboard ftn
    //handle activate function
    const handleActivate=()=>{
        settoggleActivate(true);
        settoggleButton(!toggleButton)
        setuseEffectToggleActivate(!useEffectToggleActivate);
    }
    
    const Card_Check_URL="https://shahbaz.dviz.tech/store/";
// call to fetch data for add to dashboard 
    useEffect(()=>{
        
       if(toggle){
        setactivateBtnWait(true)
        axios.get(url_to_addToDashboard, 
             {
       params:{
            "id":retrievedObject.user.pk,
             "username":retrievedObject.user.username,
            'flowName':popUpData?.popUpData[0]?.flowName,
            'flowRef':popUpData?.popUpData[0]?.flowRef,
            'dashboardMessage':dashbaordMsg,

        }
    },config)
        .then(res=>{console.log("response of addtodb",res); 
        
        axios.get(Card_Check_URL,{
            params: {
                "id":retrievedObject.user.pk,
                "username":retrievedObject.user.username
        }
            },config).then((res)=>{
                
                localStorage.setItem("cardCheck",JSON.stringify(res.data))
              })
    
        
        settoggle(false); 
        history.push("/dashboard");
    })
        .catch(err=>{console.log("response of addtodb",err); settoggle(false);})}
    
     },[useEffectToggle])
// useeffect for activate flow
     useEffect(()=>{

        if(toggleActivate){
            setactivateBtnWait(true);
            settoggleActivate(false);
            axios.post(url_to_Activate,values_to_activate, config)
            .then(res=>{console.log("response of addtodb",res); settoggleActivate(false);
            setactivateBtnWait(false);

            axios.get(Card_Check_URL,{
                params: {
                    "id":retrievedObject.user.pk,
                    "username":retrievedObject.user.username
            }
                },config).then((res)=>{
                    
                    localStorage.setItem("cardCheck",JSON.stringify(res.data))
                  }) 
            alert('flow activated');
        })
            .catch(err=>{console.log("response of addtodb",err); 
            setactivateBtnWait(false);

            settoggleActivate(false);
            
        })}

     },[useEffectToggleActivate])
    
    return (
        <div className={` bg-black md-effect-1 anim animated fadeIn fixed w-screen z-50 pin overflow-auto bg-smoke-dark bg-opacity-90 inset-0  ${props.visiable? "flex":"hidden"} justify-center items-center`} >
        {popUpData?.popUpData[0]?.NoOFGroovs ? 
          <div className={"animated fadeInUp fixed min-w-lg Mcss md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8  md:rounded md:h-auto md:shadow flex flex-col bg-white   rounded shadow-lg mx-7 opacity-100"}>
                {/* header */}
                <div className={"flex flex-start justify-between items-center font-bold text-lg border-b-2 h-12  text-black"}>
                    <div>{popUpData?.popUpData[0]?.flowName} | {popUpData?.popUpData[0]?.NoOFGroovs}</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" onClick={handleBack} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
                {/* discription  */}
                <div className={"w-full flex flex-col md:flex-row md:h-96"}> 
                     {/* first */}
                    <div className="px-16 pb-7 lg:pb-16 ">
                        <div className="w-24 h-24 py-8 my-5 border-4 border-red-400 rounded-full text-center">P</div>
                        <div className="">
                    <h2 className={"text-lg  pb-4 font-bold text-primeryClr"}>{popUpData?.popUpData[0]?.ProductModuleTitle}</h2>
                    {popUpData?.popUpData[0]?.ProductModuleTitleArray.map(element=><p className={"text-sm text-opacity-50 "} key={element}>
                    <img className="w-5 h-5 inline-block" src={icons.tick} alt="tickmark" />
                         {element}</p>)}
                         </div> 
                    </div>
                    <hr className="w-1 hidden md:inline-block relative top-24 bg-gray-300 h-52" />

                    {/* second row */}
                    <div className="px-10    pb-7 lg:pb-16 ">
                    <div className="w-24 h-24  py-8 my-5 border-4 border-red-400  text-center">T&V</div>
                    <div className=""> 
                    <h2 className={"text-lg pb-4  font-bold text-primeryClr"}>{popUpData?.popUpData[0]?.TVModuleTitle}</h2>
                    {popUpData?.popUpData[0]?.TVModuleTitleArray.map(element=><p className={"text-sm text-opacity-50"} key={element}>
                    <img className="w-5 h-5 inline-block" src={icons.tick} alt="tickmark" />
                        {element}</p>)}
                    </div>
                    </div>
                    <hr className="w-1 hidden md:inline-block relative top-24 bg-gray-300 h-52" />
                    {/* 3rd row */} 
                    <div className="px-16 lg:pb-16">
                    <div className="w-20 h-20 lg:ml-5 py-8 my-6 border-4 border-red-400 transform rotate-45  text-center">
                        <div className="transform -rotate-45">I</div>
                        </div>
                    <h2 className={"text-lg font-bold pb-4 text-primeryClr"}>{popUpData?.popUpData[0]?.IntegrationModuleTitle}</h2>
                    {popUpData?.popUpData[0]?.IntegrationModuleTitleArray.map(element=><span className={"text-sm text-opacity-50 relative"} key={element}> 
                    <img className="w-5 h-5 inline-block" src={icons.tick} alt="tickmark" />
                    {element} <br /></span>)}
                    </div>


                                    
                </div>
                {/* footer */}
                {console.log("check data here:",popUpData?.popUpData[0]?.checkDashboard,popUpData?.popUpData[0]?.checkActivate)}
                <div className={"flex flex-row justify-end py-4 border-t-2   "}>
                    <button  onClick={handleBack} className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}>
                        Back
                    </button>
                    { !popUpData?.popUpData[0]?.checkDashboard &&
                    <button  onClick={e=>handleFunction(e)} className={"bg-primeryClr rounded h-12 text-white px-4 m-2"}>
                        Add to Dashboard
                    </button>}
                   { popUpData?.popUpData[0]?.checkDashboard &&
                   <button onClick={e=>handleFunction(e)}   className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}>
                       Remove from Dashboard
                    </button>}
                    {   !popUpData?.popUpData[0]?.checkActivate &&
                    <button  onClick={handleActivate} className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}>
                       {activateBtnWait?"please wait... ": "Activate"}
                    </button> }  
                    {   popUpData?.popUpData[0]?.checkActivate && ( 
                    <button  onClick={launchFlow} className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}
                    >
                        Launch
                    </button> )
                }                   
                </div>
            </div>:
            <div className={"animated fadeInUp fixed min-w-lg  md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8  md:rounded md:h-auto md:shadow flex flex-col bg-white   rounded shadow-lg mx-7 opacity-100"}> 
            {/*header  */}
            <div className={"flex flex-start justify-between items-center font-bold text-lg border-b-2 h-12  text-black"}>
                    <div>Flow</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" onClick={handleBack} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
                <div className="py-8 px-10">Find out more by mailing us at: <div>info@dviz.tech</div> </div>
                {/* footer */}
                <div className={"flex flex-row justify-end pt-4 pb-2 border-t-2   "}>
                    <button  onClick={handleBack} className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}>
                        Back
                    </button>
                    </div>
            
            </div>
            }
        </div>
    )
}