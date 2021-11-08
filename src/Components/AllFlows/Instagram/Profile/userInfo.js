import React from 'react';
import {icons} from '.././../../../Utilities/flow_icons/index'
import AnnuallyPostEngagment from './annuallyPostEngagment'
import MonthlyPostEngagment from './monthlyPostEngagment'
import Posts from './posts'
import Followers from './userInfo/followers'
import Following from './userInfo/following'
import WeeklyPostEngagment from './weeklyPostEngagment'

export default function UserInfo() {
   
  
      

    return (
        <div className="py-5">
            <div className="container">
  
            <div><img src={icons.user} alt="userprofile" /></div>
               
            <h1 className="text-primeryClr text-3xl font-bold py-1"><a href={"https://www.instagram.com/name"}>Name</a></h1>
            <h1 className="text-primeryClr text-xl font-bold py-1"><a href={"https://www.instagram.com/name"}>@handle</a></h1>
          
        <h3><b>Category</b> : 'Beauty' | 'Dance & Performance' | 'Fitness' | 'Food & Drink' | 'Home & Garden' | 'Music' | 'Visual Arts' |</h3>
        <h3 className="text-blue-500 italic text-xl font-semibold">#DareToFeel the next generation of performance: Rimac Nevera</h3>

            </div>
            <div className="flex justify-around ">
                <Followers />
                <Following />
                <Posts /> 
            </div>
            <div className="flex justify-around">
                <WeeklyPostEngagment /> 
                <MonthlyPostEngagment />
                <AnnuallyPostEngagment />
           </div>
        </div>
    )
}
