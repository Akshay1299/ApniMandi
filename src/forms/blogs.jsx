import React, { useState } from "react";
import axios from "axios";
import "./blogs.css";
import { useNavigate } from "react-router-dom";

import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from "mdb-react-ui-kit";

function Form() {
  const navigate = useNavigate();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogImageLink, setBlogImageLink] = useState("");
  const [result, setResult] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/posts/create", {
        title: blogTitle,
        desc: blogDescription,
        image: blogImageLink,
      })
      .then((response) => {
        console.log(response);
        navigate("/2");
      })
      .catch((error) => {
        console.log(error);
      });
    setBlogTitle("");
    setBlogDescription("");
    setBlogImageLink("");
  };

  return (
    <div style={{paddingTop:'50px'}}>
      <MDBContainer lg>
        <div className="container2">
          <MDBRow>
            <MDBCol sm="6">
              <div style={{ paddingTop: "35px", paddingLeft: "50px", fontSize: "18px" }}>
                <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                  <div className="form-column">

                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: "1px", fontSize: "35px", textAlign: "center" }}>
                      Article
                    </h3>
                    <MDBRow>
                      <MDBCol sm="12">
                        <MDBInput wrapperClass="mb-4 mx-5 w-100" value={blogTitle} placeholder="Title" id="title" type="text" onChange={(event) => setBlogTitle(event.target.value)} required size="lg" />
                      </MDBCol>
                      
                      <MDBCol sm="12">
                        <MDBInput
                          wrapperClass="mb-4 mx-5 w-100"
                          placeholder="Image Link"
                          type="text"
                          id="imageLink"
                          value={blogImageLink}
                          onChange={(event) => setBlogImageLink(event.target.value)}
                          required
                          size="lg"
                        />
                      </MDBCol>
                      <MDBCol sm="12" >
                        <textarea
                          id="description"
                          placeholder="Description"
                          value={blogDescription}
                          onChange={(event) => setBlogDescription(event.target.value)}
                          className="form-control mx-5 mt-2"
                          rows="5"
                          style={{fontSize:'20px'}}
                        />
                      </MDBCol>

                      <MDBCol sm="12" style={{paddingTop:'20px'}}>
                        <MDBBtn className="mb-4 px-5 mx-5 w-50" color="info" size="lg" onClick={handleSubmit} style={{color:'white'}}>
                          Submit
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </div>
                </div>
              </div>
            </MDBCol>



          <div className="image-column">
            <MDBCol sm='6' className='d-none d-sm-block px-0'>
              <img src="https://img.freepik.com/free-vector/wall-post-illustration-concept_114360-907.jpg?w=740&t=st=1681860682~exp=1681861282~hmac=0a46bbd03af14120384ce9f796257668fc42d928f51453d07eb29e8620ba8695" alt="Login image" className="w-125"
                style={{ alignContent: 'flex-end', height: '35rem', width: '30rem' }} />
            </MDBCol>
          </div>
        </MDBRow>
      </div>
    </MDBContainer>
    </div>
  );
}

export default Form;