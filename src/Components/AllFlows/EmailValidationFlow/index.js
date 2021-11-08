import React from 'react'
import Table from '../../TableForAllFlows/table'

export default function EmailValidation() {
    const columns =[
        {
          Header:"Email",
          accessor:"email"
        },
        {
          Header:"Result",
          accessor:"result"
        },
        {
          Header:"Sub Result",
          accessor:"subresult"
        },
        {
          Header:"Did You Mean",
          accessor:"youmean"
        },
       
      ];
    const data=[
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },

      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        email: "shahsawar@gmail.com",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
    ]
     
    return (
        <div className="mt-12 w-11/12 m-auto">
           <Table columns={columns} data={data}></Table>
        </div>
    )
}
