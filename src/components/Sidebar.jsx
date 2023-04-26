import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const handleSignOut = () => {
    window.location.href = "http://localhost:3000";
  };
  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    style={{paddingRight:'10px',width:'180px'}}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span style={{fontSize:'18px'}}>
          Apni Mandi 
        </span>
      </div>
  
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
            <Link to={`http://localhost:3000/${index}`} style={{textDecoration:"none" ,color:"black", listStyle:"none",fontStyle:"none"}}>
              <span>{item.heading}</span>
            </Link>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem" onClick={handleSignOut}>
            <UilSignOutAlt />
          </div>
      </div>
    </motion.div>
    </>
  );
};

// https://helpinghands-miniproject.netlify.app
export default Sidebar;
