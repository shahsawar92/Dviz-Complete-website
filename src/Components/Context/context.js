import React, {createContext,useState,useEffect } from "react";
import {images } from '../../Utilities/Images'
import DataStore from "./dataStore";
import {notificationData } from './notificationsData';
 
   
const {initial}=DataStore();
//global context
export const useContexts=createContext(initial); 

//create global context provider wrapper
export const Globalprovider=({children})=>{

    //fetch data for active in active card

    // var cardDataCheck = JSON.parse(localStorage.getItem('cardCheck'));
    // console.log('cardDataCheck: ', cardDataCheck);
 
// we will store login information
    const [loginInfo,setloginInfo]=useState(localStorage.getItem('user'));
//state for DATA on STORE-secondry menu
    const [state, setstate] = useState(initial)
//recive popup name through which we will make decisions.
    const [popUpName, setpopUpName]= useState("");
//state for popup inside store.
    const [popUpData, setpopUpData]= useState();
//state for toggle pages {small screen}
    const [toggle, setToggle] = useState(true);
//state for profile image
    const [profileImg,setProfileImg]= useState(images.unKnownImage);
    //profile info object overAll
    const [profileData,setProfileData]=useState({});
   //data of dashboard will be sotred here
    const [Dashboard_data, setDashboard_data]=useState();
    const [Dashboard_card, setDashboard_card]=useState([]);
// NO OF NOTIFICATIONS
    const [noOfNotifications,SetnoOfNotifications]=useState();
    const[updateProfileDAta,setupdateProfileData]=useState(false);

    const [updateInfo,setupdateInfo]=useState(false)
    //univesial toggle for no of groves on activate button.
    const [updateInfoprofile,setupdateInfoprofile]=useState(false)
// toggle for deduction of grooves.
    const [toggleButton,settoggleButton]=useState(false);
    //state for response of store activated cards
   


// all actions:
// all methods for data defined here:

// count  no of notifications
useEffect(() => {
SetnoOfNotifications(notificationData.length)    
}, [])

//set cards to dashboard and insure no duplicate entry there.
// useEffect(() => {
//     const filteredCard=(initial.carData.filter(card => (card.checkDashboard===true)))
    
//      setDashboard_card(Array.from(new Set([...Dashboard_card,...filteredCard])))

// }, [toggleButton])

// set popup data when clicked on a card inside the store
 useEffect(() => {
    setpopUpData({popUpData:initial?.PopUpDataList.filter(data=>(popUpName[0]===data.flowName && popUpName[1]===data.flowRef))})
    
}, [popUpName])

//store secondery menu buttons:
// button for all categories.
function allCat(e){
   setstate(initial);
    }
//search function inside store page.
    function search(e){
        
     setstate({carData:initial.carData.filter(car => 
         car.flowName.toLowerCase().includes(e.toLowerCase())
    
        )});
       
    }
 //content button inside store page
    function content(e){
    setstate({carData:initial.carData.filter(car => car.badge.includes("Content"))});
    }
//growth button inside store page
    function growth(e){
        setstate( {carData:initial.carData.filter(car => car.badge.includes("Growth"))})
    }

//outreach button inside store page.
    function outreach(e){
        setstate( {carData:initial.carData.filter(car => car.badge.includes("Outreach"))});
    }

    
//return the wrapper 
    return (
        <useContexts.Provider value={{
            carData:state.carData, PopUpDataList:initial.PopUpDataList,Dashboard_data, outreach,growth,content,allCat,search,toggle,toggleButton,settoggleButton, setToggle, profileImg,setProfileImg,setpopUpName,popUpData,setpopUpData,setDashboard_data,Dashboard_card,noOfNotifications,SetnoOfNotifications,loginInfo,setloginInfo,profileData,setProfileData,updateInfo,setupdateInfo,updateInfoprofile,setupdateInfoprofile,updateProfileDAta,setupdateProfileData,setDashboard_card
        }}>
            {children}
        </useContexts.Provider>
    )
}