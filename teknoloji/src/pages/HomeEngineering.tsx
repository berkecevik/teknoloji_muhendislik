import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button, MenuItem, Select, FormControl, InputLabel, IconButton } from "@mui/material"; import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
import NoCrashIcon from '@mui/icons-material/NoCrash';
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlidingBannerM from "../components/SlidingBannerM";
import withLoading from "../components/withLoading"; // Import HOC
import { useTranslation } from "react-i18next";
import Section from "../components/AnimationFunc";
import { Link } from "react-router-dom";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const carData: { [key: string]: string[] } = {
  renault: ["Renault Clio", "Renault Megane", "Renault Captur"],
  audi: ["Audi A3", "Audi A4"],
  bmw: ["BMW 3 Series", "BMW X5"],
  toyota: ["Toyota Corolla", "Toyota Yaris"],
};

const images = [
  "/src/assets/homepage/main.jpg",
  "/src/assets/homepage/main1.jpg",
  "/src/assets/homepage/main2.jpg",
  "/src/assets/homepage/main3.jpg",
  "/src/assets/homepage/main4.jpg",
  "/src/assets/homepage/main5.jpg",
];

const HomeEngineering: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme(); // Access the theme to get colors
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");

  // Handle navigation to model page
  const handleNavigate = () => {
    if (selectedBrand && selectedModel) {
      const formattedBrand = selectedBrand.toLowerCase().replace(/\s+/g, "-");
      const formattedModel = selectedModel.toLowerCase().replace(/\s+/g, "-");
      navigate(`/cekidemiri/${formattedBrand}/${formattedModel}`);
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end (detect swipe direction)
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;

      if (diff > 50) {
        // Swiped left → Next Image
        handleNext();
      } else if (diff < -50) {
        // Swiped right → Previous Image
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const [isDragging, setIsDragging] = useState(false); // Track if user is dragging

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    setIsDragging(true); // Start dragging
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || touchStartX.current === null) return; // Only allow dragging if mouse is pressed
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false); // Stop dragging
    handleTouchEnd(); // Call the swipe function
  };

  return (
    <>
      {/* First Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          margin: 0,
          overflowX: "hidden",
          backgroundColor: "#000",
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/src/assets/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              padding: "2rem",
              color: "white",
            }}
          >
            {/* Left Section - Image */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/src/assets/background2.jpg"
                alt="Mechanic"
                style={{ width: "80%", borderRadius: "8px" }}
              />
            </Box>

            {/* Right Section - Text and Buttons */}
            <Box
              sx={{
                marginTop: 1,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                gap: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
                {t("engineering_first_title")} <br />
                {t("engineering_first_title2")}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[t("engineering_first_check1"), t("engineering_first_check2"), t("engineering_first_check3")].map(
                  (text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.3,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <CheckIcon sx={{ color: "#F9B233" }} />
                      <Typography variant="body1">{text}</Typography>
                    </motion.div>
                  )
                )}
              </Box>

              <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, marginTop: 2 }}>
                <Button component={Link}
                  to="/markalar"
                  variant="contained"
                  sx={{
                    backgroundColor: "#F9B233",
                    color: "#000",
                    "&:hover": { backgroundColor: "#E65C00" },
                    width: { xs: "100%", sm: "auto" }, // Full width on mobile
                  }}
                >
                  {t("engineering_first_button1")}
                </Button>
                <Button component={Link}
                  to="/cekidemiri"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F9B233",
                    color: "#000",
                    "&:hover": { backgroundColor: "#E65C00" },
                    width: { xs: "100%", sm: "auto" }, // Full width on mobile
                  }}
                >
                  {t("engineering_first_button2")}
                </Button>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* New Car Selection Section */}
      <Section>
        <Box sx={{ py: 6, backgroundColor: "#F5F5F5", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            {t("select_your_car")}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", mt: 3 }}>

            {/* Brand Selection */}
            <FormControl sx={{ minWidth: 200 }} variant="filled">
              <InputLabel sx={{ color: "#F9B233" }}>{t("select_brand")}</InputLabel>
              <Select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setSelectedModel("");
                }}
                sx={{
                  backgroundColor: "white",
                  "& .MuiFilledInput-root": {
                    borderColor: "#F9B233",
                    "&:hover": { borderColor: "#F9B233" },
                    "&.Mui-focused": { borderColor: "#F9B233" },
                  },
                }}
              >
                {Object.keys(carData).map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Model Selection */}
            <FormControl sx={{ minWidth: 200 }} disabled={!selectedBrand} variant="filled">
              <InputLabel sx={{ color: "#F9B233" }}>{t("select_model")}</InputLabel>
              <Select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  "& .MuiFilledInput-root": {
                    borderColor: "#F9B233",
                    "&:hover": { borderColor: "#F9B233" },
                    "&.Mui-focused": { borderColor: "#F9B233" },
                  },
                }}
              >
                {selectedBrand &&
                  carData[selectedBrand].map((model) => (
                    <MenuItem key={model} value={model}>
                      {model}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {/* Navigate Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F9B233",
                color: "#000",
                "&:hover": { backgroundColor: "#E65C00" },
              }}
              disabled={!selectedBrand || !selectedModel}
              onClick={handleNavigate}
            >
              {t("see_model")}
            </Button>
          </Box>
        </Box>
      </Section>


      {/* About Section */}
      <Section>
        <Box
          sx={{
            padding: { xs: "2rem 1rem", md: "4rem 2rem" },
            textAlign: "center",
            background: "linear-gradient(0deg, #545454 5%,#e6e5e1 50%)",
            color: "#000",
          }}
        >
          <Typography variant="h6" color="orange" gutterBottom>
            {t("engineering_about_title")}
          </Typography>

          {/* Main heading */}
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
            {t("engineering_about_title2")} <span style={{ fontWeight: 800 }}>{t("engineering_about_title2_1")}</span> {t("engineering_about_title2_2")}
          </Typography>

          {/* Card Container */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 3, // Adjusts spacing dynamically
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              {
                title: `${t("engineering_cards1_title")}`,
                description: `${t("engineering_cards1_description")}`,
                action: `${t("engineering_cards_button")}`,
              },
              {
                title: `${t("engineering_cards2_title")}`,
                description: `${t("engineering_cards2_description")}`,
                action: `${t("engineering_cards_button")}`,
              },
              {
                title: `${t("engineering_cards3_title")}`,
                description: `${t("engineering_cards3_description")}`,
                action: `${t("engineering_cards_button")}`,
              },
            ].map((card, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 100%", // Full width on mobile
                  minWidth: "280px", // Prevents breaking on small screens
                  maxWidth: { xs: "100%", sm: "calc(50% - 1rem)", md: "calc(33.333% - 1rem)" },
                  padding: "2rem",
                  borderRadius: "16px",
                  backgroundColor: "#0B1727",
                  color: "#000",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                  },
                  textAlign: "center",
                  overflow: "hidden", // Prevents content overflow
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    fontSize: "3rem",
                    color: "#F0F8FF",
                    marginBottom: "1rem",
                  }}
                >
                  <NoCrashIcon fontSize="inherit" />
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={2}
                  sx={{
                    color: "#F0F8FF",
                  }}
                >
                  {card.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  mb={3}
                  sx={{
                    color: "#F0F8FF",
                  }}
                >
                  {card.description}
                </Typography>

                {/* Action Button */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F0F8FF",
                    color: "#000",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  {card.action}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      {/* Third Section */}
      <Section>
        <Box
          sx={{
            backgroundColor: "#0B1727",
            color: "#FFFFFF",
            padding: "4rem 2rem",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left Image Section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start" // Adjust alignment for negative margin
              }}
            >
              <img
                src="/src/assets/image2.jpg"
                alt="Engineering"
                style={{
                  width: "100%", // Set the width to 100% for responsiveness
                  maxWidth: "400px", // Add a max width for proper scaling
                  marginTop: "-6rem", // Negative margin for "leaking" effect
                  objectFit: "cover", // Ensures proper aspect ratio
                }}
              />
            </Grid>

            {/* Right Text Section */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                color="error"
                gutterBottom
                sx={{ fontSize: "0.875rem" }}
              >
                {t("engineering_third_title")}
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                fontWeight="bold"
                gutterBottom
              >
                {t("engineering_third_title2")}<span style={{ color: "#FF5733" }}> {t("engineering_third_title2_1")}</span> {t("engineering_third_title2_2")}<span style={{ color: "#FF5733" }}> {t("engineering_third_title2_3")}</span>
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                {t("engineering_third_title3")}
              </Typography>

              {/* Slider Section */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "500px",
                  margin: "auto",
                  overflow: "hidden",
                  userSelect: "none", // Prevents unwanted text selection while dragging
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // Ensures drag stops even if the cursor leaves the component
              >
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  style={{ width: "100%", borderRadius: "10px", objectFit: "cover", pointerEvents: "none" }}
                />
                <IconButton
                  onClick={handlePrev}
                  sx={{ position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)", color: "black" }}
                >
                  <ArrowBackIos />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{ position: "absolute", top: "50%", right: 10, transform: "translateY(-50%)", color: "black" }}
                >
                  <ArrowForwardIos />
                </IconButton>
              </Box>

            </Grid>
          </Grid>
        </Box>
      </Section>

      <SlidingBannerM />
      {/* Projects Section */}
      <Section>

        <Box
          sx={{
            background: "linear-gradient(to bottom, #0B1727 80%, #FFFFFF 20%)",
            color: "#FFFFFF",
            padding: "4rem 2rem",
            position: "relative",
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <Typography
              variant="h6"
              color="orange"
              gutterBottom
              sx={{ textTransform: "uppercase" }}
            >
              {t("engineering_projects_title")}
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              <span style={{ color: "#FF6F00" }}>{t("engineering_projects_title2")}</span> {t("engineering_projects_title2_1")}
            </Typography>
          </Box>

          <Slider {...settings}>
            {[{
              image: "/src/assets/m1.jpg",
              category: t("engineering_project_card1_category"),
              title: t("engineering_project_card1_title"),

            },
            {
              image: "/src/assets/m2.jpg",
              category: t("engineering_project_card2_category"),
              title: t("engineering_project_card2_title"),

            },
            {
              image: "/src/assets/m3.jpg",
              category: t("engineering_project_card3_category"),
              title: t("engineering_project_card3_title"),

            },
            {
              image: "/src/assets/m4.jpg",
              category: t("engineering_project_card4_category"),
              title: t("engineering_project_card4_title"),

            }].map((project, index) => (
              <Box
                key={index}
                sx={{
                  padding: "0.4rem",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    margin: "0 0.5rem", // Adds gap between slides
                    backgroundColor: "#1A273E",
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "8px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover img": {
                      transform: "scale(1.1)",
                      filter: "brightness(80%)",
                    },
                    "&:hover .overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      transition: "transform 0.3s ease, filter 0.3s ease",
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      color: "#FFFFFF",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="#FF6F00"
                      gutterBottom
                    >
                      {project.category}
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ color: "#FFFFFF" }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "2rem",
              backgroundColor: "#FFFFFF",
            }}
          />
        </Box>
      </Section>
    </>
  );
};

export default withLoading(HomeEngineering);