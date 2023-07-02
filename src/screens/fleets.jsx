import React, { useState, useEffect } from 'react';
import './fleets.scss'
import Box from '@mui/material/Box';
import DataTable from '../components/DataTable'


function createData(name, clusters, nodes, cpus, memory) {
    return {
        name,
        clusters,
        nodes,
        cpus,
        memory,
    };
}

const rows = [
    createData('Pampers-Munich-DEP0-Fleet-0', 5, 30, 100, 4000),
    createData('Pampers-Munich-DEP0-Fleet-1', 6, 30, 90, 2000),
    createData('Pampers-Munich-DEP1-Fleet-0', 6, 30, 90, 3000),
    createData('Pampers-Munich-DEP1-Fleet-Prod-01', 6, 30, 90, 9000),
    createData('Pampers-Munich-DEP1-Fleet-Prod-02', 6, 30, 90, 3200),
    createData('OralB-Amsterdam-DEP1-Fleet-Prod-01', 6, 30, 90, 3300),
    createData('OralB-Amsterdam-DEP1-Fleet-Prod-02', 6, 30, 90, 10000),
    createData('Gillette-Mumbai-DEP07-Fleet-Prod-01', 6, 30, 90, 4000),
    createData('Gillette-Mumbai-DEP07-Fleet-Prod-02', 6, 30, 90, 4000),
    createData('Gillette-Mumbai-DEP07-Fleet-Prod-03', 6, 30, 90, 4000),
    createData('Pantene-Bangalore-DEP05-Fleet-Prod-01', 6, 30, 90, 4000),
    createData('Pantene-Delhi-DEP05-Fleet-Prod-01', 6, 30, 90, 4000),
    createData('Ariel-Bangalore-DEP04-Fleet-Prod-01', 6, 30, 90, 4000),
    createData('Colgate-Bangalore-DEP03-Fleet-Prod-01', 6, 30, 90, 4000),
    createData('Colgate-Mumbai-DEP03-Fleet-Prod-02', 6, 30, 90, 4000),
];

const headerCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Fleet Name',
    },
    {
        id: 'clusters',
        numeric: true,
        disablePadding: false,
        label: 'Cluster(s)',
    },
    {
        id: 'nodes',
        numeric: true,
        disablePadding: false,
        label: 'Nodes',
    },
    {
        id: 'cpus',
        numeric: true,
        disablePadding: false,
        label: 'CPU(s)',
    },
    {
        id: 'memory',
        numeric: true,
        disablePadding: false,
        label: 'Memory',
    },
];

export default function Fleets(props) {


    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (

        <div className='fleets-container'>
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DataTable title="Fleets" dataSource={rows} headerCells={headerCells} target="/fleetscreen"/>
                </Box>
                
            </Box>
        </div>
    )
}
