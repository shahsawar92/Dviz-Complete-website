import React, {  useContext} from 'react'
import { Link ,useLocation} from 'react-router-dom';
import * as ROUTES from '../../Constants/Routes'
import {Icons_menu} from '../../Utilities/menu_icons';
import './style.css';
import SecondryMenu from './secondryMenu';
import {images} from '../../Utilities/Images'
import { useContexts } from '../Context/context';


export default function Menu() {
	//definitions
	var retrievedObject = JSON.parse(localStorage.getItem('userdata'));
	console.log('retrievedObject: ', retrievedObject);
	const location = useLocation();
    const {toggle, setToggle, noOfNotifications} = useContext(useContexts);	
	const userImage=useContext(useContexts);
	// actions
    const handleClick= (e)=>{
    	setToggle(!toggle); 
    }

	const conformLogout=(e)=>{
		alert("are you sure to log out");
	}
	//styles
const profileStyle={
			height: "36px",
            width: "36px",
            backgroundSize: "cover",
            borderRadius: "50%",
            marginTop: "8px",
            marginBottom: "8px",
}
    const scrollP={
		marginLeft:"12px",
		paddingRight: "12px",
		height:"373px"
	};
	
    return (
        
            <div className="lg:min-h-screen">
               {/* mobile menu */}
                <div className="bg-white flex w-screen sm:px-2 px-1  md:px-4 h-12 text-gray-500  border-b-2 justify-between lg:hidden">
                {/* logo */}
                <div>
                    <img src={userImage.profileImg}  className={"w-8 pt-1 h-8 "} alt="profile"></img>
                </div>
                <button className=" mobile focus:outline-none " onClick={()=>handleClick()}> 
                <img className={"h-8 w-8"} src={Icons_menu.mobileToggle} alt="toggle" />
                </button>
                </div>
				{/* end of mobile menu */}
                {/* side bar menu wrapper*/}
                <div className={` z-100 fixed  flex h-screen inset-y-0 left-0 transform  transition duration-400 ease-in-out lg:relative lg:-translate-x-0  ${toggle? "-translate-x-full":"" }`}>
                    
                 
                       <div className="widthprimery bg-white h-screen space-y-6 sidebar border-r-2 text-gray-500  px-2 inline-y-0 item-center">
                        {/* navigation menu */}
						 <nav className="w-full" >
							 {/* logo inside menu */}
					<div className={" w-full d-flex flex-column align-items-center flex-column-auto py-12 py-lg-12"}>
						 <div>
							 <img   className="max-h-30px" src={images.logo} alt="logo"></img>
						</div>
						<div className={"cursor-pointer"}  title="profile">
						<Link to={"/profile"}  className="" > 	
							<img className={"ml-4 w-full"} style={profileStyle} src={userImage.profileImg} alt="profile"></img>
							</Link>
							<p className={"text-center text-gray-500 mr-1 text-xs"}>{retrievedObject.user.username}</p>
						</div>
					
						<div className={"text-center text-xs mr-1 text-gray-500"}> Grooves</div>
					</div>
				{/* 4 icons of menu  wrapper*/}

					<div className=" d-flex flex-column align-items-center flex-column-fluid py-5 w-full relative " style={scrollP}>
                        <div className="h-12 w-12  hover:bg-gray-400 rounded"  title="Dashboard">
                                <Link to={"/dashboard"}  className="">			
                            
									<img className="pt-1.5 pl-1.5" src={Icons_menu.dashboardImg} alt="dashboard" />
								
								</Link>
                                </div>
								<br />
						<div className="h-12 w-12  hover:bg-gray-400 rounded"  title="Store">
						<Link to={"/store"}  className="">
						<span className="">
									<img className="pt-1.5 pl-1.5"  src={Icons_menu.storeImg} alt="store" />
							</span>
						</Link>
						</div>
						<br />
						<div className="h-12 w-12  hover:bg-gray-400 rounded"  title="Assets">
						<Link to={"/assets"}  className="">
					
							<img className="pt-1.5 pl-1.5"  src={Icons_menu.assetsImg} alt="Assets" />

							
						</Link>
						</div>
						<br />
						<div className="h-12 w-12  hover:bg-gray-400 rounded"  title="Notifications">
						<Link to={"/notifications"} >
						
							{ noOfNotifications &&  <div className="ml-7  text-white rounded-full text-center w-5 h-5 bg-red-600" id="notificationLive_counter" >{noOfNotifications?.length>9? `9+` :noOfNotifications}</div>}
							{/* <p className="h-1"></p> */}
								<img className={`pt-1.5 ${noOfNotifications && `-mt-6`} pl-1.5`}  src={Icons_menu.notificationsImg} alt="Notifications" />
								{!noOfNotifications && <p className="w-full ml-1 -mt-1 text-gray-400 text-xs" id="notificationLive_alert">No Alert</p>}
							
						</Link>
						</div>
						<br />
						<div className=" h-12 w-12 rounded  hover:bg-gray-400" onClick={(e)=>conformLogout(e)} title="Logout"  >
						<Link to={ROUTES.LOGOUT} name="logout"
							className="">
									<img className="pt-1.5 pl-1.5"  src={Icons_menu.logoutImg} alt="Logout" />
						</Link>
						</div>
					</div>
					{/* end of wrappper of 4 icons */}
						

                            </nav>
                            </div>
                           
                                <SecondryMenu stateName={location.pathname}   />
                           
                     </div>
                </div>
            
          
       
    )
}
