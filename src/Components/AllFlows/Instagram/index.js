import React,{useRef, useState} from 'react'
import Followers from './Followers/followers';
import Hashtags from './Hashtags/hashtags';
import Profile from './Profile/profile';

export default function InstagramFlow() {
    const [activeStatus, setActiveStatus] = useState(1);
    const childRef = useRef();
    console.log("status here: ", activeStatus);
    return (
        <div className="mt-12 w-11/12 m-auto" >
            <select name="previous_search"  className=" text-center  rounded py-2 form-select block w-full p-3 border border-gray-300  text-gray-600 appearance-none bg-transparent  z-0" >
                <option value="nodata"> no data</option>
            </select>

    
        <div className="mx-auto container py-8 px-4 flex items-center justify-center w-full">
            <ul className="w-full hidden md:flex items-center pb-2 border-b border-gray-200">
                <li onClick={() => setActiveStatus(1)} className={activeStatus === 1 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded  text-xs xl:text-sm leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                    Profile
                </li>
                <li onClick={() => setActiveStatus(2)} className={activeStatus === 2 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                    Hashtages Used
                </li>
                <li onClick={() => setActiveStatus(3)} className={activeStatus === 3 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                    Followers
                </li>
              
            </ul>
            <div className="md:hidden  w-11/12 mx-auto bg-white rounded">
                <div className=" inset-0 m-auto mr-4 z-0 -mb-8 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>
                <select  onChange={(e) => setActiveStatus(e.target.value)
                } aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent">
                    <option value={1} selected className="text-sm text-gray-600">
                        Profile
                    </option>
                    <option value={2} className="text-sm text-gray-600">HashTages Used </option>
                    <option value={3} className="text-sm text-gray-600">Followers </option>
                </select>
            </div>
        </div>
        {/* download button */}
  
{/* below present is data! */}
        {Number(activeStatus)=== Number(1) && <div><Profile  /></div>}
        {Number(activeStatus)=== Number(2) && <div><Hashtags /></div>}
        {Number(activeStatus)=== Number(3) && <div><Followers ref={childRef}/></div>}

        </div>
    )
}
