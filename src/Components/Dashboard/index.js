import React, { useContext, useEffect, useState } from 'react'
import { useContexts } from '../Context/context';
import DataStore from '../Context/dataStore';
import {useHistory} from 'react-router-dom'
import Card from '../Card/card';
import './style.css';
import axios from 'axios';

function Dashboard() {
    const {initial}=DataStore();
  
    const [Dashboard_card, setDashboard_card]=useState([]);

     const {toggleButton }=useContext(useContexts);

     
    const Card_Check_URL="https://shahbaz.dviz.tech/store/";
    
    const history=useHistory();
    
    var cardDataCheck = JSON.parse(localStorage.getItem('cardCheck'));
    console.log('cardDataCheck: ', cardDataCheck);
    var retrievedObject = JSON.parse(localStorage.getItem('userdata'));
    console.log('retrievedObject: ', retrievedObject);
    const handleClick=(e)=>{      
        if(e[0].toLowerCase()==="email validation" && e[1].toLowerCase()==="email_growth"){
            history.push("/emailvalidation")}
        else if(e[0].toLowerCase()==="phonevalidation" && e[1].toLowerCase()==="phone_growth"){
            history.push("/phonevalidation")
        } 
    }
    console.log("loging toggle btn:",toggleButton);

    

useEffect(()=>{
const paramseffect={
        params: {
            "id":retrievedObject.user.pk,
            "username":retrievedObject.user.username
    }
        }
        let config = {
            headers: {
               'Content-Type': 'application/json'
            }
          }
    axios.get(Card_Check_URL,paramseffect,config).then((res)=>{
            
            localStorage.setItem("cardCheck",JSON.stringify(res.data))
          })
},[toggleButton,retrievedObject.user.pk,retrievedObject.user.username])

useEffect(() => {
    setTimeout(()=>{

    
     const filteredCard=(initial.carData.filter(card => (card.checkDashboard===true)))
     
      setDashboard_card(Array.from(new Set([...Dashboard_card,...filteredCard])))
 
}, 2000)
     
 }, [toggleButton,initial.carData,Dashboard_card])

    // Object.entries(cardDataCheck).map(([key, value]) => { // maping all the keys to check weather a card is active or not
    //     console.log(key,value);
    //     if(value===true){
    //         setDashboard_card(key) //sending key of the returning object   setdashbaed in context
    //     }

    // })
   
    return (
      <div className={"flex flex-rows  flex-column-fluid pt-10 w-full  h-full "}>
      <div  className={" flex flex-row flex-wrap  justify-center flex-start align-baseline"}>
           {Dashboard_card?.map( single=> 
           (
               <li style ={{listStyle:'none'}} key={`${single.flowName} `+ Math.floor((Math.random()*100 )+1)}>
                   { 
                   <div onClick={()=>handleClick([single.flowName,single.flowRef])}>
                   
                   <Card  key={`${single.flowName} `+ Math.floor((Math.random()*100 )+1)} single={single}/>
                   
                   </div>
                   
                   } 
                  
                   </li>
           
           ))
           
           }
</div>
        </div>
    )
}

export default Dashboard;

