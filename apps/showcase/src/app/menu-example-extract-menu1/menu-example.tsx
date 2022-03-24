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
              useMenuIcon={true}
              // avatarProps={{
              //   src: 'https://www.placecage.com/100/100',
              //   alt: 'avatar',
              // }}
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
              useMenuIcon={false}
              avatarProps={{
                src: 'https://www.placecage.com/100/100',
                alt: 'avatar',
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

type IconAvatarProps =
  | {
      useMenuIcon: true;
    }
  | {
      useMenuIcon: false;
      avatarProps: {
        src: string;
        alt: string;
      };
    };

type MenuIconProps = {
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
} & {
  menuOptions: string[];
} & IconAvatarProps;

function MenuWithIconButton(props: MenuIconProps) {
  const { handleOpen, handleClose, anchorEl, menuOptions, useMenuIcon } = props;

  const buttonElement = useMenuIcon ? (
    <MenuIcon />
  ) : (
    <Avatar alt={props.avatarProps.alt} src={props.avatarProps.src} />
  );

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ p: 0 }} color="inherit">
        {buttonElement}
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
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
        onClose={handleClose}
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
