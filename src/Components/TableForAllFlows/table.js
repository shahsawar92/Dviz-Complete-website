import React, { forwardRef, useImperativeHandle } from 'react';
import { useTable,useSortBy,useGlobalFilter ,usePagination} from "react-table";
import {icons} from '../../Utilities/flow_icons'
import {GlobalFilter} from './Globalfilter'
import './style.css'
import { useExportData } from "react-table-plugins";
import Papa from "papaparse";
import XLSX from "xlsx";


function getExportFileBlob({ columns, data, fileType, fileName }) {
  const header = columns.map((c) => c.exportValue);
  const compatibleData = data.map((row) => {
    const obj = {};
    header.forEach((col, index) => {
      obj[col] = row[index];
    });
    return obj;
  });

  let wb = XLSX.utils.book_new();
  let ws1 = XLSX.utils.json_to_sheet(compatibleData, {
    header,
  });
  XLSX.utils.book_append_sheet(wb, ws1, "React Table Data");
  XLSX.writeFile(wb, `${fileName}.xlsx`);

  // Returning false as downloading of file is already taken care of
  return false;
}
 
const Table =  ({ columns, data ,downloadBtn}) => { 
 
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    page,
    rows, // rows for the table based  on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    exportData,
    previousPage,
    state: { globalFilter,pageIndex, pageSize },
    setPageSize,
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0},
    getExportFileBlob,
  }, useGlobalFilter,useSortBy,usePagination, useExportData );

 
  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
    let showButton=downloadBtn || false;
  return (
    <>
    <div >
    { showButton && <button  onClick={()=>{exportData("xlsx", true)}} className="text-center my-3 rounded py-2  text-white w-full border border-gray-300  appearance-none bg-primeryClr">Download</button>  }
     {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      {/* ..................................................................................... */}
                      {/* HERE IS THE CODE OF FOR ABOVE TABLE PAGINATION */}
      {/* ...................................................................................... */}

      
      {/* ....................................... */}
                  {/* table ui */}
      {/* ....................................... */}
      
    <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[2,10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
    {/* search bar */}
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    
    <table id={"tableCss"} {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th  {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")} 
             {column.isSorted? (column.isSortedDesc? 
             <img className="w-5 float-right h-5" src={icons.sortdown} alt="icondown"/>:
             <img className="w-5 float-right h-5" src={icons.sortup} alt="iconup"/>):
             <img className="w-7  float-right   h-7" src={icons.bothsort} alt="sort"/>}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="pagination flex justify-between mt-2">
        
        <span>
          Page{' '}
          <strong>
            {pageIndex +1} </strong> of <strong> {pageOptions.length} </strong>
          {' '}
        </span>
        <span>
         Go to page:{' '}
          <input 
            className="border outline-none "
            type="number"
            defaultValue={pageIndex+1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>
        <span ><button className="bg-gray-300  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r " onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'First'}
        </button>{' '}
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r " onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'Prev.'}
        </button>{' '}
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r " onClick={() => nextPage()} disabled={!canNextPage}>
          {'Next'}
        </button>{' '}
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r " onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'Last'}
        </button>{' '}
        </span>
        
      </div>
    </div>
    </>
  );
}

export default Table;