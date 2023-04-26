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
import { useNavigate } from "react-router-dom";

const BlogsPage = () => {


  const navigate=useNavigate()

  const handleBlog=()=>{
    navigate('/create-blog')
  }

  const handleDelete=(e)=>{
    
    const sendReq=async()=>{
      const req=await fetch(`http://localhost:5000/product/${e.target.id}`,{
        method: 'DELETE'
      });

      const data=await req.json();
      const newarr=[]
      for(let i=0;i<rows.length;i++)
      {
        if(rows[i]._id!==e.target.id)
        newarr.push(rows[i])
      }
      setRows(newarr)
     }

     sendReq();
    }

  const host = "http://localhost:5000"
  const [rows, setRows] = useState(null)
  const fillRows = (blog) => {
    setRows(blog)
  }
  useEffect(() => {
    const getBlogProfile = async () => {
      const response = await fetch(`${host}/getproduct`, {
        method: 'GET'
      });

      const json = await response.json();
      // fillRows(json)
      json.sort(function(a, b) {
        return a.date - b.date;
      });
      setRows(json)
      console.log(json)
      // setUser(json)    
    }
    getBlogProfile();

    // console.log("side",user);

  }, [])
  var random=1
  return (

    <div className="Table">
      <h3>Recent Products</h3>
      <div >
    {/* <button type="button" className="eventbutton" onClick={()=>handleBlog()} style={{color:"black"}}><FontAwesomeIcon icon={faCirclePlus}  />  Article</button> */}
    </div>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Price</TableCell>
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
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                
                <TableCell align="left"><button type="button" onClick={handleDelete} id={row._id} class="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash}  /></button></TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default BlogsPage;
