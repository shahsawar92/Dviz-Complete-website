import { icons } from "../../Utilities/flow_icons"
import React, {  useEffect, useState } from 'react'
import axios from "axios";


    const DataStore = () => {
        const [activeCard,setactiveCard]=useState({});

    var retrievedObject = JSON.parse(localStorage.getItem('userdata'));
    console.log('retrievedObject: ', retrievedObject);
   
    let config = {
        headers: {
           'Content-Type': 'application/json'
        }
      }
    const URL="https://shahbaz.dviz.tech/store/";
    //get dashboard data
   useEffect(()=>{
       
    axios.get(URL,{
        params: {
            "id": retrievedObject?.user?.pk,
            "username":retrievedObject?.user?.username
    }
        },config).then((res)=>{
            console.log("response of store",res);})
   },[1])
 const initial={
    carData:[
           {flowName: "Cars",
           badge:["Content" , "Outreach" ],
           flowRef:"Car_Content",
           image:icons.car,
            },
            {flowName: "Channels",
           badge:["Content" ],
           flowRef:"Channel_Content",
           image:icons.youtube,
            },
            {flowName: "List",
            badge:["Content" ],
            flowRef:"List_Content",
            image:icons.crawords,
            },
            {flowName: "Costum CRM",
            badge:["Content", "Growth" ],
            flowRef:"Costum_Content",
            image:icons.custom_cms,
            },
            {flowName: "Detector",
            badge:["Content" ],
            flowRef:"Detector_Content",
            image:icons.detector,
            },
            {flowName: "Email Validation",
            badge:["Growth" ],
            flowRef:"Email_Growth",
            image:icons.mail,
            },
            {flowName: "Facebook",
            badge:["Content"],
            flowRef:"Facebook_Content",
            image:icons.facebook,
            },        
           {flowName: "Facebook",
           badge:["Outreach"],
           flowRef:"Facebook_Outreach",
           image:icons.facebook,
           },
           {flowName: "News Feed",
           badge:["Content"],
           flowRef:"NewsFeed_Content",
           image:icons.newsfeed,
           },   
           {flowName: "Instagram",
           badge:["Growth" ],
           flowRef:"Instagram_Growth",
           image:icons.instagram,
           },
           {flowName: "Jobs",
           badge:["Content" , "Growth" ],
           flowRef:"Jobs_Content",
           image:icons.jobs,
           },
           {flowName: "Linkedin",
           badge:["Outreach" ],
           flowRef:"Linkedin_Outreach",
           image:icons.linkedin,
           },
           {flowName: "Linkedin",
           badge:["Conetent" ],
           flowRef:"Linkedin_Content",
           image:icons.linkedin,
           },
           {flowName: "PhoneValidation",
           badge:["Growth" ],
           flowRef:"Phone_Growth",
           image:icons.phone,
           },
           {flowName: "Places",
           badge:["Content" ],
           flowRef:"Places_Content",
           image:icons.places,
           },
           {flowName: "Real Estate",
           badge:["Content","Growth" ],
           flowRef:"RealEstate_Content",
           image:icons.realestate,
           },
           {flowName: "Search",
           badge:["Content" ],
           flowRef:"Search_Content",
           image:icons.search,
           },
           {flowName: "Telegram",
           badge:["Content" ],
           flowRef:"Telegram_Content",
           image:icons.telegram,
           },
           {flowName: "Youtube",
           badge:["Content" ],
           flowRef:"Youtube_Content",
           image:icons.youtube,
           },
          
   ],
   PopUpDataList:[
       {
              flowName: "Youtube",
              flowRef:"Youtube_Content",
              youtube_check:"",
              youtube_dashboard:""

          },
          {
           flowName: "Facebook",
           flowRef:"Facebook_Content",
       },
       {
           flowName: "Linkedin",
           flowRef:"Linkedin_Content",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["Upload a List - LinkedIn URLs"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:["Extract messages per url"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["DViZ Dashboard"],
       },
       {
           flowName: "Channels",
           flowRef:"Channel_Content",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:[],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:[],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["DViZ Dashboard","Download Database","Hubspot (Upcoming)","Zoho (Upcoming)"],
       },
       {
           flowName: "List",
           flowRef:"List_Content",
       },
       {
           flowName: "Cars",
           flowRef:"Car_Content",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["Autotrader","Cargurus","eBay","Facebook Marketplace"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:["Zip Code Filter","Radius Filter","Year Filter","OCR Color","VIN Screening","Send Message"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["DViZ Dashboard","Hubspot (Upcoming)","Zoho (Upcoming)"],
       },
       
       {
           flowName: "Costum CRM",
           flowRef:"Costum_Content",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["TeacherOn Lebanon","TeacherOn UAE","MyPrivateTutor Dubai","MyPrivateTutor Sharjah","MyPrivateTutor Abu-Dhabi","Dubizzle","Kargal","Locanto","OLX-Lebanon"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:[" Linkedin Search","Facebook Search","Email Search","Email Validation"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:[" Weekly","Quarterly"]},
       {
           flowName: "Detector",
           flowRef:"Detector_Content",
       },
       {
           flowName: "Email Validation",
           flowRef:"Email_Growth",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["Upload a List - Emails","Enter Emails"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:["Validated Emails"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["DViZ Dashboard"]
       },
       {
           flowName: "Facebook",
           flowRef:"Facebook_Outreach",
       },
       {
           flowName: "News Feed",
           flowRef:"NewsFeed_Content",
           NoOFGroovs: 1,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["Enter Keywords"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:["RSS Feeds Obtained"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["Results listed"],
       },
       {
           flowName: "Instagram",
           flowRef:"Instagram_Content",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["Connect Instagram"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:["Input Instagram Handle"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["DViZ Dashboard","Download Database","Hubspot (Upcoming)","Zoho (Upcoming)"],
       },
       {
           flowName: "Jobs",
           flowRef:"Jobs_Content",
       },
       {
           flowName: "Linkedin",
           flowRef:"Linkedin_Outreach",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["Upload a List - LinkedIn URLs","Compose a message"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:["Generate First Name"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["DViZ Dashboard"],
       },
       {
           flowName: "PhoneValidation",
           flowRef:"Phone_Growth",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["Upload a List - Phone Numbers","Enter Phone"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:["Validated Phone Numbers"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["DViZ Dashboard"],
       },
       {
           flowName: "Places",
           flowRef:"Places_Content",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["Provide Places Details"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:["Extract messages per url"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["DViZ Dashboard","Send via Email","Download as CSV","Integrate into CRM"],
       },
       {
           flowName: "RealEstate",
           flowRef:"RealEstate_Content",
       },
       {
           flowName: "Search",
           flowRef:"Search_Content",
       },
       {
           flowName: "Telegram",
           flowRef:"Telegram_Content",
           NoOFGroovs: 3,
           ProductModuleTitle:"Product Module Title",
           ProductModuleTitleArray:["Connect Telegram"],
           TVModuleTitle:"T&V Module Title",
           TVModuleTitleArray:["Enter Channel Links","Number of Messages to Extract","Keywords Filter to Messages"],
           IntegrationModuleTitle:"Integration Module Titile",
           IntegrationModuleTitleArray:["DViZ Dashboard","Download Database","Hubspot (Upcoming)","Zoho (Upcoming)"],
       },
       
      ]
} 

return (
    
     {initial}   

    )
}

export default DataStore;