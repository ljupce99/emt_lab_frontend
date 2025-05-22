import React from 'react';
import axiosInstance from "../axios/axios.js";


const AccommodationsRepository =  {
    allHostInContry: async () => {
        return await axiosInstance.get("/accommodations/by-host");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/accommodations/${id}`);
    },
    findAll: async () => {
        return await axiosInstance.get("/accommodations/list");
    },
    addAccommodation: async (data) => {
        return await axiosInstance.post("/accommodations/add",data);
    },
    deleteById: async (id) => {
        return await axiosInstance.delete(`/accommodations/delete/${id}`);
    },
    editById: async (id,data) => {
        return await axiosInstance.put(`/accommodations/edit/${id}`,data);
    },
    Statistic: async () => {
        return await axiosInstance.get("/accommodations/stac");
    },
};
export default AccommodationsRepository;