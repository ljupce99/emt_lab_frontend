import React, {useCallback, useEffect, useState} from 'react';
import continentRepository from "../repository/continentRepository.js";


const UseCountry = () => {
    const [country, setCountry] = useState([]);

    const fetchCountry =  useCallback(() => {
        continentRepository.findAll()
            .then((data) => {
                setCountry(data.data);
            })
            .catch((err) => {console.log(err)});
    }, []);

    const onAdd = useCallback((data) => {
        continentRepository
            .addContinent(data)
            .then(() => {
                console.log("Successfully added a new product.");
                fetchCountry();
            })
            .catch((error) => console.log(error));
    }, [fetchCountry]);
    useEffect(() => {
        fetchCountry();
    }, [fetchCountry]);
    return {country ,fetchCountry ,onAdd};
};

export default UseCountry; 