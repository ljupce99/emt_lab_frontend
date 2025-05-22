import React,{useState} from 'react';
import {Card,Button, CardActions, CardContent, Typography,Box} from "@mui/material";
import EditAccommodationDialog from "./editAccommodationDialog.jsx";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


import {data} from "react-router";
import DeleteAccommodation from "./deleteAccommodation.jsx";

const AccommodationCard = ({accommodation,onEdit,onDelete}) => {
    const [editAccommodationDialogOpen, setEditAccommodationDialogOpen] = useState(false);
    const [deleteAccommodationDialogOpen, setDeleteAccommodationDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{accommodation.name}</Typography>
                    <Typography variant="body1" sx={{textAlign: "right"}}>
                        {accommodation.category}
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: "right"}}>
                        {accommodation.hostName}
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: "right"}}>
                        {accommodation.numRooms}
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: "right"}}>
                        {accommodation.iznajmeno}
                    </Typography>
                </CardContent>
                <CardActions>

                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setEditAccommodationDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteAccommodationDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>


                </CardActions>
            </Card>

            <EditAccommodationDialog
            open={editAccommodationDialogOpen}
            onClose={() => setEditAccommodationDialogOpen(false)}
            onEdit={(id,data) => {
                onEdit(id,data);
                setEditAccommodationDialogOpen(false);
            }}
            accommodation={accommodation}
            />
            <DeleteAccommodation
            open={deleteAccommodationDialogOpen}
            onClose={() => setDeleteAccommodationDialogOpen(false)}
            onDelete={(id) => {
                onDelete(id);
                setDeleteAccommodationDialogOpen(false);
            }}
            accommodation={accommodation}
            />

        </>
    );
};

export default AccommodationCard;