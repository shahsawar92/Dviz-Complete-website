
import ModelForCookies from './Model_Boxes/modelForCookies';
import React, { useState } from 'react';
import { useFormik , } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';



import './style.css';
export default function SecondryMenuCars() {
    
    
    const [showModel, setshowModel]=useState(false);
    const updateCookies=()=>{
        setshowModel(true);
    }
    const selectradius=(e)=>{
       if(e.target.value!=="search"){
           
       }
    }

    
  
  // let config = {
  //   headers: {
  //      'Content-Type': 'application/json'
  //   }
  // }
  // const URL='#';

   const formik = useFormik({
     initialValues: {
        country: '',
        platform: [],
        zipcode:"",
        radius:"",
        private_seller:"",
     },
     validationSchema: Yup.object({
        country: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Username Required'),
         platform: Yup.object   ({
            platform: Yup.array().required('At least one checkbox is required'),
          }),
          zipcode:Yup.string()
          .required("zip code req"),
         password: Yup.string()
         .required('Password Required')
         .min(8, 'Password is too short - should be 8 chars minimum.')
         .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
         
     }),
     onSubmit:(values) => {
         alert(values)
       console.log("values for form:",values);
     }}
    
   );
   
   
const tags = ["Autotrader", "Cargurus", "eBay","Facebook Marketplace","Craigslist",];
   
  
    return (
        <>
        {showModel && <ModelForCookies showModel={showModel} setshowModel={setshowModel}/>}
        <div className="w-5/6 overflow-y-auto">
        <form onSubmit={formik.handleSubmit}>
           <h1 className="text-primeryClr text-3xl font-bold"> Cars</h1>
          <h3 className="text-primeryClr fontsemibold mt-3 text-base">Cars
Start a new search or look through previous searches</h3>
    
    <select name="previous_search"  className={"text-center  rounded py-1 mb-3 form-select block w-full p-3 border border-gray-300  text-gray-600  bg-transparent  z-0"} >
                <option value="USA" >USA</option>
            </select>
            
       
        {tags.map((platform) => (
        <div key={platform}>
          <input
            id={platform}
            type="checkbox"
            name={platform}
            {...formik.getFieldProps('platform')}
          />
           
          <label htmlFor={platform}>{platform}</label>
        </div>
      ))}
        
        
            {/* update cookies btn */}
            <div className="float-right text-sm mt-2" onClick={()=>updateCookies()}>update cookies</div>
            {/* zip code input */}
            {/* <input type="text" className="border-2 py-1 w-full rounded mt-2" id="vehicle1" name="vehicle1" placeholder="  Please enter valid zip code" /> */}
            <input onChange={console.log("")} name="zip" id="Zip__code" type="text" maxLength="5" pattern="\d{5}|\d{5}"
										title="must be 5 digit ZIP Code '10010'"className="border-2 py-1 w-full rounded mt-2"
										 placeholder="Please Enter Valid ZIP Code.."
                                         {...formik.getFieldProps('zipcode')}
                                         />
            {/* search with in */}
            
            <select name="previous_search" onChange={(e)=>selectradius(e)} className={"text-center mt-5 rounded py-1 mb-3 form-select block w-full p-3 border border-gray-300  text-gray-600  bg-transparent  z-0"} >
                <option value="search">Search with in</option>
                <option value="10" >10 mile</option>
                <option value="20">20 mile</option>
                <option value="50">50 mile</option>
                <option value="100">100 mile</option>
               
            </select>
            
            {formik.touched.radius && formik.errors.radius ? (
         <div className={"text-red-600"}>{formik.errors.radius}</div>
       ) : null}
            {/* private saller */}
            
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>
             {/* search */}
             <button type="submit"  className="py-1 my-2 rounded w-full bg-primeryClr text-white"> Search</button>
            </form>
           
            {/* Set Schedule */}
            <button className="py-1 my-2 rounded w-full bg-primeryClr text-white">Set Scehdule</button>

            {/* check created schedule */}
            <button  className="py-1 my-2 rounded w-full bg-primeryClr text-white">Check Created Schedules</button>
</div>
</>
    )
}






          




