import React from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";



const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{m:0, p:0}}>
                <Container maxWidth="xl" sx={{mt:3, py: 3}}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to Accommodation-Shop App! 👋
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                        Treba da ima nesto

                    </Typography>
                </Container>
                <Button color="primary" onClick={() => navigate("/reservation")}>
                    Reservation
                </Button>
            </Box>


        </>
    );
};

export default HomePage;