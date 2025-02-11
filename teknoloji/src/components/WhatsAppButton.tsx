import React from "react";
import { Fab, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLocation } from "react-router-dom";

const WhatsAppButton: React.FC = () => {
  const location = useLocation();

  
  const engineeringPaths = [
    "/engineering",
    "/engineering/cekidemiri",
  ];

  const isEngineeringPage = engineeringPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const whatsappLink = isEngineeringPage
    ? "https://wa.me/+905344045981" // X address for engineering pages
    : "https://wa.me/+905444288042"; // Y address for other pages

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
