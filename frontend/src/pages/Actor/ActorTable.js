import React, { useState, useEffect } from 'react'

import PageTitle from '../../components/Typography/PageTitle'
import SectionTitle from '../../components/Typography/SectionTitle'

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../../icons'



function Tables() {
  const [response, setResponse] = useState([]);
  const [pageTable2, setPageTable2] = useState(1)
  const [dataTable1, setDataTable1] = useState([])
  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }


  useEffect(() => {
    const fetchTableData1 = async () => {
      try {
       
        const response = await fetch('http://localhost:8800/api/actor/allActors', {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        const data = await response.json();
        setDataTable1(data.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage));

        console.log(dataTable1);
      } catch (error) {
        console.error('Error fetching data for table 1:', error);
      }
    };
  
    fetchTableData1();
  }, [pageTable2]);
  

 
  useEffect(() => {
    setDataTable1(response.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  return (
    <>
      <PageTitle>Tables</PageTitle>

    
      <SectionTitle>Table with actions</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
          <tr>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Bio</TableCell>
              <TableCell>Image</TableCell>
              
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((user, i) => (
              

              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user.image} alt="User avatar" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm"> {user.age}</span>
                </TableCell>
                <TableCell>
                  <span className="text-lg"> {user.bio}</span>
                </TableCell>
                <TableCell>
                    <a href={user.image} className="text-sm  text-red-700" target="_blank" rel="noopener noreferrer">
                       Link
                         </a>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.createdAt).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit">
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete">
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>










    </>
  )
}

export default Tables
