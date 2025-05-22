import React, {useEffect, useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import CountryGrid from "../../components/country/countryGrid.jsx";
import AddCountry from "../../components/country/addCountry.jsx";
import {useNavigate} from "react-router-dom";
import useCountry from "../../../hooks/useCountry.js";
import useReservation from "../../../hooks/useReservation.js";
import AddReservation from "../../components/reservation/addReservation.jsx";
import ReservationGrid from "../../components/reservation/reservationGrid.jsx";
import AccommodationGrid from "../../components/accommodations/accommodationGrid.jsx";
import AddAccommodation from "../../components/accommodations/addAccommodation.jsx";

const ReservationPage = () => {
    const navigate = useNavigate();
    const {reservation,loading,fetchReservation,onAdd} = useReservation();
    const [addDialogOpen, setDialogOpen]=useState(false);

    useEffect(() => {
        fetchReservation();
    }, [fetchReservation]);

    return (
        <>
            {loading && (
                <Box className="progress-box">
                    <CircularProgress/>
                </Box>
            )}
            {!loading &&
                <>
                    <Button color="primary" onClick={() => navigate("/")}>
                        Back
                    </Button>

                    <Box className="products-box">
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button color="primary" onClick={() => setDialogOpen(true)}>
                                Add Reservation
                            </Button>
                        </Box>


                        <ReservationGrid reservations={reservation} />
                    </Box>
                    <AddReservation open={addDialogOpen}
                                    onClose={() => setDialogOpen(false)}
                                    onAdd={onAdd}/>
                </>
            }
        </>






    );
};

export default ReservationPage;