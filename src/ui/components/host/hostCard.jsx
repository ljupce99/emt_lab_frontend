import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import CountryCard from "../country/countryCard.jsx";

const HostCard = ({host}) => {
    return (
        <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
            <CardContent>
                <Typography variant="h5">{host.name +' '+ host.surname}</Typography>
                <Typography variant="body1" sx={{textAlign: "right"}}>
                    {host.country}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default HostCard;