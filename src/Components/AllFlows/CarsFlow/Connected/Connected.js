import React from 'react'
import Table from '../../../TableForAllFlows/table';

export default function Connected() {
    
    const columns =[
        {
          Header:"Name",
          accessor:"Name"
        },
        {
          Header:"Make",
          accessor:"Make"
        },
        {
          Header:"Model",
          accessor:"Model"
        },
        {
          Header:"Year",
          accessor:"Year"
        },
        {
          Header:"Color",
          accessor:"Color"
        },
        

        {
          Header:"Currency",
          accessor:"Currency"
        },
        {
          Header:"Price",
          accessor:"Price"
        },
        {
          Header:"Est. Price",
          accessor:"Est_Price"
        },
        {
          Header:"VIN",
          accessor:"VIN"
        },
        {
          Header:"Platform",
          accessor:"Platform"
        },
        {
          Header:"More info",
          accessor:"More_info"
        },
        {
          Header:"Contact Seller",
          accessor:"Contact_Seller"
        },
       
      ];
    const data=[
      {
        Name:"audi q3",
        Make:"Audi AG",
        Model:"2021",
        Year :"2021",
        Color:"lightblue",
        Currency:"usd",
        Price:"$ 36995",
        Est_Price:"$ 36000",
        VIN:"A12333ACd",
        Platform:"abc ",
        More_info:"the 2022 Q3 is the smallest Audi SUV,",
        Contact_Seller:"abc"
      },
      {
        Name:"2022 Mercedes-AMG GLA-Class",
        Make:"AMG",
        Model:"2022",
        Year :"2022",
        Color:"lightred",
        Currency:"usd",
        Price:"$ 49,000",
        Est_Price:"$ 49,000",
        VIN:"AM12sf3ACd",
        Platform:"abc ",
        More_info:"A new Rose Gold paint is available",
        Contact_Seller:"abc"
      },
      {
        Name:"audi q3",
        Make:"Audi AG",
        Model:"2021",
        Year :"2021",
        Color:"lightblue",
        Currency:"usd",
        Price:"$ 36995",
        Est_Price:"$ 36000",
        VIN:"A12333ACd",
        Platform:"abc ",
        More_info:"the 2022 Q3 is the smallest Audi SUV,",
        Contact_Seller:"abc"
      },
      {
        Name:"2023 Mercedes-AMG EQS",
        Make:"AMG",
        Model:"2023",
        Year :"2023",
        Color:"grey",
        Currency:"usd",
        Price:"$ 130,000 ",
        Est_Price:"$ 130,000 ",
        VIN:"AMGe334d",
        Platform:"abc ",
        More_info:"the AMG version will arrive a few months after the base EQS450+ and EQS580 models",
        Contact_Seller:"abc"
      },
      
    ]
    return (
        <div className="text-sm mt-12 w-11/12 m-auto overflow-x-hidden"  >
            <Table columns={columns} data={data}></Table>
        </div>
    )
}
