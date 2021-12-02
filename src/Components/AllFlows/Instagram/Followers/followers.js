import React from 'react';
import Table from '../../../TableForAllFlows/table';

export default function Followers() {
 
    const columns =[
        {
          Header:"Profile Picture",
          accessor:"PP"
        },
        {
            Header:"Insta Id",
            accessor:"id"
          },
          {
            Header:"User Name",
            accessor:"Uname"
          },
          {
            Header:"Full Name",
            accessor:"Name"
          },
          {
            Header:"Private",
            accessor:"private"
          },
          {
            Header: "Varified",
            accessor: "varified"
          }
              
    ]

    const data =[
        {
            pp: "picture",
            id:33,
            uname:"realman",
            Name:"crestiano ronaldo",
            private: "no",
            varified: "yes"
              
        },
    ]
    return (
        <div>
            <Table columns={columns} data={data} downloadBtn={true} />
        </div>
    )
}
