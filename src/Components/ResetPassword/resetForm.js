import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import * as ROUTES from '../../Constants/Routes';
import { useFormik , } from 'formik';
import * as Yup from 'yup';
import {images} from '../../Utilities/Images'
import {icons} from '../../Utilities/flow_icons'
import './style.css'

 
 const ResetForm = () => {
   //sent to store
   const [isSubmitting]=useState(false);
   const [errorMsg]=useState()
  
//   let config = {
//     headers: {
//        'Content-Type': 'application/json'
//     }
//   }
//   const URL='https://shahbaz.dviz.tech/rest-auth/login/';
// const history=useHistory();
   const formik = useFormik({
     initialValues: {
       newPassword: '',
       password: '',
       email:"abc@gmail.com",
     },
     validationSchema: Yup.object({
       newPassword: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
         password: Yup.string()
         .required('No password provided.') 
         .min(8, 'Password is too short - should be 8 chars minimum.')
         .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
     }),
     onSubmit:(values) => {
       console.log("values are:",values);
       
    //    setSbumitting(true);  
    //     axios.post(URL, values,config)
    //         .then(response => {
                
    //           console.log(response);
    //           if(response.status===200){
    //             setSbumitting(false);
    //             setloginInfo(true);
                
    //             history.push(`${ROUTES.DASHBOARD}`);
    //           }
    //           else {
    //             setSbumitting(false);
    //             console.log(response.statusText);
    //             alert(response.statusText)
    //           }
    //         })  .catch(function (error){
    //           setSbumitting(false);
    //           if (error.response) {
    //             // The request was made and the server responded with a status code
    //             // that falls out of the range of 2xx
    //             console.log("errordata",error.response.data.non_field_errors);
    //             setErrorMsg(error.response.data.non_field_errors[0]);

    //             console.log("errr status:",error.response.status);
    //             console.log("error header:",error.response.headers);
    //           } else if (error.request) {
    //             // The request was made but no response was received
    //             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //             // http.ClientRequest in node.js
    //             console.log("request error",error.request);
    //           } else {
    //             // Something happened in setting up the request that triggered an Error
    //             console.log('Error', error.message);
    //           }
    //           console.log("config:",error.config);
    //         });
     },
   });
   const [passwordShown, setPasswordShown] = useState(true);
   const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
   return (
    <div className=' md:mt-0'>  
    {/* form card  */}
    <div className='bg-white py-10 md:w-3/4'>
    {/* logo heading */}
        <h1 className='text-2xl  font-medium text-primary mt-4 mb-12 text-center'>
            <img className={"m-auto"} src={images.logo} alt="DVIZ LOGO" ></img>
        </h1>
        <div className="text-lg font-semibold text-red-600">{errorMsg}</div>
     <form className="flex flex-col" onSubmit={formik.handleSubmit}>
     
                    
       <label htmlFor="newPassword">New Password</label>
       <input
         className="px-8  bg-gray-300  rounded py-4  focus:outline-none items-center"
         id="newPassword"
         type={passwordShown?"password":"text"} 
         placeholder={"newPassword"}
         {...formik.getFieldProps('newPassword')}
       />
       <span id="eye" onClick={()=>togglePasswordVisiblity()} className={passwordShown?" w-6 h-6":"hidden w-6 h-6  "}>
         <img  src= {icons.eyeOpen} alt="eye" />
        </span>
        <span id="eye1"  onClick={()=>togglePasswordVisiblity()} className={passwordShown?"hidden w-6 h-6":"w-6 h-6  "}>
         <img  src={icons.eyeClose} alt="eye" />
        </span>
       {formik.touched.newPassword && formik.errors.newPassword ? (
         <div className={"text-red-600"}>{formik.errors.newPassword}</div>
       ) : null}
       <label htmlFor="email">Conform Password</label>
       <input 
         className="px-8  bg-gray-300  rounded py-4  focus:outline-none items-center"
       id="password" 
       type={passwordShown?"password":"text"} 
       placeholder={"Password"}
       {...formik.getFieldProps('password')} />
       <span id="eye" onClick={()=>togglePasswordVisiblity()} className={passwordShown?" w-6 h-6":"hidden w-6 h-6  "}>
         <img  src= {icons.eyeOpen} alt="eye" />
        </span>
        <span id="eye1"  onClick={()=>togglePasswordVisiblity()} className={passwordShown?"hidden w-6 h-6":"w-6 h-6  "}>
         <img  src={icons.eyeClose} alt="eye" />
        </span>
       {formik.touched.password && formik.errors.password ? (
         <div className={"text-red-600"}>{formik.errors.password}</div>
       ) : null}

       <button  disabled={!formik.validateForm || isSubmitting}  className={"bg-primeryClr hover:bg-purple-700 focus:outline-none  text-center text-white rounded  py-4   "+(!formik.validateForm ? 'disabled cursor-not-allowed disable bg-gray-600' : '' ) } type="submit" >
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
export default  ResetForm;