import React, { useState } from 'react'
import './style.css'
export default function TranscationHistory(props) {
    const [Toggle, setToggle]=useState(true);
    const handleBack=()=>{
        props.setD(false);
    } 
    const handleCheckBox=()=>{
        setToggle(!Toggle)
    }

    return (
        <div className={` bg-black md-effect-1 anim animated fadeIn fixed w-screen z-50 pin overflow-auto bg-smoke-dark bg-opacity-90  inset-0  ${props.display? "flex":"hidden"} justify-center items-center`} >
            <div className={"animated fadeInUp fixed min-w-lg  md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8  md:rounded md:h-auto md:shadow flex flex-col bg-white   rounded shadow-lg mx-7 opacity-100"}>
                {/* header */}
                <div className={"flex flex-start justify-between items-center font-bold text-lg border-b-2 h-12  text-black"}>
                    <div>Transcation History</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" onClick={handleBack} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
                {/* discription  */}
                <div className={" flex-row flex-row-wrap w-full contents -mx-48 "}>
                     
                       <form>
                           <label className="pr-48" htmlFor="startDate">From Date</label>
                           <input type="date" id="startDate" ></input> <br/><br/>
                           <label className="pr-48" htmlFor="endDate">End Date   </label>
                           <input type="date" id="endDate" ></input><br/><br/>
                            PDF  
                            <label className="switch" onClick={handleCheckBox}>
                            <input type="checkbox"  />
                            <span className="slider round"></span>
                            </label>
                            CSV

                       </form>

                </div>
                {/* footer */}
                <div className={"flex flex-row justify-end py-4 border-t-2   "}>
                    <button  onClick={handleBack} className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}>
                        Email
                    </button>
                    <button  onClick={handleBack} className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}>
                        Download
                    </button>
                    
                </div>
            </div>
        </div>
    )
}