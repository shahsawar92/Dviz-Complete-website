import React, { useMemo } from 'react'
import Table from '../TableForAllFlows/table'
import {notificationData} from '../Context/notificationsData';
import {Link} from 'react-router-dom'
function Notifications() {
  const deleteFunction=(e)=>{
    console.log('deleting row:',e.target.value);    
  }
  const columns =[
    {
      Header:"Sr",
      accessor:"sr"
    },
    {
      Header:"Status",
      accessor:"status"
    },
    {
      Header:"Name",
      accessor: "name",
      Cell: ({ cell }) => (
        <Link value={cell.row.values.name} to={`/${cell.row.values.name}`}> 
          {cell.row.values.name}
        </Link> ) ,
    },
    {
      Header:"Progress",
      accessor:"progress"
    },
    {
      Header:"Time initiated",
      accessor:"time_started"
    },
    {
      Header:"Time Complition",
      accessor:"time_end"
    },
    {
      Header:"Action",
      accessor:"action",
      Cell: ({ cell }) => (
        <button value={cell.row.values.sr} onClick={deleteFunction}>
          Delete
        </button> ) ,
    },
  ];
 const data= useMemo(()=>notificationData,notificationData);
    return (
        <>
        <div className="w-11/12 m-auto mt-12" >
         <Table columns={columns} data={data} />
         </div>
    </>)
}

export default Notifications;
