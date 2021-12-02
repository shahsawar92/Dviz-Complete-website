import React from 'react'
import './style.css';
// import {icons} from '../../Utilities/flow_icons'
function Card({single}) {
    
  
    
    return (<>
            
         
             <div className="main mb-6 z-0" >
           <div  className=" inner_main_container ">
           <div className="flex justify-end mx-6">
                  
                  { single.badge &&  single?.badge.map(badge=>(

                           <div className={"badge mx-7"} key={badge}>
                           <span className={`${badge==="Growth"?" badgeClrG":(badge==="Content"?"content":"badgeClrO") } text-xs`} key={badge}>{badge}</span>
                           </div>
                       )    )}
                       { !single.badge &&  single?.badge.map(badge=>(

                           <div className={"badge mx-7"} key={badge}>
                           <span className={`${badge==="Growth"?" badgeClrG":(badge==="Content"?"content":"badgeClrO") } text-xs`} key={badge}>loading...</span>
                           </div>
                       )    )}
                       
               </div>
         
               {/* body image */}
               <div className="flex  h-3/5 justify-center ">
              
                   {/* <img className="img skeleton" src={icons.linkedin} alt=""> 
                   </img>*/}
                    
                 { single.image? <img src={single?.image} alt={single?.flowName} />: <div>loading...</div>}
                
               </div>
               <div >
                   <div className={"mt-2 h-1/5 flex justify-center"}>
                       {/* <h1 className=" skeleton  h-full"></h1> */}
                      {single.flowName && <h1>{single?.flowName}</h1>}
                      {!single.flowName && <h1>loading....</h1>}
                   </div>
               </div>
            </div>
            </div>  
           
</>
    )
}

export default Card
