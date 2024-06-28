import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box mr={2}>
                    <Button color="inherit" component={Link} to="/create-survey">
                        Create Survey
                    </Button>
                </Box>
                <Box mr={2}>
                    <Button color="inherit" component={Link} to="/submit-survey">
                        Submit Survey
                    </Button>
                </Box>
                <Box mr={2}>
                    <Button color="inherit" component={Link} to="/survey-results">
                        Survey Results
                    </Button>
                </Box>
                <Button color="inherit" component={Link} to="/login">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;