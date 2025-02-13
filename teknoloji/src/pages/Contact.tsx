import React from "react";
import { Container, Typography, Box, Link, IconButton, Grid, Paper } from "@mui/material";
import { LocationOn, Email, Phone as PhoneIcon } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import withLoading from "../components/withLoading";
import { useTranslation } from "react-i18next";
import Section from "../components/AnimationFunc"; // Animation Wrapper

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container sx={{ py: 6, textAlign: "center", mt: 3, }}>
        {/* Page Title */}
        <Typography variant="h3" gutterBottom sx={{ color: "#333", fontWeight: "bold" }}>
          {t("contact_title")}
        </Typography>

        {/* Contact Page Intro Text */}
        <Typography variant="body1" sx={{ maxWidth: "700px", margin: "auto", color: "#555", mb: 4 }}>
          {t("contact_description")}
        </Typography>

        {/* Contact Details Grid */}
        <Grid container spacing={4} justifyContent="center">
          {/* Phone & Email Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "#f7f8fc",
                minHeight: "80px", // Ensures equal height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Centers content
              }}
            >
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#333" }}
              >
                <Link href="tel:+905344045981" color="inherit" underline="hover">
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
              (+90) 534 404 5981
            </Link>
              </Typography>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#333" }}
              >
                <Email color="primary" />
                <Link href="mailto:teknolojimuh48@gmail.com" color="inherit" underline="hover">
                  teknolojimuh48@gmail.com
                </Link>
              </Typography>
            </Paper>
          </Grid>

          {/* Address Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "#f7f8fc",
                minHeight: "80px", // Ensures equal height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Centers content
              }}
            >
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#333" }}
              >
                <LocationOn color="primary" /> {t("address")}
              </Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                {t("address_detail")}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Google Maps Section */}
        <Box sx={{ mt: 5 }}>
          <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 3 }}>
            <iframe
              title="Google Maps"
              width="100%"
              height="350"
              style={{ border: 0, maxWidth: "100%" }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.1873802051547!2d29.10805327580726!3d36.64627697239427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c03494dbf2493d%3A0xa368b27a593e91e4!2sTa%C5%9Fyaka%2C%20254.%20Sk.%20No%3A64%2C%2048300%20Fethiye%2FMu%C4%9Fla!5e0!3m2!1sen!2str!4v1707558123456"
            ></iframe>
          </Paper>
        </Box>

        {/* Social Media Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" sx={{ color: "#333" }}>
            {t("follow_us")}
          </Typography>
          <IconButton
            component="a"
            href="https://www.instagram.com/teknolojimuhendislik/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              backgroundColor: "#E4405F",
              "&:hover": { backgroundColor: "#C13584" },
              width: 50,
              height: 50,
              borderRadius: "50%",
              mr: 2,
            }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/profile.php?id=100090676906052"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              backgroundColor: "#1877F2",
              "&:hover": { backgroundColor: "#05387a" },
              width: 50,
              height: 50,
              borderRadius: "50%",
            }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Section>
  );
};

export default withLoading(Contact);
