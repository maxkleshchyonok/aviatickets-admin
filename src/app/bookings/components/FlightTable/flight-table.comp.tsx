import { TableRow, TableCell, Table, TableBody, TableHead, Typography } from '@mui/material'
import { table } from 'console'
import React from 'react'
import { FlightDto } from 'src/aviatickets-submodule/libs/types/flight.dto'

type Props = {
    flights: FlightDto[]
}

export default function FlightTable({flights}: Props) {
  return (
    <>
        <Typography variant="h6" gutterBottom component="div">
            Flights
        </Typography>
        <Table size="small" aria-label="flights" sx={{marginBottom: 2}}>
            <TableHead>
            <TableRow>
                <TableCell>Origin</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell align="right">Departure</TableCell>
                <TableCell align="right">Arrival</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {flights.map((flight) => (
                <TableRow key={flight.id}>
                    <TableCell component="th" scope="row">
                        {flight.originCity}
                    </TableCell>
                    <TableCell>{flight.destinationCity}</TableCell>
                    <TableCell align="right">{flight.departureTime}</TableCell>
                    <TableCell align="right">
                        {flight.arrivalTime}
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </>
  )
}