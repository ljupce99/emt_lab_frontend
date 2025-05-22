import React from 'react';
import {Grid} from "@mui/material";
import CountryCard from "../country/countryCard.jsx";
import HostCard from "./hostCard.jsx";

const HostGrid = ({hosts}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {hosts.map((ho) => (
                <Grid key={ho.id} >
                    <HostCard host={ho} />
                </Grid>
            ))}
        </Grid>
    );
};

export default HostGrid;