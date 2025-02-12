import React from "react";
import { Fab, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton: React.FC = () => {

  const whatsappLink = "https://wa.me/+905344045981";

  // Open WhatsApp when clicked
  const goToWhatsApp = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <Zoom in={true}>
      <Fab
        color="primary"
        size="medium"
        onClick={goToWhatsApp}
        sx={{
          position: "fixed",
          bottom: 140, // Adjusted to avoid overlap with Instagram button
          right: 16,
          zIndex: 1000,
          background: "#25D366", // WhatsApp color
          color: "white",
          "&:hover": { background: "#128C7E" }, // Darker WhatsApp color on hover
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Zoom>
  );
};

export default WhatsAppButton;
