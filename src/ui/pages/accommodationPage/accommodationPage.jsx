import React, {useEffect, useState} from 'react';
import AccommodationGrid from "../../components/accommodations/accommodationGrid.jsx";
import UseAccommodations from "../../../hooks/useAccommodations.js";
import {Box, Button, CircularProgress} from "@mui/material";
import AddAccommodation from "../../components/accommodations/addAccommodation.jsx";
import { useNavigate } from "react-router-dom";


const AccommodationPage = () => {
    const {accommodations,loading, onAdd, fetchAccommodations,onEdit,onDelete} = UseAccommodations();
    const [addAccommodationDialogOpen, setAddAccommodationDialogOpen]=useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAccommodations();
    },[fetchAccommodations]);


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
                    <Box>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button color="primary" onClick={() => setAddAccommodationDialogOpen(true)}>
                                Add Accommodation
                            </Button>
                        </Box>
                        <AccommodationGrid accommodations={accommodations} onEdit={onEdit} onDelete={onDelete} />
                    </Box>
                    <AddAccommodation open={addAccommodationDialogOpen}
                                      onClose={() => setAddAccommodationDialogOpen(false)}
                                      onAdd={onAdd}/>

                </>
            }
        </>



    );
};

export default AccommodationPage;