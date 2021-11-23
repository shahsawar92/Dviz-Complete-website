import React, { useRef, useState } from 'react'
import './style.css';
export default function SecondryMenu_Cars() {
    
   
    
    return (
        <div className="w-5/6 overflow-y-auto ">
           <h1 className="text-primeryClr text-3xl font-bold"> Cars</h1>


           <h3 className="text-primeryClr fontsemibold mt-3 text-base">Cars
Start a new search or look through previous searches</h3>

<select name="previous_search"  className={"text-center  rounded py-1 mb-3 form-select block w-full p-3 border border-gray-300  text-gray-600  bg-transparent  z-0"} >
                <option value="nodata">USA</option>
            </select>
            
 
        <div className="ml-4 mt-2 text-sm">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="px-2"> Autotrader</label> <br/>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="px-2"> Cargurus</label><br/>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="px-2"> eBay</label><br/>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="px-2">  Facebook Marketplace</label><br/>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="px-2"> Craigslist</label>
            <br/>
            </div>
            {/* update cookies btn */}
            <div className="float-right text-sm mt-2"> update cookies</div>
            {/* zip code input */}
            <input type="text" className="border-2 py-1 w-full rounded mt-2" id="vehicle1" name="vehicle1" placeholder="  Please enter valid zip code" />
            {/* search with in */}
            
            <select name="previous_search"  className={"text-center mt-5 rounded py-1 mb-3 form-select block w-full p-3 border border-gray-300  text-gray-600  bg-transparent  z-0"} >
                <option value="nodata">Search with in</option>
                <option value="nodata">10 mile</option>
                <option value="nodata">20 mile</option>
                <option value="nodata">50 mile</option>
                <option value="nodata">100 mile</option>
            </select>
            {/* private saller */}
            
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>
            {/* search */}
            <button className="py-1 my-2 rounded w-full bg-primeryClr text-white ">Search</button>
            {/* Set Schedule */}
            <button className="py-1 my-2 rounded w-full bg-primeryClr text-white">Set Scehdule</button>

            {/* check created schedule */}
            <button className="py-1 my-2 rounded w-full bg-primeryClr text-white">Check Created Schedules</button>
</div>
    )
}




