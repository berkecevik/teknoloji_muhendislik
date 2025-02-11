import React from "react";
import { Fab, Zoom } from "@mui/material"; // Ensure Zoom is correctly imported
import InstagramIcon from "@mui/icons-material/Instagram";

const InstagramButton: React.FC = () => {
    
  const goToInstagram = () => {
    window.open("https://www.instagram.com/teknolojimuhendislik/", "_blank");
  };

  return (
    <Zoom in={true}>
      <Fab
        color="secondary"
        size="medium"
        onClick={goToInstagram}
        sx={{
          position: "fixed",
          bottom: 80, // Adjusted to avoid overlap with GoUp button
          right: 16,
          zIndex: 1000,
          background: "#E1306C", // Instagram color
          color: "white",
          "&:hover": { background: "#C13584" }, // Darker Instagram color on hover
        }}
      >
        <InstagramIcon />
      </Fab>
    </Zoom>
  );
};

export default InstagramButton;
