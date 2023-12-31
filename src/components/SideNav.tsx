import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountsIcon from '@mui/icons-material/AccountBox'; 
import PayrollIcon from '@mui/icons-material/AttachMoney'; 
import ReportsIcon from '@mui/icons-material/BarChart'; 
import AdvisorIcon from '@mui/icons-material/People'; 
import ContactsIcon from '@mui/icons-material/Contacts'; 

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const defaultBgColor = '#FFFFFF'; // This is the default background color for Dashboard
const otherBgColor = '#F0F0F0'; // This is the background color for other menu items


export default function SideNav(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const [bgColor, setBgColor] = useState(defaultBgColor);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
    setBgColor(item === 'Dashboard' ? defaultBgColor : otherBgColor);
  };

  const menuItems = [
    { text: 'Dashboard', Icon: DashboardIcon },
    { text: 'Accounts', Icon: AccountsIcon },
    { text: 'Payroll', Icon: PayrollIcon },
    { text: 'Reports', Icon: ReportsIcon },
    { text: 'Advisor', Icon: AdvisorIcon },
    { text: 'Contacts', Icon: ContactsIcon },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton onClick={() => handleMenuItemClick(item.text)}>
            <ListItemIcon>
              <item.Icon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              //paddingTop: '1000px'
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: { sm: `${drawerWidth}px` }, // This should push the main content to the right
        width: { sm: `calc(100% - ${drawerWidth}px)` }
     }}
      >
        <Toolbar />

      </Box>
    </Box>
  );
}