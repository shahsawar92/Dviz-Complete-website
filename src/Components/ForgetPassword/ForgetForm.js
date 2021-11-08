import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import * as ROUTES from '../../Constants/Routes';
import { useFormik , } from 'formik';
import * as Yup from 'yup';
import {images} from '../../Utilities/Images'
import axios from 'axios';
 
 const ForgetForm = () => {
  const history=useHistory();
  const [isSubmitting, setSbumitting]=useState(false);
  const [errorMsg, seterrorMsg]=useState("");

  let config = {
    headers: {
       'Content-Type': 'application/json'
    }
  }
  const URL='https://shahbaz.dviz.tech/rest-auth/password/reset/';
   const formik = useFormik({
     initialValues: {
       email: '',
     },
     validationSchema: Yup.object({
      email: Yup
      .string()
      .email('Invalid email address')
      .required('Required')
     }),
     onSubmit: values => {
       setSbumitting(true);
       console.log("values are:",values);
          // setloginInfo(values);     
        axios.post(URL, values,config)
            .then(response => {
              setSbumitting(false);
              console.log(response);
              alert("Email sent successfully!");
              history.push("/");

            }).catch(function (error) {
              setSbumitting(false);
              if (error.response) {
               
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("errr:",error.response.data.detail);
                seterrorMsg(error.response.data.detail);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            });
     },
   });
   
   return (
    <div className=' md:w-1/2'>  
    {/* form card  */}
    <div className='bg-white  '>
        <h1 className='text-2xl w-full font-medium text-primary mt-4 mb-12 text-center'>
            <img className={"m-auto"} src={images.logo} alt="DVIZ LOGO" ></img>
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <h5>Password Reset</h5>
          <div className="text-base">Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.</div>
       <div className={"text-red-500"}>{errorMsg}</div>
       <label htmlFor="firstName">Email</label>
       <input
         className="px-8 w-full bg-gray-300  rounded py-4  focus:outline-none items-center"
         id="email"
         type="text"
         placeholder={"email"}
         {...formik.getFieldProps('email')}
       />
       {formik.touched.email && formik.errors.email ? (
         <div className={"text-red-600"}>{formik.errors.email}</div>
       ) : null}
       <button  disabled={!formik.validateForm} className={"bg-primeryClr hover:bg-purple-700 focus:outline-none  text-center text-white rounded w-full py-4 mt-6  "+(!formik.validateForm ? 'disabled cursor-not-allowed disable bg-gray-600' : '' ) } type="submit" >
       {isSubmitting?"Please wait..":"Reset My Password"}</button >

     </form>
    
        <div className={"mt-6"}>
          <Link to="/" >Signin</Link>
        </div>
        <br></br>
        <div>
          <Link to={ROUTES.SIGN_UP}>Create an account</Link>
        </div>
     </div>
 </div>
   );
 };
export default  ForgetForm;