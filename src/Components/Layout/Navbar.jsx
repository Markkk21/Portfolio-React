import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from React Router

import { AppBar, 
  Box, 
  CssBaseline, 
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Toolbar, 
  Typography, 
  Button  
} from '@mui/material';

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
  { name: 'Resume', path: '/resume', icon: <FeedOutlinedIcon /> },
];


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation(); // Get the current location

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isCurrentPath = (path) => {
    // Check if the current path matches the given path
    return location.pathname === path;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={MarkLogo} alt="Logo" id="logo"/>
      {/* <Typography variant="h4" sx={{ mb: 2 }}>
        Mark<span id='lblWorks'>Works</span>
      </Typography> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path} 
              sx={{ color: isCurrentPath(item.path) ? '#d4af37' : 'inherit' }} // Apply color based on the current path
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
      <AppBar component="nav" id="navBar">
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
          >
            Mark<span id='lblWorks'>Works</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                key={item.name} 
                component={Link} 
                to={item.path} 
                sx={{ color: isCurrentPath(item.path) ? '#d4af37' : '#fff', margin: "1.5vh" }} // Apply color based on the current path
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1c1e24', color: 'white' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
