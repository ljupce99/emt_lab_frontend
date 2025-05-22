import React from 'react';
import axiosInstance from "../axios/axios.js";
const HostRepository =  {
    findAll: async () => {
        return await axiosInstance.get("/host/list");
    },
    addHost: async (data) => {
        return await axiosInstance.post("/host/add", data);
    },
    findById: async (id) => {
        return await axiosInstance.get(`/host/${id}`);
    },
};

export default HostRepository;