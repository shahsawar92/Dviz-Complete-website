import React, { useState } from 'react'
import './style.css'
import { countries } from './data/countries';
import { icons } from '../../Utilities/flow_icons';
import { images } from '../../Utilities/Images';
import { useFormik } from 'formik';
import axios from 'axios';
export default function EditFrom(props) {
    const handleBack=()=>{
        props.setD(false);
    }   
const [countryFlag, setcountryFlag] = useState(icons.phoneIcon);
const [dailCode, setdailCode]=useState("");

var newFetch = JSON.parse(localStorage.getItem('user'));
var pk=newFetch.pk;
const handleClick=(e)=>{
const select= document.getElementById("country");
setcountryFlag(`https://flagpedia.net/data/flags/h80/${select?.selectedOptions[0].dataset.countrycode.toString().toLowerCase()}.png`)
setdailCode(e.target.value)
}
const handleSave= (e)=>{
    props.userInfo.setPhone(dailCode +" " +e.target.value)
    console.log("code:",dailCode);
     
}

 let config = {
        headers: {
           'Content-Type': 'application/json'
        }
      }
      const URL='https://shahbaz.dviz.tech/update_info/';
      console.log("props useranem:",props?.userInfo?.uName);
const formik = useFormik({
    initialValues: {
      username: props?.userInfo?.uName,
      first_name:props?.userInfo?.fName,
      last_name:props?.userInfo?.lName,
      email:props?.userInfo?.email,
      phone:props?.userInfo?.phone
    },

    onSubmit:(values) => {
        const {first_name: first_name, last_name:last_name,phone=phone,email=email} = values;
        const sendValues={
            user:pk, first_name,last_name,email,phone
        }

        console.log("myvalues",sendValues);
        axios.post(URL, sendValues ,config)
        .then(response => {
           
            localStorage.setItem("profileUpdate",JSON.stringify(response.data))
            console.log('data response :',response.data);
        
        }).catch(error=>{ console.log(error); }  )    } 
    })

     
    return (
        <div className={` bg-black md-effect-1  fixed w-screen z-9999 pin overflow-auto bg-smoke-dark inset-0  ${props.display? "flex":"hidden"} justify-center items-center`} >
            <div className={"  min-w-lg  md:relative pin-b pin-x align-top m-auto mx-18 justify-end md:justify-center p-8  md:rounded md:h-auto md:shadow flex flex-col bg-white left-4 right-4 rounded shadow-lg"}>
                {/* header */}
                <div className={"flex flex-start z-100 justify-between items-center font-bold text-lg border-b-2 h-12  text-black"}>
                    <div>Edit Your information</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" onClick={handleBack} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
                {/* discription  */}
                <div className={" flex-row flex-row-wrap w-full contents "}>
                      <form className={"flex flex-col relative  "} id="myform" onSubmit={formik.handleSubmit}>
                          
                          <input
                            className="shadow md:w-96 appearance-none border border-gray-200 rounded  costumInptForm  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline "
                            id="user"
                            type="text"
                            readOnly
                            {...formik.getFieldProps('username')}
                        />
                          <label>First Name</label>
                          <input 
                          className={"shadow md:w-96 appearance-none border border-gray-200 rounded  costumInptForm  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"} 
                          type="text" 
                          name="first_name" 
                          {...formik.getFieldProps('first_name')}
                        //   onChange={(e)=>{props.userInfo.setFName(e.target.value)}} 
                          />
                          <label>Last Name</label>
                          <input
                           className={"shadow md:w-96 appearance-none border border-gray-200 rounded  costumInptForm  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"}
                            type="text"
                            name="last_name"
                             
                            {...formik.getFieldProps('last_name')}
                            />
                          <label>Email</label>
                          <input
                           className={"shadow md:w-96 appearance-none border border-gray-200 rounded  costumInptForm  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"}
                           type="text" 
                           name="email" 
                           defaultValue={props.userInfo?.email} 
                            
                           {...formik.getFieldProps('email')}
                           />
                          <label>Phone</label>
                          <div className="flex">
                          
                          {/* <select id={"country"} onChange={handleClick}     className={"w-16 h-10 border  border-gray-200 rounded  costumInptForm  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  "}>
                            {countries.map(country=>
                                <option data-countrycode={country.code} value={country.dial_code} key={country.flag}>{country.name}</option>
                            )}
                          </select> */}
                          {/* <img src={countryFlag} alt="country flag" className="w-10 h-10 absolute" /> */}
                          {/* <input type="text" readOnly value={dailCode} className="w-16 h-10 appearance-none border border-gray-200 rounded  costumInptForm  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" /> */}
                          <input
                           className={"shadow md:w-96 appearance-none border border-gray-200 rounded  costumInptForm  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"}  
                           type="text" 
                           name="phone"  
                           {...formik.getFieldProps('phone')}
                           ></input>
                          </div>

                      </form>
                       

                </div>
                {/* footer */}
                <div className={"flex flex-row justify-end py-4 border-t-2   "}>
                    <button  onClick={handleBack} className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}>
                        Back
                    </button>
                    <input    onClick={handleBack}  className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}
                    form="myform" type="submit" value="save"
                    >
                        
                    </input>
                    
                </div>
            </div>
        </div>
    )
}