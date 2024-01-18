import React from 'react'
import { TableCell, TableRow, TableHead, Table, TableContainer, TableBody, Paper, TablePagination } from '@mui/material'
import { Row } from './CollapseRow/collapse-row.comp'
import { useState } from 'react'
import { BookingDto } from 'src/aviatickets-submodule/libs/types/booking.dto'
type Props = {}

const arr: BookingDto[] = [
  {
    id: '423i4iewkmrdkl',
    status: 'Booked',
    price: 1234,
    createdAt: 123,
    updatedAt: 123,
    user: {
      id: 'se324j32enmr3124n',
      firstName: "John",
      lastName: "Doe",
      email: 'esi@gmial.com',
      createdAt: 123,
      updatedAt: 123,
      roleId: '12312das',
      roleType: 'Admin'
    },
    routeForward: [
      {
        id: "ejjdosa",
        originCity: 'Mexico',
        destinationCity: 'Los Angeles',
        departureTime: 1702449453367,
        arrivalTime: 1702449453367,
        status: "Planned",
        price: 624,
        seatAmount: 50,
        availableSeatAmount: 20,
        createdAt: 123,
        updatedAt: 123,
      },

    ],
    routeBackward: [
      {
        id: "de3miofmdsak",
        originCity: 'Los Angeles',
        destinationCity: 'Mexico',
        departureTime: 1702449453367,
        arrivalTime: 1702449453367,
        status: "Planned",
        price: 624,
        seatAmount: 50,
        availableSeatAmount: 20,
        createdAt: 123,
        updatedAt: 123,
      },

    ],
    origin: 'Mexico',
    destination: 'Los Angeles',
    passengers: [
      {
        id: "dsmdi1dmisa",
        firstName: 'Peter',
        lastName: 'Griffin',
        passportId: 's',
        createdAt: 123,
        updatedAt: 123,
      },
      {
        id: "dwondjsa",
        firstName: 'Rick',
        lastName: 'Sanchez',
        passportId: 's',
        createdAt: 123,
        updatedAt: 123,
      }
    ]
  },
  {
    id: 'a4123i4iewkfweqmrdkl',
    status: 'Cancelled',
    price: 2224,
    createdAt: 123,
    updatedAt: 123,
    user: {
      id: 'kfodf901f9ksdf',
      firstName: "JMister",
      lastName: "Bean",
      createdAt: 123,
      updatedAt: 123,
      email: 'e1kdsa@tut.by',
      roleId: '12312das',
      roleType: 'Admin'
    },
    routeForward: [
      {
        id: "dio",
        originCity: 'Mexico',
        destinationCity: 'Los Angeles',
        departureTime: 1702449453367,
        arrivalTime: 1702449453367,
        status: "Planned",
        price: 624,
        seatAmount: 50,
        availableSeatAmount: 20,
        createdAt: 123,
        updatedAt: 123,
      },

    ],
    routeBackward: [
      {
        id: "dwq",
        originCity: 'Los Angeles',
        destinationCity: 'Mexico',
        departureTime: 1702449453367,
        arrivalTime: 1702449453367,
        status: "Planned",
        price: 624,
        seatAmount: 50,
        availableSeatAmount: 20,
        createdAt: 123,
        updatedAt: 123,
      },

    ],
    origin: 'Mexico',
    destination: 'Los Angeles',
    passengers: [
      {
        id: "1",
        firstName: 'Peter',
        lastName: 'Griffin',
        passportId: 's',
        createdAt: 123,
        updatedAt: 123,
      },
      {
        id: "2",
        firstName: 'Rick',
        lastName: 'Sanchez',
        passportId: 's',
        createdAt: 123,
        updatedAt: 123,
      }
    ]
  },
  {
    id: '423i4iewkmrdkl',
    status: 'Payed',
    price: 1234,
    createdAt: 123,
    updatedAt: 123,
    user: {
      id: 'se324j32enmr3124n',
      firstName: "John",
      lastName: "Doe",
      email: 'esi@gmial.com',
      createdAt: 123,
      updatedAt: 123,
      roleId: '12312das',
      roleType: 'Admin'
    },
    routeForward: [
      {
        id: "ejjdosa",
        originCity: 'Mexico',
        destinationCity: 'Los Angeles',
        departureTime: 1702449453367,
        arrivalTime: 1702449453367,
        status: "Planned",
        price: 624,
        seatAmount: 50,
        availableSeatAmount: 20,
        createdAt: 123,
        updatedAt: 123,
      },

    ],
    routeBackward: [
      {
        id: "de3miofmdsak",
        originCity: 'Los Angeles',
        destinationCity: 'Mexico',
        departureTime: 1702449453367,
        arrivalTime: 1702449453367,
        status: "Planned",
        price: 624,
        seatAmount: 50,
        availableSeatAmount: 20,
        createdAt: 123,
        updatedAt: 123,
      },

    ],
    origin: 'Mexico',
    destination: 'Los Angeles',
    passengers: [
      {
        id: "dsmdi1dmisa",
        firstName: 'Peter',
        lastName: 'Griffin',
        passportId: 's',
        createdAt: 123,
        updatedAt: 123,
      },
      {
        id: "dwondjsa",
        firstName: 'Rick',
        lastName: 'Sanchez',
        passportId: 's',
        createdAt: 123,
        updatedAt: 123,
      }
    ]
  },
]


export default function BookingTable({}: Props) {
  const [page, setPage] = useState(1)

  const data: BookingDto[] = arr

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
              <TableCell id={'id'}>User id</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * 5, page * 5 + 5).map((item, index) => (
              <Row key={index} row={item} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={arr.length}
        rowsPerPage={5}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  )
}