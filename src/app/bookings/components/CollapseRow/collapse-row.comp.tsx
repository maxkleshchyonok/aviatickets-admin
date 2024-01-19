import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Table, TableHead, TableBody, Button, Grid } from "@mui/material";
import React from "react";
import {KeyboardArrowUp, KeyboardArrowDown, Cancel } from '@mui/icons-material'
import PassengerTable from "../PassengerTable/passenger-table.comp";
import FlightTable from "../FlightTable/flight-table.comp";
import { red } from "@mui/material/colors";
import { stat } from "fs";
import { BookingDto } from "src/aviatickets-submodule/libs/types/booking.dto";

enum statusColors{
  'Booked' = 'blue',
  'Payed' = 'green',
  'Cancelled' = 'red'
}


export function Row(props: { row: BookingDto }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    const handleCancel = () => {
      row.status = 'Cancelled'
      console.log(row.status)
    }
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.user.id}
          </TableCell>
          <TableCell >{row.user.firstName} {row.user.lastName}</TableCell>
          <TableCell>{row.price}</TableCell>
          <TableCell>{row.origin}</TableCell>
          <TableCell>{row.destination}</TableCell>
          <TableCell>
            <Typography display={"flex"}>{row.status}</Typography>
          </TableCell>
          <TableCell >
              {row.status == 'Booked'
              ? <Button onClick={handleCancel} variant="outlined" color="error"> Cancel</Button>
              : null}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, border: 0}} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <PassengerTable passengers={row.passengers}/>
                <FlightTable flights={row.routeForward.concat(row.routeBackward)}/>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }