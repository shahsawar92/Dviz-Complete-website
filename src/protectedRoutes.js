import React from "react";
import { Redirect} from "react-router-dom";
import Cookies from 'js-cookie'

function ProtectedRoute(props) {

  const Component= props.component;
    console.log("call to component: ",props.path);
        return getSession()!==null  ? (
            <Component/>
            ) : (
            <Redirect to={{ pathname: '/' }} />
        );
    
}

export default ProtectedRoute;

export const getSession = () => {
  const jwt = Cookies.get('refresh')
  let session =null
  try {
    if (jwt) {
      const base64Url = jwt.split('.')[1]
      const base64 = base64Url.replace('-', '+').replace('_', '/')
      session = JSON.parse(window.atob(base64))
    }
  } catch (error) {
    console.log(error)
  }
  console.log("session:",session);
  return session
}

