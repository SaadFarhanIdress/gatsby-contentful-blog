import * as React from 'react';
import * as routes from '../constants';

import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'gatsby';

const linkStyles: React.CSSProperties = {
    textDecoration: 'none',
    color: 'white'
};

interface AppBarProps {
    children: React.ReactNode;
}

const NavBar: React.FC<AppBarProps> = ({ children }) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#7b68ee'
            },
            secondary: {
                light: '#0066ff',
                main: '#0044ff',
                contrastText: '#ffcc00',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        }
    });

    return (<ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Blog
                    </Typography>
                    <Button color='inherit'><Link to={routes.HOME} style={linkStyles}>Home</Link></Button>
                    <Button color='inherit'><Link to={routes.POSTS} style={linkStyles}>Posts</Link></Button>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    </ThemeProvider>);
};

export default NavBar;