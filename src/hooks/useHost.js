import React, {useCallback, useEffect, useState} from 'react';
import hostRepository from "../repository/hostRepository.js";

const UseHost = () => {
    const [host, setHost] = useState([]);

    const fetchHosty =  useCallback(() => {
        hostRepository.findAll()
            .then((data) => {
                setHost(data.data);
            })
            .catch((err) => {console.log(err)});
    },[]);
    const onAdd = useCallback((data) => {
        hostRepository.addHost(data)
            .then(() => {
                console.log("Successfully added a new product.");
                fetchHosty();
            })
            .catch((error) => console.log(error));
    },[fetchHosty]);

    useEffect(() => {
        fetchHosty();
    }, [fetchHosty]);
    return {host,fetchHosty,onAdd};
};

export default UseHost;