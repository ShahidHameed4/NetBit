import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import SectionTitle from '../../components/Typography/SectionTitle';
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Avatar,
  Button,
  Pagination,
} from '@windmill/react-ui';
import { EditIcon, TrashIcon } from '../../icons';

function Tables() {
  const [dataTable1, setDataTable1] = useState([]);
  const [pageTable2, setPageTable2] = useState(1);
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8800/api/videos/', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
          },
        });
        const data = await response.json();
        setDataTable1(data.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function onPageChangeTable2(p) {
    setPageTable2(p);
  }

  return (
    <>
      <PageTitle>Videos</PageTitle>
      <SectionTitle>Data</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Video URL</TableCell>
              <TableCell>Views</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((video, i) => (
              <TableRow key={i}>
                <TableCell>{video.title}</TableCell>
                <TableCell>{video.desc}</TableCell>
                <TableCell>
                <a href={video.imgUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </TableCell>
                <TableCell>
                  <a href={video.videoUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </TableCell>
                <TableCell>{video.views}</TableCell>
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
  );
}

export default Tables;
