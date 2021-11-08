import Cookies from "js-cookie";
import React from "react";
import { Redirect } from "react-router";
// import { useContexts } from "./Components/Context/context";

function LogOut() {
    // const {loginInfo}=useContext(useContexts)
            Cookies.remove('refresh');
            Cookies.remove('access');
            return ( <Redirect to={{ pathname: '/' }} /> );
}


export default LogOut;
