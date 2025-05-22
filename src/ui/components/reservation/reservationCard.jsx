import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const ReservationCard = ({reservation}) => {
    return (
        <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
            <CardContent>
                <Typography variant="h5">{reservation.name}</Typography>
                <Typography variant="body1" sx={{textAlign: "right"}}>
                    {reservation.oddatum}
                </Typography>
                <Typography variant="body1" sx={{textAlign: "right"}}>
                    {reservation.dodatum}
                </Typography>
                <Typography variant="body1" sx={{textAlign: "right"}}>
                    {reservation.smesteni}
                </Typography>
                <Typography variant="body1" sx={{textAlign: "right"}}>
                    {reservation.smestuvanjeName}
                </Typography>
                <Typography variant="body1" sx={{textAlign: "right"}}>
                    {reservation.user}
                </Typography>
                <Typography variant="body1" sx={{textAlign: "right"}}>
                    {reservation.confirmed}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ReservationCard;