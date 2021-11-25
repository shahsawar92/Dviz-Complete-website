import React from 'react';
import { Doughnut } from 'react-chartjs-2';
var newFetch = JSON.parse(localStorage.getItem('completeProfileData'));

const DoughnutChart = ({profileData}) => (

  
  <>
  {console.log("newfetch check karo",newFetch)}
  
 
   {newFetch?.starter_plan_check && <div className="text-center pb-3 font-bold">You are currently subscribed to the Starter Plan</div>
   || newFetch?.pro_plan_check && <div>You are currently subscribed to the Pro Plan</div>
   || newFetch?.vip_plan_check && <div>You are currently subscribed to the Vip Plan</div>}
   
{console.log("starter plan check",profileData?.starter_plan_check)}
{console.log("starter plan used",profileData?.grooves_used)}

    <Doughnut data={{
  labels: ['Groves used', 'Groves Remaning'],
  datasets: [
    {
      
      data: [profileData?.grooves_used,profileData?.Grooves_Remaining],
      backgroundColor: [
        '#355070',
        '#6D597A',
        
      ],
      borderColor: [
        '#355070',
        '#6D597A',
       
      ],
      borderWidth: 1,
    },
  ],
}} 
    options={{
      plugins: {
        legend: {
          position: 'bottom',
          align:'start',
          fullSize:true,
          labels:{boxWidth:12,padding:9,textAlign:"left",font:"roboto"} 

       },
   },
  }}
    height={20} width={50} />
    
  </>
);

export default DoughnutChart;