import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const OnboardingPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Typography variant="h6" sx={{ margin: "auto", padding: "20px" }} noWrap component="div">
                Onboard a workplace or workload
            </Typography>
            <div style={{width:"70vw",display:"flex",justifyContent:"space-between", margin:"50px"}} className=''>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
            {submitted && (
                <Box sx={{ border: "1px solid gray", borderRadius: "5px", height: "60vh", width: "40vw", textAlign: "left", justifyContent: "center"}}>
                    <p>Your name: {name}</p>
                </Box>
            )}
            </div>
        </div>
    );
};

export default OnboardingPage;