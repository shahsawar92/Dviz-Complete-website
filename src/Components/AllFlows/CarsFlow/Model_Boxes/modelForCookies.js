import React from 'react'

export default function ModelForCookies(props) {
    const {setshowModel} = props;
    const handleBack=()=>{
        setshowModel(false);
    }   

    
    return (
        <>
        <div
            className="justify-center items-center w-screen flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                {/* header */}
                <div className={"flex flex-start z-100 justify-between items-center font-bold text-lg border-b-2 h-12  text-black"}>
                    <div>Edit Your information</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" onClick={handleBack} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
                {/* discription  */}
                <div class="grid grid-cols-2 divide-x ">
                        <form action="">

                        </form>
                        <form action="">

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
