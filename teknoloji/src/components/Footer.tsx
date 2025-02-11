import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0B1727",
        color: "white",
        py: 4,
        px: 2,
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        {/* Left Section - Navigation Links */}
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#FF6F00" }}>
            {t("footer_title1")}
          </Typography>
          <Typography>
            <Link href="/cekidemiri" color="inherit" underline="hover">
              {t("footer_label1_1")}
            </Link>
          </Typography>
          <Typography>
            <Link href="/Contact" color="inherit" underline="hover">
              {t("footer_label1_2")}
            </Link>
          </Typography>
          <Typography>
            <Link href="/AboutUs" color="inherit" underline="hover">
              {t("footer_label1_3")}
            </Link>
          </Typography>
        </Grid>

        {/* Middle Section - Contact Info */}
        <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#FF6F00" }}>
            {t("footer_title2")}
          </Typography>
          <Typography>
            <Link href="tel:+905344045981" color="inherit" underline="hover">
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
              (+90) 534 404 5981
            </Link>
          </Typography>
          <Typography>
            <Link href="mailto:teknolojimuh48@gmail.com" color="inherit" underline="hover">
              <EmailIcon fontSize="small" sx={{ mr: 1 }} />
              teknolojimuh48@gmail.com
            </Link>
          </Typography>
          <Typography>
            <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
            {t("footer_label2")}
          </Typography>
        </Grid>

        {/* Right Section - Social Media Icons */}
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#FF6F00" }}>
            {t("footer_title3")}
          </Typography>
          <IconButton
            component="a"
            href="https://www.instagram.com/teknolojimuhendislik/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" sx={{ color: "white" }}>
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* Bottom Copyright Section */}
      <Box sx={{ mt: 3, textAlign: "center", borderTop: "1px solid #444", pt: 2 }}>
        <Typography variant="body2">
          Developed by BC. © 2025 Teknoloji Mühendislik. {t("footer_rights")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
