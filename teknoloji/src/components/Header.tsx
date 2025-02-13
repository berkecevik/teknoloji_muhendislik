import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Email,
  Phone,
  CalendarToday,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { GB, TR } from "country-flag-icons/react/3x2";
import { useTheme, useMediaQuery } from "@mui/material";


const Header: React.FC = () => {
  const { t, i18n } = useTranslation(); // Import translations
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleLanguageMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setLanguageAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const renderTopInfoBar = () => (
    <Box
      sx={{
        backgroundColor: "#F9B233",
        color: "#000",
        padding: "0.5rem 2rem",
        fontSize: "0.875rem",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#000",
              display: "inline-block",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/"; // Redirect to home
            }}
          >
            TEKNOLOJİ<span style={{ color: "#fff" }}>{t("technology_engineering")}</span>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              justifyContent: { xs: "center", sm: "flex-end" },
              gap: { xs: 2, sm: 4 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton size="small" sx={{ color: "#000" }}>
                <CalendarToday />
              </IconButton>
              <Typography>{t("work_hours")}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton size="small" sx={{ color: "#000" }} onClick={() => window.location.href = "tel:+905344045981"}>
                <Phone />
              </IconButton>
              <Typography>{t("phone")}: +90 534 404 5981</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton size="small" sx={{ color: "#000" }}>
                <Email />
              </IconButton>
              <Typography>{t("email")}: teknolojimuh48@gmail.com</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  const renderDesktopHeader = () => (
    <>
      {renderTopInfoBar()}
      <Box
        sx={{
          backgroundColor: "#F9B233",
          position: "sticky",
          top: 0,
          zIndex: 1200,
        }}
      >
        <AppBar
          position="sticky"
          sx={{
            zIndex: 1100,
            backgroundColor: "#020100",
            color: "#fff",
            transition: "transform 1s ease-in-out, width 1s ease-in-out",
            transform: isScrolled ? "scaleX(1)" : "scaleX(1)",
            margin: "0 auto",
            width: isScrolled ? "100%" : "80%",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", padding: "0 2rem" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                color="inherit"
                component={Link}
                to="/"
                sx={{
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: "#D4AF37",
                  },
                }}
              >
                {t("home")}
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/hakkimizda"
                sx={{
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: "#D4AF37",
                  },
                }}
              >
                {t("about_us")}
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/contact"
                sx={{
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: "#D4AF37",
                  },
                }}
              >
                {t("contact")}
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/cekidemiri"
                sx={{
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: "#D4AF37",
                  },
                }}
              >
                {t("cekidemiri")}
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/markalar"
                sx={{
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: "#D4AF37",
                  },
                }}
              >
                {t("markalar")}
              </Button>
            </Box>
            <Button
              variant="text"
              onClick={handleLanguageMenuClick}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  color: "#F9B233",
                  borderColor: "#F9B233",
                },
              }}
            >
              {i18n.language === "tr" ? (
                <TR title="Türkçe" style={{ width: 24, height: 16 }} />
              ) : (
                <GB title="English" style={{ width: 24, height: 16 }} />
              )}
            </Button>

            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={() => handleLanguageChange("tr")}>
                <TR title="Türkçe" style={{ width: 24, height: 16, marginRight: 8 }} /> Türkçe
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("en")}>
                <GB title="English" style={{ width: 24, height: 16, marginRight: 8 }} /> English
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );

  const renderMobileHeader = () => (
    <AppBar position="fixed" sx={{ backgroundColor: "#020100", color: "#fff" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Hamburger Menu Icon */}
        <IconButton color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>

        {/* Header Title */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6">TEKNOLOJİ</Typography>
        </Link>

        {/* Language Button */}
        <Button
          variant="outlined"
          onClick={(e) => {
            e.stopPropagation();
            handleLanguageMenuClick(e);
          }}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            "&:hover": {
              color: "#F9B233",
              borderColor: "#F9B233",
            },
          }}
        >
          {i18n.language === "tr" ? (
            <TR title="Türkçe" style={{ width: 24, height: 16 }} />
          ) : (
            <GB title="English" style={{ width: 24, height: 16 }} />
          )}
        </Button>

        {/* Drawer Component */}
{/* Drawer Component */}
<Drawer
  anchor="left"
  open={drawerOpen}
  onClose={toggleDrawer(false)}
  PaperProps={{
    sx: { backgroundColor: "#1E1E1E", color: "white" }, // Background color
  }}
>
  <Box sx={{ width: 250, padding: 2 }} role="presentation">
    {/* Close Icon, Mini Logo & "TEKNOLOJİ" Title */}
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
      {/* Close Icon (Left) */}
      <IconButton color="inherit" onClick={toggleDrawer(false)} sx={{ marginRight: "auto" }}>
        <CloseIcon />
      </IconButton>

      {/* Mini Logo and Title (Centered) */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexGrow: 1, // This allows centering
          justifyContent: "center", // Centering the content
        }}
      >
        {/* Mini Logo (SVG) */}
        <img src="minilogo.svg" alt="Mini Logo" style={{ width: 30, height: 30 }} />

        {/* Title */}
        <Typography variant="h6" fontWeight="bold">
          TEKNOLOJİ
        </Typography>
      </Box>
    </Box>

    {/* Drawer List */}
    <List>
      {[
        { label: t("home"), to: "/" },
        { label: t("about_us"), to: "/hakkimizda" },
        { label: t("contact"), to: "/contact" },
        { label: t("markalar"), to: "/markalar" },
        { label: t("cekidemiri"), to: "/cekidemiri" },
      ].map((item, index) => (
        <ListItem
          key={index}
          component={Link}
          to={item.to}
          onClick={toggleDrawer(false)}
          sx={{
            cursor: "pointer",
            "&:hover": { backgroundColor: "#333" }, // Custom hover effect
            "&:focus, &:active": { backgroundColor: "transparent" }, // Prevent purple color
            textDecoration: "none",
          }}
        >
          <ListItemText
            primary={item.label}
            sx={{
              color: "white", // Set text color to white
              "& span": {
                color: "white !important", // Override default MUI active/focus color
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
</Drawer>




        {/* Language Menu */}
        <Menu
          anchorEl={languageAnchorEl}
          open={Boolean(languageAnchorEl)}
          onClose={handleLanguageMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => handleLanguageChange("tr")}>
            <TR title="Türkçe" style={{ width: 24, height: 16, marginRight: 8 }} /> Türkçe
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange("en")}>
            <GB title="English" style={{ width: 24, height: 16, marginRight: 8 }} /> English
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );



  return (
    <>{isMobile ? renderMobileHeader() : renderDesktopHeader()}</>
  );
};

export default Header;
