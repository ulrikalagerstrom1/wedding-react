import React from 'react';
import {AppBar, Box, Button, Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{justifyContent: 'center'}}>
                <Box sx={{display: 'flex', justifyContent: 'center', gap: 3}}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/question-and-answers">Q&A</Button>
                    <Button color="inherit" component={Link}
                            to="/accommodation">Accommodation</Button>
                    <Button color="inherit" component={Link} to="/rsvp">RSVP</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
