import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MuiAppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import applogo from "../assets/extra/applogo.png";
import { useAppStore } from './appStore';
import './sidebar.css';

const AppBar = styled (MuiAppBar, {}) (({theme}) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Search = styled ('div') (({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha (theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha (theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing (2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up ('sm')]: {
    marginLeft: theme.spacing (3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled ('div') (({theme}) => ({
  padding: theme.spacing (0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled (InputBase) (({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing (1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing (4)})`,
    transition: theme.transitions.create ('width'),
    width: '100%',
    [theme.breakpoints.up ('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar () {
  const [anchorEl, setAnchorEl] = React.useState (null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState (null);

  const updateOpen = useAppStore (state => state.updateOpen);
  const dopen = useAppStore (state => state.dopen);

  const isMenuOpen = Boolean (anchorEl);
  const isMobileMenuOpen = Boolean (mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl (event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl (null);
  };

  const handleMenuClose = () => {
    setAnchorEl (null);
    handleMobileMenuClose ();
  };

  let logout = useNavigate(); 
  const handleLogout =()=> {
    localStorage.clear();
    logout("/");
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl (event.currentTarget);
  };

  const [notclass, setnot] = useState("none");
  const handlenotifi =() =>{
    if(notclass == "none"){
      setnot("");
    }
    if(notclass == ""){
      setnot("none");
    }
    // alert("AAAAA");
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
            onClick={() => updateOpen (!dopen)}
          >
            <MenuIcon />
          </IconButton>
          <div className="logo-app">
            <img src={applogo} alt="" />
          </div>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{display: {xs: 'none', sm: 'block'}}}
          >
            MUI
          </Typography> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
            />
          </Search>
          <Box sx={{flexGrow: 1}} />
          <Box sx={{display: {xs: 'flex', md: 'flex'}}}>
            
{/* ========================= */}

            <IconButton
              size="large"
              edge="end"
              onClick={handlenotifi}
              color="inherit"
            > 
             <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
              
             </IconButton> 
            <div className={notclass}>
              <div className="notifi-box">
                <div className="notifi-item">
                  <div className="notifi-text">
                    <h6><span><AccountCircle color="secondary" /></span>Numair Haider</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </div>
                <hr />
                <div className="notifi-item">
                  <div className="notifi-text">
                    <h6><span><AccountCircle color="secondary" /></span>Numair Haider</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </div>
                <hr />
                <div className="notifi-item">
                  <div className="notifi-text">
                    <h6><span><AccountCircle color="secondary" /></span>Numair Haider</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="notifi-box" id="box">
          		<h2>Notifications <span>17</span></h2>
			        <div class="notifi-item">
				        <img src="img/avatar1.png" alt="img"/>
				        <div class="text">
				          <h4>Elias Abdurrahman</h4>
				          <p>@lorem ipsum dolor sit amet</p>
			          </div> 
			        </div>
            </div> */}

{/* ============================== */}

            
            
            <IconButton
              size="large"
              edge="end"
              aria-label="notification"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
            

          </Box>
          {/* <Box sx={{display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
