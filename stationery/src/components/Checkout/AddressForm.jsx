import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MapComponent from './MapComponent';

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom sx={{ p: { xs: 2, md: 3 } }}>
                Phone Number
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="PhoneNumber"
                        name="Phone Number"
                        label="Phone Number"
                        fullWidth
                        autoComplete="given-name"
                        variant="filled"
                    />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    // variant="standard"
                    />
                </Grid> */}
                {/* <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                    // variant="standard"
                    />
                </Grid> */}
                {/* <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    // variant="standard"
                    />
                </Grid> */}
                
            </Grid>
            <Typography variant="h6" gutterBottom sx={{ p: { xs: 2, md: 3 } }}>
                Drop your Location
            </Typography>
            <MapComponent />
        </React.Fragment>
    );
}