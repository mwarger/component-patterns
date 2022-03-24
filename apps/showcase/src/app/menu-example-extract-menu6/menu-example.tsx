import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function MenuExample() {
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
            <MenuWithIconButton IconElement={<MenuIcon />}>
              {(toggleMenu, anchorEl) => (
                <Menu
                  sx={{ mt: 5 }}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={toggleMenu}
                >
                  {pages.map((option) => (
                    <MenuItem key={option} onClick={toggleMenu}>
                      <Typography textAlign="center">{option}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </MenuWithIconButton>
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
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MenuWithIconButton
              IconElement={
                <Avatar src="https://www.placecage.com/100/100" alt="avatar" />
              }
            >
              {(toggleMenu, anchorEl) => (
                <Menu
                  sx={{ mt: 5 }}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={toggleMenu}
                >
                  {settings.map((option) => (
                    <MenuItem key={option} onClick={toggleMenu}>
                      <Typography textAlign="center">{option}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </MenuWithIconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function useToggleMenu() {
  const [anchorEl, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav((el) => (el ? null : event.currentTarget));
  };

  return { toggleMenu, anchorEl };
}

function MenuWithIconButton({
  IconElement,
  children,
}: {
  IconElement: React.ReactNode;
  children: (
    toggleMenu: (event: React.MouseEvent<HTMLElement>) => void,
    anchorEl: null | HTMLElement
  ) => React.ReactNode;
}) {
  const { toggleMenu, anchorEl } = useToggleMenu();

  return (
    <>
      <IconButton onClick={toggleMenu} sx={{ p: 0 }} color="inherit">
        {IconElement}
      </IconButton>
      {children(toggleMenu, anchorEl)}
    </>
  );
}
