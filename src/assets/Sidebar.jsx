import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import "./sidebar.css";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import AppsIcon from "@mui/icons-material/Apps";
import CableIcon from "@mui/icons-material/Cable";
import HomeIcon from "@mui/icons-material/Home";
import ImageIcon from "@mui/icons-material/Image";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "./appStore";
// import {useRouter} from 'next/router'
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {

  const theme = useTheme();
  // const [open, setOpen] = React.useState (true);
  // const updateOpen = useAppStore (state => state.updateOpen);
  
  const [activestate, setactivestate]= useState(0);

  const open = useAppStore((state) => state.dopen);

  const navigate = useNavigate();
  
  const homenav = () => {
    setactivestate(1);
    console.log(activestate);
    navigate("/Home");
  };
  const screenshotsnav = () => {
    setactivestate(2);
    console.log(activestate);
    navigate("/screenshots");
  };
  const settingsnav = () => {
    setactivestate(3);
    console.log(activestate);
    navigate("/Apps");
  };
  const connectednav = () => {
    setactivestate(4);
    console.log(activestate);
    navigate("/Connectedphones");
  };
  const lockednav = () => {
    setactivestate(5);
    console.log(activestate);
    navigate("/Lockedapps");
  };
  const notificationnav = () => {
    setactivestate(6);
    console.log(activestate);
    navigate("/Notification");
  };
  const setopen = () => {
    setOpen(!open);
  };

  // const router = useRouter();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer className="drawer" variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={activestate === 1 && {backgroundColor: '#1886f4',borderRadius:'50px', display: "block" }} onClick={homenav}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx = {activestate === 2 && {backgroundColor: '#1886f4',borderRadius:'50px', display: "block" }}
            onClick={screenshotsnav}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ImageIcon />
              </ListItemIcon>
              <ListItemText
                primary="Screenshots"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx = {activestate === 6 && {backgroundColor: '#1886f4',borderRadius:'50px', display: "block" }}
            onClick={notificationnav}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* <ImageIcon /> */}
                <CircleNotificationsIcon/>
              </ListItemIcon>
              <ListItemText
                primary="Notification"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={activestate === 3 && {backgroundColor: '#1886f4',borderRadius:'50px', display: "block" }} onClick={settingsnav}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="Apps" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={activestate === 4 && {backgroundColor: '#1886f4',borderRadius:'50px', display: "block" }}
            onClick={connectednav}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <CableIcon />
              </ListItemIcon>
              <ListItemText
                primary="Connected Phones"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={activestate === 5 && {backgroundColor: '#1886f4',borderRadius:'50px', display: "block" }}
            onClick={lockednav}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LockIcon />
              </ListItemIcon>
              <ListItemText
                primary="Locked Apps"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
