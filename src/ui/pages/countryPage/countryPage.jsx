// CountryPage.jsx
import React, {useEffect, useState} from 'react';
import useCountry from "../../../hooks/useCountry.js";
import CountryGrid from "../../components/country/countryGrid.jsx";
import AddCountry from "../../components/country/addCountry.jsx";
import {Box, Button, CircularProgress} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CountryPage = () => {
    const navigate = useNavigate();
    const {country ,fetchCountry ,onAdd} = useCountry();
    const [addCountryDialogOpen, setAddCountryDialogOpen]=useState(false);

    useEffect(() => {
        fetchCountry();
    }, [fetchCountry]);

    return (
        <>
            <Button color="primary" onClick={() => navigate("/")}>
                Back
            </Button>

            <Box className="products-box">
                <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                    <Button color="primary" onClick={() => setAddCountryDialogOpen(true)}>
                        Add Country
                    </Button>
                </Box>


                <CountryGrid countrys={country} />
            </Box>
            <AddCountry open={addCountryDialogOpen}
                        onClose={() => setAddCountryDialogOpen(false)}
                        onAdd={onAdd}/>
        </>


    );
};

export default CountryPage;
