"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Person, Search, Menu } from "@mui/icons-material";
import Image from "next/image";
import { Inter } from "next/font/google";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const inter = Inter({ subsets: ["latin"] });

const buttonStyle = {
    fontFamily: inter.style.fontFamily,
    fontSize: "12px",
    fontWeight: 400,
    color: "#000000",
};

const searchIconStyle = {
    background: "#2EC89C",
    width: "36px",
    height: "36px",
};

const Navbar: React.FC = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {["Home", "Undergraduate", "Graduate", "Short Course", "Hostels", "Internships-Jobs"].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#EDEDED" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Image width={40} height={40} alt="logo" src={"/static/images/logo.png"} />
                    </IconButton>

                    {isMobile ? (
                        <>
                            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                <Menu />
                            </IconButton>
                            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                                {drawerContent}
                            </Drawer>
                        </>
                    ) : isTablet ? (
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <Button sx={buttonStyle} color="inherit">
                                Home
                            </Button>
                            <Button sx={buttonStyle} color="inherit">
                                Undergraduate
                            </Button>
                            <Button sx={buttonStyle} color="inherit">
                                Graduate
                            </Button>
                            <Button sx={buttonStyle} color="inherit">
                                Short Course
                            </Button>
                            <Button sx={buttonStyle} color="inherit">
                                Hostels
                            </Button>
                            <IconButton color="inherit">
                                <Search sx={searchIconStyle} />
                            </IconButton>
                            <Button sx={buttonStyle} color="inherit" startIcon={<Person />}>
                                Sign In
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <Button sx={buttonStyle} color="inherit">
                                Home
                            </Button>
                            <Button sx={buttonStyle} color="inherit">
                                Undergraduate
                            </Button>
                            <Button sx={buttonStyle} color="inherit">
                                Graduate
                            </Button>
                            <Button sx={buttonStyle} color="inherit">
                                Short Course
                            </Button>
                            <Button sx={buttonStyle} color="inherit">
                                Hostels
                            </Button>
                            <Button sx={buttonStyle} color="inherit">
                                Internships-Jobs
                            </Button>
                            <IconButton color="inherit">
                                <Search sx={searchIconStyle} />
                            </IconButton>
                            <Button sx={buttonStyle} color="inherit" startIcon={<Person />}>
                                Sign In
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
