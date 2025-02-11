import React, { useState } from "react";
import Box from "@mui/material/Box";

const SlidingBannerM = () => {
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "/src/assets/markalar/autohak.jpg",
    "/src/assets/markalar/galia.jpg",
    "/src/assets/markalar/gdw.jpg",
    "/src/assets/markalar/imiola.png",
    "/src/assets/markalar/oris.jpg",
    "/src/assets/markalar/steinhof.png",
  ];

  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: "100%",
        backgroundColor: "#fff",
        padding: "1rem 0",
      }}
      onMouseEnter={() => setIsHovered(true)} // Pause animation on hover
      onMouseLeave={() => setIsHovered(false)} // Resume animation on mouse leave
    >
      <Box
        sx={{
          display: "inline-flex",
          animation: `slide 20s linear infinite`,
          animationPlayState: isHovered ? "paused" : "running", // Control play state
          "@keyframes slide": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: `translateX(-${images.length * 150}px)` },
          },
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Image ${index + 1}`}
            sx={{
              width: "150px",
              height: "auto",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          />
        ))}
        {/* Duplicate images for smooth transition */}
        {images.map((src, index) => (
          <Box
            key={images.length + index}
            component="img"
            src={src}
            alt={`Duplicate Image ${index + 1}`}
            sx={{
              width: "150px",
              height: "auto",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SlidingBannerM;
