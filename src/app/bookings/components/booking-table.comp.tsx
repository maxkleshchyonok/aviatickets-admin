import React from 'react'
import { TableCell, TableRow, TableHead, Table, TableContainer, TableBody, Paper, TablePagination } from '@mui/material'
import { Row } from './CollapseRow/collapse-row.comp'
import { useState } from 'react'
import { BookingDto } from 'src/aviatickets-submodule/libs/types/booking.dto'


type Props = {
  bookings: BookingDto[]
}

export default function BookingTable({bookings}: Props) {
  const [page, setPage] = useState(1)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  
  return (
    <Paper sx={{padding: '20px'}}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>User id</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.slice(page * 5, page * 5 + 5).map((item, index) => (
              <Row key={index} row={item} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={bookings.length}
        rowsPerPage={5}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  )
}