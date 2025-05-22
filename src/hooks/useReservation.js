import React, {useCallback, useState} from 'react';
import accommodationsRepository from "../repository/accommodationsRepository.js";
import reservationRepository from "../repository/reservationRepository.js";
const initialState = {
    "reservation": [],
    "loading": true,
};
const UseReservation = () => {
    const [state, setState] = useState(initialState);

    const fetchReservation =  useCallback(() => {
        setState(initialState);
        reservationRepository.findAll()
            .then((data) => {
                setState({
                    "reservation": data.data,
                    "loading": false,
                });
            })
            .catch((err) => {console.log(err)});
    },[]);

    const onAdd = useCallback((data) => {
        reservationRepository.AddTemporary(data)
            .then(() => {
                console.log("Successfully added a new accommodatin.");
                fetchReservation();
            })
            .catch((error) => console.log(error));
    },[fetchReservation]);

    return {...state,fetchReservation,onAdd};
};

export default UseReservation;