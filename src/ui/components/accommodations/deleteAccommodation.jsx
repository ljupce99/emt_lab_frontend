import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle

} from "@mui/material";



const DeleteAccommodation = ({open, onClose, onDelete,accommodation}) => {


    const handleSubmit = () => {
        onDelete(accommodation.id);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete Accommodation</DialogTitle>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Delete</Button>
            </DialogActions>
        </Dialog>

    );
};

export default DeleteAccommodation;