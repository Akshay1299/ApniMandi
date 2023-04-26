import React, { useState } from "react";
import axios from "axios";
import './events.css';
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from "mdb-react-ui-kit";


function EventForm() {
    const navigate = useNavigate()
    const [eventtitle, setTitle] = useState("");
    const [eventdescription, setDescription] = useState("");
    const [eventsummary, setSummary] = useState("");
    const [eventlocation, setLocation] = useState("");
    const [eventdate, setDate] = useState("");
    const [eventimageLink, setImageLink] = useState("");
    const [eventphoneNumber, setPhoneNumber] = useState("");
    const [result, setResult] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/events/create", {
            title: eventtitle,
            desc: eventdescription,
            summary: eventsummary,
            location: eventlocation,
            time: eventdate,
            image: eventimageLink,
            phone: eventphoneNumber
        })
            // Do something with the form data (e.g. send it to a backend API)
            .then((response) => {
                console.log(response)
                navigate("/3")
            })
            .catch((error) => {
                console.log(error);
            });

        setTitle("");
        setDescription("");
        setImageLink("");
        setSummary("");
        setLocation("");
        setPhoneNumber("");
        setDate("");
    };

    return (

        <div >
            <MDBContainer lg>
                <div className="container2">
                    <MDBRow>
                        <MDBCol sm="6">
                                <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                                    <div className="form-column">
                                    <div style={{ paddingTop: "0px", paddingLeft: "50px", fontSize: "15px" }}>

                                        <h3 className="fw-normal mb-2 ps-5 pb-3" style={{ letterSpacing: "1px", fontSize: "35px", textAlign: "center" }}>
                                        Event 
                                        </h3>
                                        <MDBRow>
                                            
                                            <MDBCol sm="12">
                                                <MDBInput wrapperClass="mb-4 mx-5 w-100" placeholder="Title" type="text" id="title" value={eventtitle} onChange={(e) => setTitle(e.target.value)} required />
                                            </MDBCol>
                                            <MDBCol sm="12">
                                                <MDBInput
                                                    wrapperClass="mb-4 mx-5 w-100"
                                                    placeholder="Image Link"
                                                    type="text"
                                                    id="imageLink"
                                                    value={eventimageLink}
                                                    onChange={(e) => setImageLink(e.target.value)}
                                                    required
                                                />
                                            </MDBCol>
                                            <MDBRow sm="12">
                                                <MDBCol>
                                            <MDBInput
                                                    wrapperClass="mb-4 mx-5 w-100"
                                                    placeholder="Location"
                                                    type="text"
                                                    id="location"
                                                    value={eventlocation}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    required

                                                />
                                                </MDBCol>
                                                <MDBCol >
                                                <MDBInput
                                                    wrapperClass="mb-4 mx-5 w-100"
                                                    placeholder="Phone Number"
                                                    type="text"
                                                    id="phoneNumber"
                                                    value={eventphoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                    required

                                                />
                                            </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                            <MDBCol sm="12">
                                                <MDBInput
                                                    wrapperClass="mb-4 mx-5 w-100"
                                                    placeholder="Date and Time (Eg: 9:00 am 15 May)"
                                                    type="text"
                                                    id="date"
                                                    value={eventdate}
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBCol sm="12">

                                            </MDBCol>
                                            
                                            <MDBCol sm="12" >
                                                <textarea

                                                    placeholder="Summary"
                                                    type="text"
                                                    id="description"
                                                    value={eventdescription}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    className="form-control mx-5 mt-1.5"
                                                    rows="5"
                                                    style={{ fontSize: '17px' }}
                                                />
                                            </MDBCol>

                                            <MDBCol sm="12" >
                                                <textarea

                                                    placeholder="Description"
                                                    type="text"
                                                    id="summary"
                                                    value={eventsummary}
                                                    onChange={(e) => setSummary(e.target.value)}
                                                    className="form-control mx-5 mt-2"
                                                    rows="5"
                                                    style={{ fontSize: '17px' }}
                                                />
                                            </MDBCol>

                                            <MDBCol sm="12" style={{ paddingTop: '20px' }}>
                                                <MDBBtn className="px-5 mx-5 w-50" color="info" size="lg" onClick={handleSubmit} style={{ color: 'white' }}>
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
                                    style={{ alignContent: 'flex-end', height: '45rem', width: '35rem' }} />
                            </MDBCol>
                        </div>
                    </MDBRow>
                </div>
            </MDBContainer>
        </div>
    );
};

export default EventForm;
