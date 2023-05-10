import {Link} from 'react-router-dom' 
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import Box from '@mui/material/Box';
import './Header.css'

const styles = {
    flex: {
      flex: 1,
    },
  };

export const Header = () => {
    return (<Box sx={styles.flex}>
        <AppBar>
                <Toolbar>
                <TimeToLeaveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    ROAR
                </Typography>
                <Link color="info" variant="plain" level="h3" to="/">Home</Link>
                <Link color="info" variant="plain" level="h3" to="/bikes">Bikes</Link>
                <Link color="info" variant="plain" level="h3" to="/cars">Cars</Link>
                </Toolbar>
            </AppBar>
            </Box>
            );
}