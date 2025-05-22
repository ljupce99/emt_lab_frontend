import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import useHost from "../../../hooks/useHost.js";



const EditAccommodationDialog = ({open, onClose, onEdit,accommodation}) => {
    const [formData, setFormData] = useState({
        name: accommodation?.name || '',
        categoryId: accommodation?.categoryId ?? '',
        hostId: accommodation?.hostId ?? '',
        numRooms: accommodation?.numRooms ?? 0
    });

    const hosts=useHost().host;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        onEdit(accommodation.id,formData);
        setFormData(initialFormData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Accommodation</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="numRooms"
                    name="numRooms"
                    type="number"
                    value={formData.numRooms}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Host</InputLabel>
                    <Select
                        name="hostId"
                        value={formData.hostId}
                        onChange={handleChange}
                        label="Host"
                        variant="outlined">
                        {hosts.map((category) => (
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="dense">
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="categoryId"
                        value={formData.categoryId}
                        onChange={handleChange}
                        label="Category"
                        variant="outlined">
                        <MenuItem key="0" value="0">ROOM</MenuItem>
                        <MenuItem key="1" value="1">HOUSE</MenuItem>
                        <MenuItem key="2" value="2">FLAT</MenuItem>
                        <MenuItem key="3" value="3">APARTMENT</MenuItem>
                        <MenuItem key="4" value="4">HOTEL</MenuItem>
                        <MenuItem key="5" value="5">MOTEL</MenuItem>

                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Edit</Button>
            </DialogActions>
        </Dialog>

    );
};

export default EditAccommodationDialog;


