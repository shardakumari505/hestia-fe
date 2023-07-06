import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import HubIcon from '@mui/icons-material/Hub';
import MenuIcon from '@mui/icons-material/Menu';
import FiberNewIcon from '@mui/icons-material/FiberNew';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [open, setOpen] = React.useState(false);

  const handleItemClick = (link) => {
    window.location.href = link; // Redirect to the specified link
    setOpen(false); // Close the drawer
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon />, link: '/' },
          { text: 'Onboarding', icon: <FiberNewIcon />, link: '/onboarding' },
          { text: 'Fleets', icon: <DeviceHubIcon />, link: '/fleet' },
          { text: 'Clusters', icon: <HubIcon />, link: '/cluster' },
          { text: 'Operators', icon: <PeopleIcon />, link: '/cluster' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link} onClick={() => handleItemClick(item.link)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ fontSize: "5vh" }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{ backgroundColor: 'rgb(232, 232, 232)' }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
