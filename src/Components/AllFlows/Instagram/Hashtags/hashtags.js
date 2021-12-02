import React from 'react'
import Table from '../../../TableForAllFlows/table'

export default function Hashtags() {
  
    const columns =[
        {
          Header:"Insta Id",
          accessor:"id"
        },
        {
            Header:"Hash Tag Name",
            accessor:"hashtag"
          },
          {
            Header:"Hash Tag Profile Picture",
            accessor:"hashProfilePic"
          },
          {
            Header:"Post Count",
            accessor:"postCount"
          },
          {
            Header:"More Info",
            accessor:"moreInfo"
          },
              
    ]

    const data =[
        {
            id:33,
            hashtag:"winning streak",
            hashProfilePic :"GraphImg",
            postCount:"pakVSIndia",
            moreinfo:44,
              
        },
    ]
    return (
        <div>
            <Table columns={columns} data={data} downloadBtn />
        </div>
    )
}
