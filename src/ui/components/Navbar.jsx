"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import campusLogo from "../images/campus-logo.svg";
import { useThemeContext } from "@/ui/ThemeContext";
import { Switch, FormControlLabel } from "@mui/material";
import { WbSunny, NightsStay } from "@mui/icons-material";

const pages = ["Talleres", "Desafíos", "Proyectos"];
const settings = ["Profile", "Logout"];

export const Navbar = () => {
  const { isHighContrast, toggleHighContrast } = useThemeContext();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="white">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image src={campusLogo} alt="Logo Campus Yo Tambien!" />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              mr: 1,
              justifyContent: "center",
            }}
          >
            <Image src={campusLogo} alt="Logo Campus Yo Tambien!" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 5 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "primary", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Imagen avatar de usuario" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box textAlign="center" p={4}>
            <FormControlLabel
              control={
                <Switch
                  checked={isHighContrast}
                  onChange={toggleHighContrast}
                  color="primary"
                />
              }
              title={
                isHighContrast
                  ? "Activar modo normal"
                  : "Activar modo alto contraste"
              }
              label={
                isHighContrast ? (
                  <IconButton
                    color="default"
                    aria-label="Activar modo alto contraste"
                  >
                    <NightsStay aria-hidden="true" />
                  </IconButton>
                ) : (
                  <IconButton color="default" aria-label="Activar modo normal">
                    <WbSunny aria-hidden="true" />
                  </IconButton>
                )
              }
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
