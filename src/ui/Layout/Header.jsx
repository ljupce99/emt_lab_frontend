import React from 'react';
import {Link} from "react-router";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import {useNavigate} from "react-router-dom";

const pages = [
    {"path": "/", "name": "home"},
    {"path": "/country", "name": "country"},
    {"path": "/host", "name": "host"},
    {"path": "/accommodation", "name": "accommodation"},
    {"path": "/reservation", "name": "reservation"},

];

const Header = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{mr: 3}}>
                        Accommodation-Shop
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        {pages.map((page) => (
                            <Link key={page.name} to={page.path}>
                                <Button
                                    sx={{my: 2, color: "white", display: "block", textDecoration: "none"}}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Button color="primary" onClick={() => navigate("/country")}>
                        Country
                    </Button>
                    <Button color="primary" onClick={() => navigate("/host")}>
                        Host
                    </Button>
                    <Button color="primary" onClick={() => navigate("/accommodation")}>
                        Accommodation
                    </Button>
                    <Button color="primary" onClick={() => navigate("/reservation")}>
                        Reservation
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;