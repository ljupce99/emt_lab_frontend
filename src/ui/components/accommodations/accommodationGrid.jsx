import React from 'react';
import {Grid} from "@mui/material";
import AccommodationCard from "./accommodationCard.jsx";

const AccommodationGrid = ({accommodations,onEdit,onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {accommodations.map((accom) => (
                <Grid key={accom.id} >
                    <AccommodationCard accommodation={accom} onEdit={onEdit} onDelete={onDelete} />
                </Grid>
            ))}
        </Grid>
    );
};

export default AccommodationGrid;