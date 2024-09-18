import React, { useState } from "react";
import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  Typography,
  MenuItem,
  Popover,
} from "@mui/material";
import {
  FaWhatsapp,
} from "react-icons/fa";
import { FaCopy} from "react-icons/fa";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../navbar/ThemeContext";
import './Sidebar.css';
const Sidebar = () => {
  const { isDarkMode } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("S4PY3LB7");
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };
  const open = Boolean(anchorEl);
  return (
    <Drawer
      anchor="right"
      variant="permanent"
      className="sidebarClass"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderLeft: "0px",
          borderRight: "none",    
          color: colorConfigs.sidebar.color,
          direction: "rtl",
          backgroundColor: isDarkMode ? "#444" : "#d4f2fc",
          height: "100vh", 
          overflowY: "auto", 
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#6495ED",
            borderRadius: "10px", 
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#1E90FF",
          },
        },
        
      }}
    >
      <List disablePadding>
        <Toolbar>
          <Stack sx={{ width: "75%" }} direction="row" justifyContent="center">
            <Avatar
              src={assets.images.logo}
              sx={{ width:100, height:45,position:"absolute",right:0,top:0}}
            />
          </Stack>
        </Toolbar>
        <Toolbar sx={{ marginBottom: "-5px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar
              src={assets.images.StoreLogo}
              sx={{ width:150,height:150,marginTop:"15px"}}
            />
          </Stack>
        </Toolbar>
        <Typography
          variant="h5"
          sx={{ color: colorConfigs.sidebar.color, textAlign: "center", mb: 1 }}
        >
          متجر الموضة
        </Typography>
       <div className="flex justify-center items-center mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #336771",
            borderRadius: "25px",
            width: "150px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className="flex justify-center items-center"
            style={{ borderLeft: "2px solid #336771" }}
          >
            <a href="#"
              className="mb-2 px-3 font-medium"
              style={{ margin: "auto auto" , textDecoration:"none"}}
            >
             زياره المتجر
            </a>
          </div>
          <div onClick={handleClick} className="rounded-1-3xl" style={{cursor:"pointer"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g
                fill="#417778"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{
                  fill: "blue",
                  fillRule: "nonzero",
                  stroke: "none",
                  strokeWidth: "1",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: "10",
                  strokeDasharray: "",
                  strokeDashoffset: "0",
                  fontFamily: "none",
                  fontWeight: "none",
                  fontSize: "none",
                  textAnchor: "none",
                  mixBlendMode: "normal",
                  marginLeft: "auto",
                  marginRight: "auto",
                
                }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M34.49219,8.99023c-2.495,0 -4.51172,2.01014 -4.51172,4.49414c0,0.63129 0.13101,1.22997 0.36523,1.77539c-0.01342,0.00637 -0.02134,0.00693 -0.03516,0.01367l-13.78906,6.90625c-0.80416,-0.73732 -1.86444,-1.19922 -3.03906,-1.19922c-2.491,0 -4.51758,2.02658 -4.51758,4.51758c0,2.491 2.02758,4.51758 4.51758,4.51758c1.16669,0 2.22092,-0.45654 3.02344,-1.18555c0.05122,0.03175 0.08449,0.06421 0.14648,0.0957l13.73242,7.79492c-0.23508,0.54829 -0.36719,1.15113 -0.36719,1.78516c0,2.495 2.01709,4.52344 4.49609,4.52344c2.48,0 4.49805,-2.02844 4.49805,-4.52344c0,-2.495 -2.01905,-4.52539 -4.49805,-4.52539c-1.49524,0 -2.81271,0.74527 -3.63086,1.87891l-13.57227,-7.70508c-0.05068,-0.031 -0.08654,-0.04716 -0.13281,-0.07422c0.51403,-0.73316 0.82031,-1.62056 0.82031,-2.58203c0,-0.94408 -0.29202,-1.8194 -0.78906,-2.54492l13.64258,-6.82422c0.81697,1.11993 2.12972,1.85547 3.62891,1.85547c2.495,0 4.52539,-2.02086 4.52539,-4.50586c0,-2.485 -2.01867,-4.48828 -4.51367,-4.48828zM34.47266,9.98828c1.902,0 3.51758,1.55709 3.51758,3.49609c0,1.939 -1.60777,3.49805 -3.50977,3.49805c-1.902,0 -3.48437,-1.51803 -3.48437,-3.45703c0,-1.939 1.57456,-3.53711 3.47656,-3.53711zM13.48242,21.97461c1.943,0 3.52344,1.58044 3.52344,3.52344c0,1.943 -1.58044,3.52344 -3.52344,3.52344c-1.943,0 -3.52344,-1.58044 -3.52344,-3.52344c0,-1.943 1.58044,-3.52344 3.52344,-3.52344zM34.49414,34.99414c1.931,0 3.50195,1.57095 3.50195,3.50195c0,1.931 -1.57095,3.50195 -3.50195,3.50195c-1.931,0 -3.50195,-1.57095 -3.50195,-3.50195c0,-1.931 1.57095,-3.50195 3.50195,-3.50195z"></path>
                </g>
              </g>
            </svg>
          </div>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)'}}>
            <MenuItem onClick={handleClose} style={{fontSize:"12px",borderBottom:"1px solid gray"}}>
            نسخ رابط المتجر
             <i
               className="sicon-swap-stroke"
                size={24}
                style={{fontSize:"12px" ,width:"12px",height:"12px",marginLeft:"10px"}}
                onClick={handleCopy}
              ></i>
            </MenuItem>
            <MenuItem onClick={handleClose} style={{marginLeft:"10px"}}>
            واتساب
            <i className="sicon-whatsapp" size={20} style={{fontSize:"10px",marginLeft:"20px"}}></i>
            </MenuItem>
          </div>
        </Popover>

        </div>

        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
