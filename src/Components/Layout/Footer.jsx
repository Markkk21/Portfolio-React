import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="fixed" className="footerAppBar">
      <Toolbar className="footerToolbar">
        <Typography variant="body1" color="inherit" align="center">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
        <Link href="#" className="footerLink">Privacy Policy</Link>
        <Link href="#" className="footerLink">Terms of Service</Link>
        <Link href="#" className="footerLink">Contact Us</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
