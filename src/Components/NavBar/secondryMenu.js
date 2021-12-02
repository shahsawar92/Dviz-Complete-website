import React ,{useContext} from 'react'
import ProfileSecondry from '../Profile/profileSecondry'
import './style.css';
import { useContexts } from '../Context/context';
import { Link } from 'react-router-dom';
import SecondryMenuEmailValidation from '../AllFlows/EmailValidationFlow/secondryMenu';
import SecondryMenuPhoneValidation from '../AllFlows/PhoneValidationFlow/secondryMenu';
import SecondryMenuInstagram from '../AllFlows/Instagram/secondryMenu';
import SecondryMenuCars from '../AllFlows/CarsFlow/secondryMenu';


export default function SecondryMenu(props) {

  //using the created context wrapper
  const {allCat,growth,outreach,content,search} = useContext(useContexts);
 
    return ( <>
        
              { props.stateName==="/profile"  &&
            <div className="pt-14 pl-4 lg:w-4/5 bg-white">
                
                   <ProfileSecondry />
            </div> }

          { (props.stateName==="/dashboard" || props.stateName==="/NavBar" ) &&
            <div className="pt-14 pl-4 lg:w-full bg-white">
                 <h1 className="topnameSecondryEdit pl-4 ">Dashboard</h1>
                    <p className=" mx-1">view store</p>
               <button className=" costumBtn   hover:bg-gray-500 bg-primeryClr"> <Link to={"/store"}>Add a flow</Link></button>
            </div> }
            {/* for store */}
             { props.stateName==="/store"  &&
                 <div className="pt-14 pl-4 lg:w-full bg-white">
                 <h1 className="topnameSecondry  ">Store</h1>
                    <p className="  ">Filter through categories</p>
                    <button onClick={allCat} className=" costumBtn hover:bg-gray-500 bg-primeryClr">All Categories</button><br />
                    <button onClick={content} className="  costumBtn  hover:bg-red-300  bg-secondryClr">Content</button><br />
                    <button onClick={outreach} className="  costumBtn  hover:bg-gray-200 bg-thirdClr">Out Reach</button><br />
                    <button onClick={growth} className="  costumBtn hover:bg-red-200 bg-fourthClr">Growth</button><br />
                    <div>
                    <p className=" ">Search through templates</p>
                    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </span>
      <input type="search" name="q" className="py-2 text-sm border text-gray-800 border-gray-500 w-11/12 rounded-md pl-10 focus:outline-none focus:bg-white " onKeyUp={e=>search(e.target.value)} placeholder="Search..." autoComplete="off"/>
    </div> 
                    
                 </div>
                    {/* <p className=" pt-6 text-sm mx-2">Integrate with</p> */}
            </div> }          
            {/* for assets */}
            { props.stateName==="/assets"  &&
                <div className="pt-14 pl-4 lg:w-full bg-white">
                 <h1 className="topnameSecondry  ">Assets</h1>
                    <p className=" mx-2 textbox ">Your Extractions</p>
                    <button className="  costumBtn   hover:bg-gray-500 bg-primeryClr">Audio and Video Transcripts</button><br />
                    <button className=" costumBtn   hover:bg-gray-500 bg-primeryClr">Image Converts</button><br />
                    <button className=" costumBtn   hover:bg-gray-500 bg-primeryClr">Document Extract</button><br />
                    <button className=" costumBtn   hover:bg-gray-500 bg-primeryClr">Web Extracts</button><br />
                    <br /><br />

                    <p className="w-24 mx-2">Your uploads</p>
                    <button className=" costumBtn   hover:bg-gray-500 bg-primeryClr">Audio and Video</button><br />
                    <button className=" costumBtn   hover:bg-gray-500 bg-primeryClr">Images</button><br />
                    <button className=" costumBtn   hover:bg-gray-500 bg-primeryClr">Documents</button><br />
                    <button className=" costumBtn   hover:bg-gray-500 bg-primeryClr">Lists</button><br />
                 </div> }
            {/* for notifications */}
            { props.stateName==="/notifications"  &&
            <div className="pt-14 pl-4 lg:w-full bg-white">
                 <h1 className="topnameSecondryEdit pl-4  ">Notifications</h1>
                    <p className=" mx-2">Notifications</p>
                 <button className=" costumBtn   hover:bg-red-300 bg-red-500">Clear all completed</button>
            </div> }
           {/* {/* for logout */}

           {/* down below everything for Flows- the real work */}
           {/* email validtaion */}
           {props.stateName==='/emailvalidation' && <div className="pt-14 pl-4 lg:w-full bg-white">
               <SecondryMenuEmailValidation />  
               </div>
           
           }

            {/*phone validation*/}
            {props.stateName==='/phonevalidation' && <div className="pt-14 pl-4 lg:w-full bg-white">
               <SecondryMenuPhoneValidation />  
               </div>}

            {/*phone validation*/}
            {props.stateName==='/instagram' && <div className="pt-14 pl-4 lg:w-full bg-white">
               <SecondryMenuInstagram />  
               </div> }

           {/*phone validation*/}
           {props.stateName==='/cars' && <div className="pt-14 pl-4 lg:w-full bg-white">
               <SecondryMenuCars />  
               </div>}
        
     
   </> )
}

        