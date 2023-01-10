import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import "./NavBar.css"

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky">
            <Container className='colorNavBar' maxWidth="">
                <Toolbar disableGutters>
                    <Logo />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="red"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "darkgray" }} to={'/'}>Inicio</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link  style={{ textDecoration: "none", color: "darkgray" }} to={'/categoria/equipos'}>Equipos</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "darkgray" }} to={'/categoria/liquidos'}>Liquidos</Link></Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "white" }} to={"/"}>Inicio</Link></Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "white" }} to={'/categoria/equipos'}>Equipos</Link></Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "white" }} to={'/categoria/liquidos'}>Liquidos</Link></Typography>
                        </MenuItem>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Tu carrito">
                            <IconButton sx={{ p: 0 }}>
                                <ShoppingCart /> 0
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header; 