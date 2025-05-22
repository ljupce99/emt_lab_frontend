import React, {useEffect, useState} from 'react';
import useCountry from "../../../hooks/useCountry.js";
import useHost from "../../../hooks/useHost.js";
import HostGrid from "../../components/host/hostGrid.jsx";
import {Box, Button} from "@mui/material";
import AddHost from "../../components/host/addHost.jsx";
import { useNavigate } from "react-router-dom";
const HostPage = () => {
    const {host,fetchHosty,onAdd} = useHost();
    const [addHostDialogOpen, setAddHostDialogOpen]=useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchHosty();
    })
    return (
       <>
           <Button color="primary" onClick={() => navigate("/")}>
               Back
           </Button>

           <Box>
               <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                   <Button color="primary" onClick={() => setAddHostDialogOpen(true)}>
                       Add Host
                   </Button>
               </Box>

               <HostGrid hosts={host}></HostGrid>
           </Box>
           <AddHost open={addHostDialogOpen}
                    onClose={() => setAddHostDialogOpen(false)}
                    onAdd={onAdd}/>
       </>
    );
};

export default HostPage;