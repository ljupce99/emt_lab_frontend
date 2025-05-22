import React from 'react';
import axiosInstance from "../axios/axios.js";

const ReservationRepository =  {
    AddTemporary: async (data) => {
        return await axiosInstance.post("/reservation/reservations",data);
    },
    GetTemporary: async () => {
        return await axiosInstance.get("/reservation/reservations/list");
    },
    ConfirmAll: async () => {
        return await axiosInstance.post("/reservation/reservations/confirm");
    },
    findAll: async () => {
        return await axiosInstance.get("/reservation/list");
    },
    deleteById: async (id) => {
        return await axiosInstance.delete(`/reservation/delete/${id}`);
    },
    editById: async (id,data) => {
        return await axiosInstance.post(`/reservation/edit/${id}`,data);
    },
};
export default ReservationRepository;