import React from 'react';
import {Box, Container} from "@mui/material";
import {Outlet} from "react-router";
import Header from "./Header.jsx";

const Layout = () => {
    return (
        <Box className="layout-box">
            <Header/>
            <Container className="outlet-container" sx={{my: 2}} maxWidth="xl">
                <Outlet/>
            </Container>
        </Box>
    );
};

export default Layout;