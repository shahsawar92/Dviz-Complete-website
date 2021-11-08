import React, { useContext } from 'react'
import { useContexts } from '../Context/context';
import {Redirect, useHistory} from 'react-router-dom'
import Card from '../Card/card';
import './style.css';
function Dashboard() {
    const {Dashboard_card}=useContext(useContexts);
    const history=useHistory();
    console.log(Dashboard_card);
    const handleClick=(e)=>{      
        if(e[0].toLowerCase()==="email validation" && e[1].toLowerCase()==="email_growth"){
            history.push("/emailvalidation")}
        else if(e[0].toLowerCase()==="phonevalidation" && e[1].toLowerCase()==="phone_growth"){
            history.push("/phonevalidation")
        } 
    }

   
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

