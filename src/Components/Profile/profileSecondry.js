import React , { useContext, useState,useEffect } from 'react'
import './style.css'
import EditFrom from './nameEdit';
import { useContexts } from '../Context/context';
import TranscationHistory from './transcationHistory';
import axios from 'axios';


export default function ProfileSecondry() {
    const image =useContext(useContexts);
    const {profileImg, setProfileImg} = image;
    // useEffect(() => {
    //     var profileUpdate = JSON.parse(localStorage.getItem('profileUpdate'));
    //     setFName(profileUpdate.first_name);
    //     setLName(profileUpdate.last_name);
    //     setPhone(profileUpdate.phone);
    //     setEmail(profileUpdate.email)
    //     }, [1])
      // Retrieve the object from storage
      var retrievedObject = JSON.parse(localStorage.getItem('user'));
      console.log('retrievedObject: ', retrievedObject);

    const [uName,setUName]= useState(retrievedObject.username);
    const [fName,setFName]= useState(retrievedObject.first_name);
    const [lName,setLName]= useState(retrievedObject.last_name);
    const [email,setEmail]= useState(retrievedObject.email);
    const [phone,setPhone]= useState(retrievedObject.phone);
    
    const [display,setDisplay]=useState(false)
    const [TransH,setTrans]=useState(false)
    let config = {
        headers: {
           'Content-Type': 'application/json'
        }
      }
      const URL='https://shahbaz.dviz.tech/update/ProfileImage/'
//   useEffect(()=>{
//     axios.post(URL, profileImg ,config)
//     .then(response => {
       
//         console.log('image response :',response);
    
//     }).catch(error=>{ console.log(error); }  )    },[profileImg])
  
    const callTrans=()=>{
        setTrans(true);
    }
    const changeInfo=()=>{
        setDisplay(true);
    }
    const userInfo={
        uName,email,fName,lName
    }
   
    const changePhoto=(e)=>{
        let newImage= new FileReader();
        newImage.onload=()=>{
            if(newImage.readyState===2){
                setProfileImg(newImage.result);
            }
        }
        newImage.readAsDataURL(e.target.files[0]);
        e.preventDefault();
    }
    
    
    
    
    
    
    
    return (
        <div className="relative z-100">
         <EditFrom display={display} setD={setDisplay} userInfo={userInfo}/>
         <TranscationHistory display={TransH} setD={setTrans} />
        <div className={" overflow-y-auto "}>
        <h1 className=" text-xl pb-2">Profile & account</h1>
         <div> 
                    <input type="file" id="actual-btn" onChange={changePhoto} className="hidden" accept="image/*"/>
                
                <label htmlFor="actual-btn"><svg  xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5 svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg></label>
            <div className={"borderUser "}>
                <img src={profileImg} alt="profile change" className={"imgUser rounded-full"}/>
            </div>
            </div>
            {/* data below image */}
            <br />
            <h3 onClick={changeInfo} className={"hover:bg-gray-100 w-4/5 pl-2 py-3 flex justify-between  rounded-lg text-xl cursor-pointer"}>Personal information
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
            </h3>
            
            <div className="text-xs pb-5 ">
            <div className={"hover:bg-gray-100 py-3 pl-2 text-xs w-4/5 rounded cursor-pointer"}>
            <div className="" >
                Username
            </div>
            <div>{uName}</div>
            </div>
            
           
          
            <div className={"hover:bg-gray-100 py-3 pl-2 w-4/5 rounded cursor-pointer"}>
            <div title={'hello'}>
                First Name
            </div>
            <div>{fName}</div>
            </div>
            
            <div className={"hover:bg-gray-100 py-3 pl-2 w-4/5 rounded cursor-pointer"}>
            <div>
                Last Name 
            </div> 
            <div>{lName}</div>
            </div>
           
            <div className={"hover:bg-gray-100 py-3 pl-2 w-4/5 rounded flex-wrap cursor-pointer"}>
            <div>
                Email
            </div>
            <div>{email}</div>
            </div>
            <br/>
            <div className={"hover:bg-gray-100 py-3 w-4/5 pl-2 rounded cursor-pointer"}>
            <div>
                Phone
            </div>
            <div>{phone}</div>
            </div>
            </div>
            {/* buttons */}
            <button className={"py-2 w-4/5 bg-primeryClr hover:bg-gray-400 text-white rounded mt-2"}>Connections</button> <br/>
            <button className={"py-2 w-4/5  bg-primeryClr hover:bg-gray-400 text-white rounded mt-2" } onClick={callTrans} >Transcation History</button>
        </div>
        </div>
    )
}

