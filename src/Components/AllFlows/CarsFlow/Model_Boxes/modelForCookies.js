import React from 'react'

export default function ModelForCookies(props) {
    const {setshowModel} = props;
    const handleBack=()=>{
        setshowModel(false);
    }   

    
    return (
        <>
        <div
            className="justify-center h-full items-center w-screen  flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-4/5  my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                
                {/* header */}
                <div className={"flex flex-start z-100 justify-between items-center font-bold text-lg border-b-2 h-12  text-black"}>
                    <div className="px-5">Edit Your information</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" onClick={handleBack} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
                {/* discription  */}
                <div className="grid grid-cols-2 md:grid-flow-col overflow-x-hidden  place-items-center  	 mt-4 px-4  ">
                    
                        
                        <form action="" className="   bg-gray-200 px-2 items-center  container relative h-80  md:h-60  lg:h-96   " >
                        <h2>Facebook:</h2>
                        <div className="grid grid-flow-col grid-cols-2  mt-4">
                            <div  >
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">c_user *</label>
                            <input type="text" className="border w-4/5  shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> <br />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">fr *</label>
                            <input type="text" className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  /><br />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">presence</label>
                            <input type="text" className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   /><br />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">spin *</label>
                            <input type="text" className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   /><br />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">xs *</label>
                            <input type="text"  className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  /><br />
                            </div>
                            <div >
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">datr *</label>
                            <input type="text"  className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  /><br />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">locale</label>
                            <input type="text" className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   /><br />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">sb</label>
                            <input type="text" className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   /><br />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">wd</label>
                            <input type="text"  className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  /><br /> 
                            <button className="py-1 bg-primeryClr text-white rounded mt-6 w-4/5 ">Clear Cookies</button>
                            </div>
                            </div>
                            <button  className="py-1 bg-primeryClr text-white rounded mt-6 w-full ">Submit</button>
                        </form>
                        
                        

                        <form action="" className=" bg-gray-300 items-center px-2  container relative h-80  md:h-60 lg:h-96   ">
                            
                            <h2>eBay:</h2>
                            <div className="grid grid-flow-col grid-cols-2  mt-4">
                            <div >
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">ak_bmsc *</label>
                            <input type="text" className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">ebay *</label>
                            <input type="text" className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">npii *</label>
                            <input type="text" className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   />
                            </div>
                            <div >
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">dp1 *</label>
                           
                            <input type="text" className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">nonsession *</label>
                            <input type="text"  className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
                            <label htmlFor="c_user" className="block text-gray-700 text-sm font-bold mb-2">s *</label>
                            <input type="text"  className="border w-4/5 shadow appearance-none  rounded  py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
                            <button className="py-1 bg-primeryClr text-white rounded mt-6 w-4/5 ">Clear Cookies</button>
                            </div>
                            </div>
                            <button  className="py-1 bg-primeryClr text-white rounded mt-6 w-full ">Submit</button>
                        </form>
                        
                        </div>
                {/* footer */}
                <div className={"flex flex-row justify-end py-4 border-t-2   "}>
                    <button  onClick={handleBack} className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}>
                        Back
                    </button>
                    <input    onClick={handleBack}  className={"bg-primeryClr rounded h-12 text-white px-4 m-2  "}
                    form="myform" type="submit" value="save"
                    >
                        
                    </input>
                   

                    </div>
                   

                </div>

                

            </div>
            
        </div>
        <div className="opacity-25 w-screen fixed inset-0 z-40 bg-black"></div>

        </>
    )

   
}
