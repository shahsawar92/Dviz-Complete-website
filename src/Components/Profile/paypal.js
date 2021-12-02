import React, { useContext, useEffect } from "react";
import axios from 'axios'
import { useContexts } from "../Context/context";
export default function PayPal(props) {
   const {setShowModal} = props;

   let config = {
    headers: {
       'Content-Type': 'application/json'
    }
  }
  const URL='https://shahbaz.dviz.tech/plansubscription/';
   const {plan_id}=props
   console.log("planid",plan_id);
    const {name}=props
    console.log("name of pkg:",name);
    const {profileData,updateProfileDAta,setupdateProfileData}=useContext(useContexts);
    // const callAxios=()=>{
    //   
  
      
    // }
    // { buttonClicked && callAxios()}
    
    useEffect(() => {
        window.paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'silver',
                layout: 'vertical',
                label: 'subscribe'
            },

    createSubscription: function(data, actions) {
      return actions.subscription.create({
        'plan_id': plan_id
      });
  
    },
  
    onApprove: function(data, actions) { 
      //will update grooves on navbar  
      setupdateProfileData(!updateProfileDAta);
   
      console.log("response data of paypal:",data);
    //   axios.post(URL, name ,config)
    // .then(response => {
       
    //     console.log("response",response);
    
    // }).catch(error=>{ console.log(error); }  )
    axios.get(URL, {
            params: {
                'id':profileData.id,
                'username': profileData.username,
                 'plan':name
            }
        },config)
        .then(response => {
          console.log("response of login:",response);
        
    
          if(response.status===200){
            
            alert(response?.data?.activated_plan+" Plan Activated  ")  
          }
        })
        .catch(error=>{
      console.log("profile:",error);
        })
    },
    onError: (err) => {
        
        console.error(err);
      },
  
  }).render('#paypal-button-container')
    })
  return (
    <>
      (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Payment
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed" id={"paypal-button-container"}></div>
                  
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) 
    </>
  );
}