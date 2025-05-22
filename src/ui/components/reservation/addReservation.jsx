import React, {useState} from 'react';
import {
    Button, Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import useAccommodations from "../../../hooks/useAccommodations.js";
const initialFormData={
    "name": "",
    "oddatum": "",
    "dodatum": "",
    "smesteni": "",
    "smestuvanjeId": "",
    "user": ""
};

const AddReservation = ({open, onClose, onAdd}) => {
    const [formData, setFormData] = useState(initialFormData);
    const smes=useAccommodations().accommodations
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        onAdd(formData);
        setFormData(initialFormData);
        onClose();
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Host</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                od datum
                <TextField
                    margin="dense"
                    name="oddatum"
                    type="date"
                    value={formData.oddatum}
                    onChange={handleChange}
                    fullWidth
                />
                do datum
                <TextField
                    margin="dense"
                    name="dodatum"
                    type="date"
                    value={formData.dodatum}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="smesteni"
                    name="smesteni"
                    type="number"
                    value={formData.smesteni}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>smestuvanje</InputLabel>
                    <Select
                        name="smestuvanjeId"
                        value={formData.smestuvanjeId}
                        onChange={handleChange}
                        label="smestuvanje "
                        variant="outlined">
                        {smes.map((category) => (
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddReservation;