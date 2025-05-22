import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const CountryCard = ({country}) => {
    return (
        <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
            <CardContent>
                <Typography variant="h5">{country.name}</Typography>
                <Typography variant="body1" sx={{textAlign: "right"}}>
                    {country.continent}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CountryCard;
