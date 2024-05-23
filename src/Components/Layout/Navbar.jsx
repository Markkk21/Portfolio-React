import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MarkLogo from "../../img/Logo.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

const drawerWidth = 200;
const navItems = [
  { name: 'Home', path: '/', icon: <HomeOutlinedIcon /> },
  { name: 'About', path: '/about-me', icon: <PersonOutlineOutlinedIcon /> },
  { name: 'Projects', path: '/projects', icon: <IntegrationInstructionsOutlinedIcon /> },
  { name: 'Résumé', path: '/resume', icon: <FeedOutlinedIcon /> },
];

function Navbar(props) {
  const { window, navColor } = props; // Accept navColor prop
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={MarkLogo} alt="Logo" id="logo"/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path} 
              sx={{ color: isCurrentPath(item.path) ? '#d4af37' : 'inherit'}} // Apply color based on the current path
            >
               {item.icon}
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" id="navBar" className={navColor ? 'sticky' : 'navbar'}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block', fontWeight: 'bold' }}}
          ><Link to="/" style={{ textDecoration: 'none', color: 'inherit',  }} id='lblNavMark'>
            Mark<span id='lblYellow'>Works.</span>
          </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                className="navButton"
                key={item.name} 
                component={Link} 
                to={item.path} 
                sx={{ color: isCurrentPath(item.path) ? '#d4af37' : '#fff', margin: "1.2vh"}} // Apply color based on the current path
              >
                {item.icon}
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', backdropFilter: 'blur(15px)' },    
            '& .MuiTypography-root': { fontSize: '2vh', ml: 2, fontFamily: 'Raleway'},
          }}
        >
          {drawerContent}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
  navColor: PropTypes.bool // Define prop types
};

export default Navbar;
