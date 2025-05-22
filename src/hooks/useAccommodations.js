import React, {useCallback, useEffect, useState} from 'react';
import accommodationsRepository from "../repository/accommodationsRepository.js";
const initialState = {
    "accommodations": [],
    "loading": true,
};


const UseAccommodations = () => {
    const [accommodations, setAccommodations] = useState(initialState);

    const fetchAccommodations =  useCallback(() => {
        setAccommodations(initialState);

        accommodationsRepository.findAll()
            .then((data) => {
                setAccommodations({
                    "accommodations": data.data,
                    "loading": false,
                });
            })
            .catch((err) => {console.log(err)});
    },[]);
    const onAdd = useCallback((data) => {
        accommodationsRepository.addAccommodation(data)
            .then(() => {
                console.log("Successfully added a new accommodatin.");
                fetchAccommodations();
            })
            .catch((error) => console.log(error));
    },[fetchAccommodations]);
    const onEdit = useCallback((id,data) => {
        accommodationsRepository.editById(id,data)
            .then(() => {
                console.log("Successfully edited a new accommodatin.");
                fetchAccommodations();
            })
            .catch((error) => console.log(error));
    },[fetchAccommodations]);
    const onDelete = useCallback((id) => {
        accommodationsRepository.deleteById(id)
            .then(() => {
                console.log("Successfully delet a new accommodatin.");
                fetchAccommodations();
            })
            .catch((error) => console.log(error));
    },[fetchAccommodations]);

    useEffect(() => {
        fetchAccommodations();
    }, [fetchAccommodations]);
    return {...accommodations, onAdd, fetchAccommodations,onEdit,onDelete};
};

export default UseAccommodations;