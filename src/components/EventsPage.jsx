import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table/Table.css";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from "react-router-dom";

const EventsPage = () => {

  function createData(name, trackingId, date, status, Email) {
    return { name, trackingId, date, status, Email };
  }
  const navigate=useNavigate()
  const handleEvent=()=>{
    navigate('/create-event')
  }

  const handleDelete = (e) => {

    const sendReq = async () => {
      const req = await fetch(`http://localhost:5000/events/${e.target.id}`, {
        method: 'DELETE'
      });

      const data = await req.json();
      const newarr = []
      for (let i = 0; i < rows.length; i++) {
        if (rows[i]._id !== e.target.id)
          newarr.push(rows[i])
      }
      setRows(newarr)
    }

    sendReq();
  }

  const makeStyle = (verified) => {
    if (verified === "2") {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
    else if (verified === "1") {
      return {
        background: '#fcffa4',
        color: '#ffc40c',
      }
    }
    else {
      return {
        background: '#ffadad8f',
        color: 'red',
      }
    }
  }

  const host = "http://localhost:5000"
  const [rows, setRows] = useState(null)
  const fillRows = (event) => {
    setRows(event)
  }
  useEffect(() => {
    const getBlogProfile = async () => {
      const response = await fetch(`${host}/api/auth/getevent`, {
        method: 'GET'
      });

      const json = await response.json();
      setRows(json)
      console.log(json)
    }
    getBlogProfile();


  }, [])
  var random = 1
  return (
    <div className="Table">
      <h3>Recent Events</h3>
      <button type="button" className="eventbutton"  onClick={()=>handleEvent()} style={{color:"black"}}><FontAwesomeIcon icon={faCirclePlus}/>          Event</button>

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Created On</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="left">Time & Date</TableCell>
              <TableCell align="left">Contact</TableCell>
              <TableCell align="left">Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows && rows.map((row) => (
              <TableRow
                key={random++}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {random}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{new Date(row.date).toLocaleDateString()}</TableCell>
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left"><button type="button" onClick={handleDelete} id={row._id} class="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash} /></button></TableCell>
                {/* color="red"  for red icon */}

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default EventsPage;





