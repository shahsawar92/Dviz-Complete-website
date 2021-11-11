    import React, { useContext } from 'react'
    import './style.css'
    import DoughnutChart from './charts/Doughnut';
    import Prices from './price_cards/prices';
    import VerticalBar from './charts/virticalBar';
import { useContexts } from '../Context/context';
    function Profile() {
        const {profileData }= useContext(useContexts);
        console.log("profile data index",profileData);
        return (
        <>
        
        <h2 className=" text-2xl lg:mt-10 pt-14 lg:pt-0  pl-4  font-medium">Your Grooves</h2><br /> 
        <section className={"lg:pt-6 pt-12 flex lg:w-11/12  justify-evenly md:flex-row flex-col"}>
        <div className="lg:w-1/5  w-6/12 pb-12 self-center" ><DoughnutChart profileData={profileData}/></div>
        <div className="w-4/6 lg:w-6/12 self-center pr-4"><VerticalBar/></div>
        </section> <hr />       
        <h2 className=" text-2xl pl-4 font-medium">Your Plan </h2><br /> 
    <section className={"pb-5"}>
    <div  ><Prices/></div> 
    </section>
        
    </>
    
            
        )
    }

    export default Profile;
