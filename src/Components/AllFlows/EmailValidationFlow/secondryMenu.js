import React, { useRef, useState } from 'react'
import './style.css';
export default function SecondryMenu_EmailValidation() {
    const ref = useRef()
        const [ExtentionValue,SetExtensionValue]=useState(false)

    const handleFileChange=(e)=>{
        e.preventDefault();
        const output= document.getElementById("uploadFile");
        console.log("inserting file:",ref.current.files[0].name);
        if (!hasExtension(ref.current.files[0].name, ['.docx','.doc'])) {
            SetExtensionValue(true);
        }else{
            SetExtensionValue(false)
        }
        
        output.value=ref.current.files[0].name
        // console.log(`Selected file - ${
        //     ref.current.files[0].name
        //   }`);
    }
    function hasExtension(inputID, exts) {
        console.log("testing file:",inputID);
        return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(inputID);
    }
    const handleClick=()=>{
        if(ExtentionValue){
            alert("please insert correct extention file!");
        }
        else{
            alert("are you sure to submit")
        }
    }
    return (
        <div className="w-5/6 overflow-y-auto ">
           <h1 className="text-primeryClr text-3xl font-bold"> Email Validation</h1>

           <textarea name="emailValidation" id="emailValidation" cols="30" rows="10" className="border-2 mt-4 p-4 w-11/12 textareaemail" placeholder={`paste Emails here seperated by comma ','`}></textarea>

           <h3 className="text-primeryClr fontsemibold mt-3 text-base">Please upload list indicating column emails.</h3>
                    <div className="mb-2"> 
                        <div className="relative w-11/12 h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                            <div className="absolute">
                                <div className="flex flex-col items-center "><span className="block text-gray-400 font-normal">Attach you file here</span> <span className="block text-gray-400 font-normal">or</span> <span className="block text-blue-400 font-normal">Browse file</span> </div>
                                <input id="uploadFile" value="" className= {`text-center ${ExtentionValue? `bg-red-700`:''}`} placeholder="No File choosen" disabled="disabled" />
                            </div> <input type="file" ref={ref} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="h-full w-full opacity-0" onChange={handleFileChange} />
                            
                        </div>
                        <div className={`flex w-11/12 justify-center text-center text-gray-400 ${ExtentionValue? `bg-red-600`:'bg-white'}`}> Accepted file type:.csv, .xlxs only</div>
                    </div>
                    <div className="mt-3  pb-3"> <button className="w-11/12 h-12 text-lg  bg-blue-600 rounded text-white hover:bg-blue-700" onClick={handleClick}>Upload</button> </div>
                
        </div>
    )
}




