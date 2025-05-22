import React from 'react';
import axiosInstance from "../axios/axios.js";

const ContinentRepository = {
    findAll: async () => {
        return await axiosInstance.get("/country/list");
    },
    addContinent: async (data) => {
        return await axiosInstance.post("/country/add",data);
    }
};


export default ContinentRepository;