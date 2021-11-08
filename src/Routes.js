import Menu from "./Components/NavBar";
import Profile from "./Components/Profile";
import Assets from './Components/Assets';
import Dashboard from './Components/Dashboard';
import Notifications from './Components/Notifications';
import Store from './Components/Store';
import LogOut from './Components/Logout';
import EmailValidation from "./Components/AllFlows/EmailValidationFlow";
import PhoneValidation from "./Components/AllFlows/PhoneValidationFlow";
import InstagramFlow from "./Components/AllFlows/Instagram";
//setting pages for simple routes!

//profile route
export const ProfileRoute=()=>{ 
    return(
<div className="flex  "> 
<div className="relative w-1/4 overflow-y-hidden">
<div  className={"w-1/4  menuFix  fixed"}> <Menu /> </div>
</div>
 <div className="lg:w-3/4 md:w-full appWidth "> <Profile /> </div>
 </div>
    )
}

//dashboard Route
export const DashboardRoute=()=> {
    return (
        <div className="flex"> 
        <div className="relative w-1/4 overflow-y-hidden">
        <div  className={"w-1/4  menuFix  fixed"}> <Menu /> </div>
        </div>
         <div  className="lg:w-3/4 md:w-full appWidth "> <Dashboard /> </div>
         </div>
    )
}

//Store Route
export const StoreRoute=()=> {
    return (
        <div className="flex  "> 
        <div className="relative lg:w-1/4 overflow-y-hidden">
        <div className={"lg:w-1/4  menuFix  fixed"}> <Menu /> </div>
        </div>   
         <div className="lg:w-3/4 w-full appWidth "> <Store /> </div>
         </div>
    )
}


//Assets Route
export const AssetsRoute = () => {
    return (
        <div className="flex  "> 
       <div className="relative w-1/4 overflow-y-hidden">
       <div className={"w-1/4  menuFix  fixed"}> <Menu /> </div>
       </div>
        <div  className="lg:w-3/4 md:w-full appWidth "> <Assets /> </div>
        </div>
    )
}

//Notification component
export const NotificationsRoute = () => {
    return (
        <div className="flex "> 
        <div className="relative lg:w-1/4 overflow-y-hidden">
        <div className={"lg:w-1/4  menuFix  fixed"}> <Menu /> </div>
        </div> 
        <div  className="lg:w-3/4 w-full appWidth "> <Notifications /> </div>
      </div>
    )
}

//logout component 
export const LogoutRoute = () => {
    return <LogOut />
      
}


//emailvalidation component
export const EmailValidationRoute = () => {
    return (
        <div className="flex "> 
        <div className="relative lg:w-1/4 overflow-y-hidden">
        <div className={"lg:w-1/4  menuFix  fixed"}> <Menu /> </div>
        </div> 
        <div  className="lg:w-3/4 w-full appWidth "> <EmailValidation /> </div>
      </div>
    )
}

//phone validation component
export const PhoneValidationRoute = () => {
    return (
        <div className="flex "> 
        <div className="relative lg:w-1/4 overflow-y-hidden">
        <div className={"lg:w-1/4  menuFix  fixed"}> <Menu /> </div>
        </div> 
        <div  className="lg:w-3/4 w-full appWidth "> <PhoneValidation /> </div>
      </div>
    )
}

//instagram route

export const InstagramRoute = () => {
    return (
        <div className="flex "> 
        <div className="relative lg:w-1/4 overflow-y-hidden">
        <div className={"lg:w-1/4  menuFix  fixed"}> <Menu /> </div>
        </div> 
        <div  className="lg:w-3/4 w-full appWidth "> <InstagramFlow /> </div>
      </div>
    )
}

