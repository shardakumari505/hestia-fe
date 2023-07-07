import React, { useState, setState } from "react";
import './fleet-screen.scss';
import { experimentalStyled as styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { TextField, Button, Box, Paper } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Draggable from "react-draggable";

const ClusterContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    draggable: true,
}));

const Cluster = ({ id, name, onDragStart }) => {
    return (
        <ClusterContainer className="cluster" draggable onDragStart={(e) => onDragStart(e, id)}>
            {name}
        </ClusterContainer>
    );
};

const FleetScreen = () => {
    const [fleetName, setFleetName] = useState("")
    const [department, setDepartment] = useState("")
    const [fleetNameError, setFleetNameError] = useState(false)
    const [departmentError, setDepartmentError] = useState(false)
    const [clusters, setClusters] = useState([
        { id: 1, name: "Cluster Name 031" },
        { id: 2, name: "Cluster Name 032" },
        { id: 3, name: "Cluster Name 033" },
        { id: 4, name: "Cluster Name 034" },
        { id: 5, name: "Cluster Name 035" }
    ]);

    const [droppedItems, setDroppedItems] = useState([]);

    const handleDragStart = (event, itemId) => {
        console.log("drag start");
        event.dataTransfer.setData("text/plain", itemId);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const itemId = event.dataTransfer.getData("text/plain");
        const droppedCluster = clusters.find((cluster) => cluster.id.toString() === itemId);

        if (droppedCluster) {
            setDroppedItems((prevItems) => [...prevItems, droppedCluster]);
            setClusters((prevClusters) => prevClusters.filter((cluster) => cluster.id.toString() !== itemId));
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };

    const handleDragEnter = (event) => {
        event.preventDefault();
        event.target.classList.add("drag-over");
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.target.classList.remove("drag-over");
    };

    return (
        <div
            className="drop-container"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
        >
            <Box component="main" sx={{ flexGrow: 1, p: 1 }}>

                <Stack direction="row" style={{width:"99%",paddingLeft:"10px", display:"flex", justifyContent:"space-between"}}>
                    <div style={{display:"flex"}} >
                    <Typography variant="h6" noWrap component="div">
                        Fleet Details - props.fleetName-0
                    </Typography>
                    <Button style={{marginLeft:"20px"}} variant="outlined" color="primary" type="submit" align="center" startIcon={<CancelIcon />}>Cancel</Button>
                    </div>
                    <div>
                    <Button variant="contained" color="primary" type="submit" align="center" startIcon={<SaveIcon />} > Save</Button>
                    </div>
                </Stack>
                <br />

                <Grid container spacing={2}>
                    <Paper elevation={2} sx={{ width: '70%', mb: 2 }}>
                        <Box component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '45ch' }, width: '100%',display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
                            <div style={{ display: "flex",alignItems:"flex-start" }} className="">
                                <TextField
                                    label="Fleet Name"
                                    onChange={e => setFleetName(e.target.value)}
                                    required
                                    variant="outlined"
                                    color="secondary"
                                    type="fleetName"
                                    sx={{ mb: 3 }}
                                    //fullWidth
                                    value={fleetName}
                                    error={fleetNameError}
                                />
                                <TextField
                                    label="Department "
                                    onChange={e => setDepartment(e.target.value)}
                                    required
                                    variant="outlined"
                                    color="secondary"
                                    type="department"
                                    value={department}
                                    error={departmentError}
                                    //fullWidth
                                    sx={{ mb: 3 }}
                                />
                            </div>
                            <div style={{width:"100%", display: "flex", alignItems: "flex-start" }} className="">
                                <TextField
                                    id="outlined-multiline-static"
                                    onChange={e => setDepartment(e.target.value)}
                                    label="Notes"
                                    style={{marginLeft:"25px"}}
                                    multiline
                                />
                            </div>

                            <br />

                            <Paper elevation={2} sx={{ minHeight:"20vh",width: '95%', mb: 3, display:"flex",flexDirection:"column",alignItems:"center" }}>
                                CLUSTERS
                                <Grid style={{display:"flex", flexWrap:"wrap",gap:"10px",width:"95%", padding:"5px"}} item>
                                    {droppedItems.map((item, index) => (
                                        <ClusterContainer key={index}>{item.name}</ClusterContainer>
                                    ))}
                                </Grid>
                            </Paper>
                        </Box>
                    </Paper>
                    <Paper elevation={2} sx={{ width: '30%', mb: 2 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <br />
                            <Grid style={{width:"100%",display:"flex",alignItems:"center"}} container >
                                {clusters.map((cluster) => (
                                    <Grid item xs={2} sm={4} md={4} style={{padding:"5px"}}>
                                        <Cluster
                                            key={cluster.id}
                                            id={cluster.id.toString()}
                                            name={cluster.name}
                                            onDragStart={handleDragStart}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Box>
        </div>
    );
};

export default FleetScreen;
