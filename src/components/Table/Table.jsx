import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useEffect } from "react";
import { useState } from "react";


// function createData(name, trackingId, date, status, Email) {
//   return { name, trackingId, date, status, Email };
// }

// const rows = [
//   createData("Childern Safety", 18908415224, "2 March 2022", "Approved" ,"childrensafety@gmail.com" ),
//   createData("Turkey Ewarthquake", 189051568424, "2 March 2022", "Pending","turkeyearthquake@gmail.com" ),
//   createData("Malnutrition", 18908448424, "2 March 2022", "Approved","malnutrition@gmail.com"),
//   createData("XYZ", 18908479921, "2 March 2022", "Rejected","xyz@gmail.com"),
// ];

export default function BasicTable() {

const host = "http://localhost:5000"
  const [rows, setRows] = useState(null)
  const fillRows = (user) => {
    setRows(user)
  }

  useEffect(() => {
    // localhost:5000/api/auth/getuser
    const getUserProfile = async () => {
      const response = await fetch(`${host}/getuser`, {
        method: 'GET'
      });

      const json = await response.json();
      // fillRows(json)
      setRows(json)
      console.log(json)
      // setUser(json)    
    }
    getUserProfile();

    // console.log("side",user);

  }, [])
  var random = 1


  return (
      <div className="Table">
      <h3>Recent SignUps</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Email</TableCell>
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
                <TableCell align="left">{row.firstName}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="left">{new Date(row.date).toLocaleDateString()}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
