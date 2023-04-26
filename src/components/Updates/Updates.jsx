import React from "react";
import "./Updates.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from "react-router-dom";


const Updates = () => {
  const navigate=useNavigate()
  
  
  return (
    <div className="Updates">
      {/* {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Updates;
