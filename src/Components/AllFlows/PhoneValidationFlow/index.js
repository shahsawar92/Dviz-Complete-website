import React from 'react'
import Table from '../../TableForAllFlows/table'

export default function PhoneValidation() {
    const columnsphone =[
        {
          Header:"Phone",
          accessor:"phone"
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
    const dataphone=[
      {
        phone: "004949494444333",
        result: "ok",
        subresult: " ok",
        youmean: " "
      },
      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },

      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
      {
        phone: "004949494444333",
        result: "ok",
        subresult: "yeah ok",
        youmean: " "
      },
    ]
     
    return (
        <div className="mt-12 w-11/12 m-auto">
           <Table columns={columnsphone} data={dataphone}></Table>
        </div>
    )
}
