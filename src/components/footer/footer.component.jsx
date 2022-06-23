import { Typography, Link as MaterialLink } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-subcontainer footer-wrap" >
      <Typography sx={{width: "100%", color: "white"}}>
        Get in contact
      </Typography>
      <Typography sx={{color: "white"}}>
        Email:  thiago.diniz.20.03.2002@gmail.com
      </Typography>
    </div>
    <div className="footer-subcontainer footer-wrap">
      <Link to="/" className="footer-link-container">
        <Typography className="footer-link" variant="body1">
          HOME
        </Typography>
      </Link>
      <Link to="/search" className="footer-link-container">
        <Typography className="footer-link" variant="body1">
          POKEDEX
        </Typography>
      </Link>
      <Link to="/team" className="footer-link-container">
        <Typography className="footer-link" variant="body1">
          BUILD TEAM
        </Typography>
      </Link>
    </div>
    <div className="footer-subcontainer">
      <Typography sx={{ color: "white" }}>
        Made by:
        <Typography variant="h4" sx={{ color: "white" }}>
          <MaterialLink href="https://github.com/ThiagoDiniz-creator">
            Thiago Diniz
          </MaterialLink>
        </Typography>
      </Typography>
    </div>
  </div>
);

export default Footer;
