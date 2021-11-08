import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Groves used', 'Groves Remaning'],
  datasets: [
    {
      
      data: [12, 19, ],
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
};

const DoughnutChart = () => (
  <>
   
    <Doughnut data={data} 
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