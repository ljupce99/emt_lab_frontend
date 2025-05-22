import React from 'react';
import {Grid} from "@mui/material";
import ReservationCard from "./reservationCard.jsx";

const ReservationGrid = ({reservations}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {reservations.map((cou) => (
                <Grid key={cou.id}  >
                    <ReservationCard reservation={cou} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ReservationGrid;