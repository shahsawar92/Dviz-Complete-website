import React from 'react'
import Table from '../../../TableForAllFlows/table'

export default function ProfileComponentTalbe() {
    const columns =[
        {
          Header:"Post",
          accessor:"Post"
        },
        {
            Header:"Caption",
            accessor:"Caption"
          },
          {
            Header:"Post Type",
            accessor:"Post_type"
          },
          {
            Header:"Hashtag",
            accessor:"Hashtag"
          },
          {
            Header:"No of Comments",
            accessor:"No_of_comments"
          },
          {
            Header:"Likes Per Post",
            accessor:"like_per_post",
          }, 
          {
            Header:"Likes Per Video",
            accessor:"Video_viewed",
          },    
    ]

    const data =[
        {
            Post:"pic",
            Caption:"winning streak",
            Post_type :"GraphImg",
            Hashtag:"pakVSIndia",
            No_of_comments:44,
            like_per_post:455,
            Video_viewed:20
            
        },
    ]
    return (
        <div>
        <Table columns={columns} data={data}/>
        </div>
    )
}
