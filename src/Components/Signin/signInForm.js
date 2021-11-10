import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useHistory} from 'react-router-dom';
import * as ROUTES from '../../Constants/Routes';
import { useFormik , } from 'formik';
import * as Yup from 'yup';
import {images} from '../../Utilities/Images'
import { useContext } from 'react';
import { useContexts } from '../Context/context';
import axios from 'axios';
import {icons} from '../../Utilities/flow_icons'


 
 const SignInForm = () => {
   //sent to store
   const [isSubmitting, setSbumitting]=useState(false);
   const [errorMsg,setErrorMsg]=useState()
  const {setloginInfo}= useContext(useContexts);
  let config = {
    headers: {
       'Content-Type': 'application/json'
    }
  }
  const URL='https://shahbaz.dviz.tech/rest-auth/login/';
const history=useHistory();
   const formik = useFormik({
     initialValues: {
       username: '',
       password: '',
       email:"abc@gmail.com",
     },
     validationSchema: Yup.object({
       username: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Username Required'),
         password: Yup.string()
         .required('Password Required') 
         .min(8, 'Password is too short - should be 8 chars minimum.')
         .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
     }),
     onSubmit:(values) => {
       console.log("values are:",values);
       setSbumitting(true);  
        axios.post(URL, values,config)
            .then(response => {
              console.log(response);
              if(response.status===200){
                setSbumitting(false);
                localStorage.setItem("user",JSON.stringify(response.data.user))
                Cookies.set('access',response.data.access_token)
                Cookies.set('refresh',response.data.refresh_token)                
                history.push(`${ROUTES.DASHBOARD}`);
              }
              else {
                setSbumitting(false);
                console.log(response.statusText);
                alert(response.statusText)
              }
            })  .catch(function (error){
              setSbumitting(false);
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("errordata",error?.response?.data?.non_field_errors);
                setErrorMsg(error?.response?.data?.non_field_errors[0]);
                console.log("errr status:",error.response.status);
                console.log("error header:",error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log("request error",error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log("config:",error.config);
            });
     },
   });

   const [passwordShown, setPasswordShown] = useState(true);
   const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
 

   return (
    <div className='md:w-1/2'>  
    {/* form card  */}
    <div className='bg-white py-10'>
    {/* logo heading */}
        <h1 className='text-2xl  font-medium text-primary mt-4 mb-12 text-center'>
            <img className={"m-auto"} src={images.logo} alt="DVIZ LOGO" ></img>
        </h1>
        <div className="text-lg font-semibold text-red-600">{errorMsg}</div>
     <form className="flex flex-col" onSubmit={formik.handleSubmit}>

       <label htmlFor="firstName">User Name</label>
       <input
         className="px-8  bg-gray-300  rounded py-4  focus:outline-none items-center"
         id="username"
         type="text"
         placeholder={"Username"}
         {...formik.getFieldProps('username')}
       />
       {formik.touched.username && formik.errors.username ? (
         <div className={"text-red-600"}>{formik.errors.username}</div>
       ) : null}
 
  
 
       <label htmlFor="email">Password</label>
       <input 
         className="px-8  bg-gray-300  rounded py-4  focus:outline-none items-center"
       id="password" 
       type={passwordShown?"password":"text"} 

       placeholder={"Password"}
       {...formik.getFieldProps('password')} />
       <span id="eye" onClick={()=>togglePasswordVisiblity()} className={passwordShown?" w-6 h-6":"hidden w-6 h-6  "}>
         <img  src= {icons.eyeOpen} alt="eye" />
        </span>
        <span id="eye"  onClick={()=>togglePasswordVisiblity()} className={passwordShown?"hidden w-6 h-6":"w-6 h-6  "}>
         <img  src={icons.eyeClose} alt="eye" />
        </span>
       {formik.touched.password && formik.errors.password ? (
         <div className={"text-red-600"}>{formik.errors.password}</div>
       ) : null}

<div className="flex flex-row-reverse justify-end">   

      <label htmlFor="rememberMe" className="mt-3 ml-2"   style={{ display: "block" }}>
          remember me
        </label>
        <input
            className={"mr-0 mt-4 form-checkbox h-5 w-5 text-gray-600"}
            type="checkbox"
          name="rememberMe"
          id="rememberMe"
        />
</div>

       <button  disabled={!formik.validateForm || isSubmitting}  className={"bg-primeryClr hover:bg-purple-700 focus:outline-none  text-center text-white rounded  py-4 mt-6  "+(!formik.validateForm ? 'disabled cursor-not-allowed disable bg-gray-600' : '' ) }  >
       {isSubmitting ? "Please wait..." : "Submit"}
</button >

     </form>
        <div className={"mt-6"}>
          <Link to={ROUTES.PASSWORD_FORGET} >Forget password?</Link>
        </div>
        <br></br>
        <div>
          <Link to={ROUTES.SIGN_UP}>Create an account</Link>
        </div>
     </div>
 </div>
   );
 };
export default  SignInForm;