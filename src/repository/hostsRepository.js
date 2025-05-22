import React from 'react';
import axiosInstance from "../axios/axios.js";

const HostsRepository =  {
    allbyCountry: async () => {
        return await axiosInstance.get("/hosts/by-country");
    },
    allHostNames: async () => {
        return await axiosInstance.get("/hosts/names");
    },

};

export default HostsRepository;