import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "primary.main",
      color: "white",
      py: 2,
      textAlign: "center",
    }}
  >
    <Typography variant="body2">
      &copy; 2025 Renault Teknoloji. Tüm hakları saklıdır.
    </Typography>
  </Box>
);

export default Footer;