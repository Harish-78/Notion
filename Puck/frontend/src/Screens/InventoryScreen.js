import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";
import InventoryIcon from "@mui/icons-material/Inventory";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import EditIcon from "@mui/icons-material/Edit";
import PaidIcon from "@mui/icons-material/Paid";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: "#000", // Change primary color to black
    },
  },
});

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const list = [
  { name: "Inventory", icons: <InventoryIcon />, to: "/inventory" },
  {
    name: "Catalog",
    icons: <BookmarksIcon />,
    to: "/catalog",
  },
  {
    name: "Orders",
    icons: <EditIcon />,
    to: "/orders",
  },
  { name: "Funds", icons: <PaidIcon />, to: "/funds" },
];
const InventoryScreen = () => {
  const [componentName, setComponentName] = useState("");
  React.useEffect(() => {
    const Component = InventoryScreen.name || "UnknownComponent";
    setComponentName(Component);
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleOpenEditor = () => {
    navigate(`/editor?redirecturl=${window.location.pathname}`, {
      state: { data: componentName },
    });
  };

  const handleOpenViewer = () => {
    navigate(`/viewdraft`, { state: { data: componentName } });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Aroopa</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {list.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton LinkComponent={Link} to={text?.to}>
                  <ListItemIcon style={{ color: "black" }}>
                    {text.icons}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <div className=" flex justify-end m-3">
            <div className="m-2">
              <Button variant="contained" onClick={handleOpenEditor}>
                Add Wiki
              </Button>
            </div>
            <div className="m-2">
              <Button variant="contained" onClick={handleOpenViewer}>
                View Wiki
              </Button>
            </div>
          </div>
          <Typography variant="h5" textAlign={"center"}>
            InventoryScreen
          </Typography>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default InventoryScreen;
