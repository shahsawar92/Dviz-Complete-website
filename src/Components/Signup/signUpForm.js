import React, { useState } from 'react';
import { Link,useHistory} from 'react-router-dom';
import { useFormik , } from 'formik';
import * as Yup from 'yup';
import {images} from '../../Utilities/Images'
import axios from 'axios'
import {icons} from '../../Utilities/flow_icons'
import './style.css'
 
 const SignUpForm = () => {
   const [isSubmitting, setSbumitting]=useState(false);
   const [usernameError,setusernameError]=useState("");
   const [emailError,setemailError]=useState("");
    const history= useHistory();
    const [passwordError,setpasswordError]=useState()
    const [passwordError2,setpasswordError2]=useState()
   let config = {
      headers: {
         'Content-Type': 'application/json'
      }
    }
    const URL='https://shahbaz.dviz.tech/rest-auth/registration/';
   const formik = useFormik({
     initialValues: {
       email: '',
       username: '',
       first_name: '',
       last_name: '',
       password1: '',
       password2: '',
      //  trailMember: false, 
     },
     validationSchema: Yup.object({
         email: Yup
            .string()
            .email('Invalid email address')
            .required('Email Required'),
         username: Yup
            .string()
            .min(4,"must be more then 4 characters")
            .max(20, 'Must be 20 characters or less')
            .required('Username Required'),
         first_name: Yup
            .string()
            .min(2,"more then 3 characters")
            .max(15,"to long firnst name")
            .required("First Name Required"),
         last_name: Yup
            .string()
            .min(1, "to short")
            .max(20,"must not be more then that")
            .required("Last Name Required"),
         password1: Yup
            .string()
            .required('Password Required') 
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
         password2: Yup
            .string()
            .oneOf([Yup.ref('password1'), null], 'Passwords must match').required("Enter Same Password Again")
     }),
     onSubmit: values => {
        console.log("values of create account are: ",values);
        setSbumitting(true);
  //  setloginInfo(values);     
        axios.post(URL, values,config)
            .then(response => {
               setSbumitting(false);
               alert("Account Creation Sucessfull");
               history.push("/")
            })
            .catch(function (error) {
               setSbumitting(false);
               if (error.response) {
                 // The request was made and the server responded with a status code
                 // that falls out of the range of 2xx
                 console.log("my last err",error.response.data.non_field_errors);
                 console.log("total error",error.response.data);
                 if(error.response.data.password1)
                 setpasswordError(error.response.data.password1[0]);
                 if(error.response.data.password1)
                 setpasswordError(error.response.data.non_field_errors[0]);
                 if(error.response.data.username)
                 setusernameError(error.response.data.username);
                 if(error.response.data.email)
                 setemailError(error.response.data.email)
                 if(error.response.data.non_field_errors)
                 setpasswordError2(error.response.data.non_field_errors[0]);
                

                 console.log("my last err",error.response.data.non_field_errors);
                 console.log("status",error.response.status);
                 console.log("header",error.response.headers);
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
   const [passwordShown, setPasswordShown] = useState(true);
   const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
   return (
      <div className=' md:w-1/2 '>  
      {/* form card  */}
      <div className=' bg-white py-5  '>
      {/* logo heading */}
          <h1 className='text-2xl w-full font-medium text-primary  text-center'>
              <img className={"m-auto"} src={images.logo} alt="DVIZ LOGO" ></img>
          </h1><br />
       <form onSubmit={formik.handleSubmit}>

       <div className="text-red-600 text-lg">{emailError}</div>
       <label htmlFor="first_name">Email</label>
        <input
             className="px-8 w-full bg-gray-300 mb-2 rounded py-4  focus:outline-none items-center"
             id="email"
             type="text"
             placeholder="E-mail address"
             {...formik.getFieldProps('email')}
        />
            {formik.touched.email && formik.errors.email ? (
            <div className={"text-red-600"}>{formik.errors.email}</div>
            ) : null}

<br />
<div className="text-red-600 text-lg">{usernameError}</div>
         <label htmlFor="first_name">User Name</label>
         <input
           className="px-8 w-full bg-gray-300 mb-2 rounded py-4  focus:outline-none items-center"
           id="username"
           type="text"
           placeholder={"username"}
           {...formik.getFieldProps('username')}
         />
         {formik.touched.username && formik.errors.username ? (
           <div className={"text-red-600"}>{formik.errors.username}</div>
         ) : null}
<br />
      <label htmlFor="first_name">First Name</label>
         <input
           className="px-8 w-full bg-gray-300 mb-2 rounded py-4  focus:outline-none items-center"
           id="first_name"
           type="text"
           placeholder={"First Name"}
           {...formik.getFieldProps('first_name')}
         />
         {formik.touched.first_name && formik.errors.first_name ? (
           <div className={"text-red-600"}>{formik.errors.first_name}</div>
         ) : null}
   <br />
   <label htmlFor="first_name">Last Name</label>
        <input
             className="px-8 w-full bg-gray-300 mb-2  rounded py-4  focus:outline-none items-center"
             id="last_name"
             type="text"
             placeholder="Last Name"
             {...formik.getFieldProps('last_name')}
        />
            {formik.touched.last_name && formik.errors.last_name ? (
            <div className={"text-red-600"}>{formik.errors.last_name}</div>
            ) : null}
<br />
         <div className="text-red-600 text-lg">{passwordError}</div>
         <div className="text-red-600 text-lg">{passwordError2}</div>
       <label htmlFor="password">Password</label>
       <input 
            className="px-8 w-full bg-gray-300  rounded py-4  focus:outline-none items-center"
            id="password1" type={passwordShown?"password":"text"} 
            placeholder="password1" {...formik.getFieldProps('password1')} />
            <span id="eyeinput" onClick={()=>togglePasswordVisiblity()} className={passwordShown?" ":"hidden   "}>
         <img className="w-6 h-6 opacity-40" src= {icons.eyeOpen} alt="eye" />
        </span>
        <span id="eyeinput2"  onClick={()=>togglePasswordVisiblity()} className={passwordShown?"hidden w-6 h-6":"w-6 h-6  "}>
         <img className="w-6 h-6 opacity-40" src={icons.eyeClose} alt="eye" />
        </span>
            {formik.touched.password1 && formik.errors.password1 ? (
            <div className={"text-red-600"}>{formik.errors.password1}</div>
            ) : null}

        <label htmlFor="email">Conform Password</label>
        <input 
            className="px-8 w-full bg-gray-300  rounded py-4   focus:outline-none items-center"
            id="password2"          type={passwordShown?"password":"text"} 
            placeholder="password1 again" {...formik.getFieldProps('password2')} />
            <span id="eyeinput" onClick={()=>togglePasswordVisiblity()} className={passwordShown?"costumW":"hidden w-6 h-6  "}>
         <img className="w-6 h-6 opacity-40" src= {icons.eyeOpen} alt="eye" />
        </span>
        <span id="eyeinput"  onClick={()=>togglePasswordVisiblity()} className={passwordShown?"hidden w-6 h-6":"costumW  "}>
         <img className="w-6 h-6 opacity-40" src={icons.eyeClose} alt="eye" />
        </span>
            {formik.touched.password2 && formik.errors.password2 ? (
            <div className={"text-red-600"}>{formik.errors.password2}</div>
            ) : null}
   
  {/* <div className="flex flex-row-reverse justify-end">
         <label htmlFor="trailMember" className="mt-3 ml-2" style={{ display: "block", }}>
             Trail member:
            </label>
            <input
            className={"mr-0 mt-4 form-checkbox h-5 w-5 text-gray-600"}
            type="checkbox"
            name="trailMember"
            id="trailMember"
            defaultChecked={formik.values.trailMember}
            {...formik.getFieldProps("trailMember")}
             />
             </div> */}
             
         <button disabled={isSubmitting } className={"bg-primeryClr hover:bg-purple-700 focus:outline-none  text-center text-white rounded w-full py-4 mt-4  "+(!formik.validateForm ? 'disabled cursor-not-allowed disable bg-gray-600' : '' ) }  type="submit">
         {isSubmitting? "Please wait...":"Sign Up"}
         </button >
         <Link to="/"> <div className={"bg-primeryClr hover:bg-purple-700 focus:outline-none  text-center text-white rounded w-full py-4 mt-2  "+(!formik.validateForm ? 'disabled cursor-not-allowed disable bg-gray-600' : '' ) }>Back

        </div>
        </Link>
       </form>
         
       </div>
   </div>
   );
 };
export default  SignUpForm;
       
        
 



     