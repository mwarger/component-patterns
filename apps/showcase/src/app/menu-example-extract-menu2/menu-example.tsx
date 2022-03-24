import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function MenuExample() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MenuWithIconButton
              handleOpen={handleOpenNavMenu}
              handleClose={handleCloseNavMenu}
              anchorEl={anchorElNav}
              menuOptions={pages}
              IconElement={<MenuIcon />}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MenuWithIconButton
              handleOpen={handleOpenUserMenu}
              handleClose={handleCloseUserMenu}
              anchorEl={anchorElUser}
              menuOptions={settings}
              IconElement={
                <Avatar src="https://www.placecage.com/100/100" alt="avatar" />
              }
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function MenuWithIconButton({
  handleOpen,
  handleClose,
  anchorEl,
  menuOptions,
  IconElement,
  IconButtonProps,
  MenuProps,
}: {
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  menuOptions: string[];
  IconElement: React.ReactNode;
  IconButtonProps?: IconButtonProps;
  MenuProps?: MenuProps;
}) {
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{ p: 0 }}
        color="inherit"
        {...IconButtonProps}
      >
        {IconElement}
      </IconButton>
      <Menu
        sx={{ mt: '45px', ...MenuProps?.sx }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          ...MenuProps?.anchorOrigin,
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
          ...MenuProps?.transformOrigin,
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...MenuProps}
      >
        {menuOptions.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            <Typography textAlign="center">{option}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
