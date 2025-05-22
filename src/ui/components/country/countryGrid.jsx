import React from 'react';
import {Grid} from "@mui/material";
import CountryCard from "./CountryCard.jsx";

const CountryGrid = ({countrys}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {countrys.map((cou) => (
                <Grid key={cou.id}  >
                    <CountryCard country={cou} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CountryGrid;
