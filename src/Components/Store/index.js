import React, { useState,useContext, useMemo } from 'react'   
import '../Dashboard/style.css';
import Card from '../Card/card.js';
// import Card2 from '../Card/card2';
import Model from '../modal/modal';
import {useContexts} from '../Context/context'

function Store() {
    const {carData,setpopUpName} = useContext(useContexts);
    const [visiable , setVisiable]=useState(false);
    let props ={
        visiable: visiable,
        setVisiable: setVisiable,
    }
    const handleClick= (props)=>{
        console.log("loging props:",props);
        setpopUpName(props);
        setVisiable(true);
    }
   const cardData=useMemo(() => carData, carData) 


    return (
        <div className={"   pt-5  pb-5 w-full  h-full "}>
       <div  className={"flex flex-wrap w-full justify-center "}>
            { cardData.map( single=>(
                
                <li style ={{listStyle:'none'}} key={`${single.flowName} `+ Math.floor((Math.random()*1000 )+1)}>
                    { 
                    <div  onClick={()=>handleClick([single.flowName,single.flowRef])}>
                    
                    <Card  key={`${single.flowName} `+ Math.floor((Math.random()*100 )+1)} single={single}/>
                    
                    </div>
                    
                    } </li>
            
                            ))
            
            }

            
     
 
      {/* model box popup */}
      <div><Model {...props} /></div> 
            </div>
            </div>
    )
}

export default Store;
