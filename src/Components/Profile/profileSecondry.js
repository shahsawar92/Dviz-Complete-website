import React , { useContext, useState,useEffect } from 'react'
import './style.css'
import EditFrom from './nameEdit';
import { useContexts } from '../Context/context';
import TranscationHistory from './transcationHistory';

import axios from 'axios';
import { validateYupSchema } from 'formik';


export default function ProfileSecondry() {
        //   Retrieve the object from storage
        var retrievedObject = JSON.parse(localStorage.getItem('userdata'));
        console.log('retrievedObject: ', retrievedObject);
    const {profileImg,profileData,setProfileData} =useContext(useContexts);
    console.log("profile data ffrom context",profileData);
    // const {profileImg, setProfileImg} = image;
    // const profile_image={
    //     'profile_image':""  
    // }

    let config = {
        headers: {
            'Content-Type': 'application/json'
            
        }
      }
      const URL='https://shahbaz.dviz.tech/update/ProfileImage/'
      const URL_PROFILE="https://shahbaz.dviz.tech/profile_page/"

    useEffect(() => {
       
        }, [])

       const data= { "id": retrievedObject.user.pk,
                     "username":retrievedObject.user.username
                    }
                    console.log("data here:",data);
        
    

      //useeffect for profiledata
        useEffect(()=>{
        //     fetch(URL_PROFILE, { headers })
        // .then(response => response.json())
        // .then(data => console.log("data of response",data));
        axios.get(URL_PROFILE,{
            params: {
                "id": retrievedObject.user.pk,
                     "username":retrievedObject.user.username
            }
        },config)
        .then(response => {
            if(response.status===200){
                setProfileData(response?.data?.response)
            }
        console.log('profile info response :',response);
    }).catch(error=>{ console.log(error); }  ) 
   },
    
    [])
  
        
      
    
    
    const [display,setDisplay]=useState(false)
    const [TransH,setTrans]=useState(false)
    
//   useEffect(()=>{
//     axios.post(URL, profile_image ,config)
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
        uName:profileData.username,
        email:profileData.email,
        fName:profileData.first_name,
        lName:profileData.last_name,
        phone:profileData.phone_number
    }
   
   
    const changePhoto=(e)=>{
        let newImage= new FileReader();
        newImage.onload=()=>{
            if(newImage.readyState===2){
                // setProfileImg(newImage.result);
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
            <div>{profileData.username}</div>
            </div>
            
           
          
            <div className={"hover:bg-gray-100 py-3 pl-2 w-4/5 rounded cursor-pointer"}>
            <div title={'hello'}>
                First Name
            </div>
            <div>{profileData.first_name}</div>
            </div>
            
            <div className={"hover:bg-gray-100 py-3 pl-2 w-4/5 rounded cursor-pointer"}>
            <div>
                Last Name 
            </div> 
            <div>{profileData.last_name}</div>
            </div>
           
            <div className={"hover:bg-gray-100 py-3 pl-2 w-4/5 rounded flex-wrap cursor-pointer"}>
            <div>
                Email
            </div>
            <div>{profileData.email}</div>
            </div>
            <br/>
            <div className={"hover:bg-gray-100 py-3 w-4/5 pl-2 rounded cursor-pointer"}>
            <div>
                Phone
            </div>
            <div>{profileData.phone_number}</div>
            </div>
            </div>
            {/* buttons */}
            <button className={"py-2 w-4/5 bg-primeryClr hover:bg-gray-400 text-white rounded mt-2"}>Connections</button> <br/>
            <button className={"py-2 w-4/5  bg-primeryClr hover:bg-gray-400 text-white rounded mt-2" } onClick={callTrans} >Transcation History</button>
        </div>
        </div>
    )
}

