import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Grid, Card, CardMedia, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

// Sample car models for each brand
const carModels: { [key: string]: { name: string; src: string }[] } = {
  renault: [
    { name: "Renault Clio", src: "/models/clio.jpg" },
    { name: "Renault Megane", src: "/models/megane.jpg" },
    { name: "Renault Captur", src: "/models/captur.jpg" },
  ],
  audi: [
    { name: "Audi A3", src: "/models/audi-a3.png" },
    { name: "Audi A4", src: "/models/audi-a3.png" },
  ],
  bmw: [
    { name: "BMW 3 Series", src: "/models/bmw-3series.jpg" },
    { name: "BMW X5", src: "/models/bmw-x5.jpg" },
  ],
  toyota: [
    { name: "Toyota Corolla", src: "/models/corolla.jpg" },
    { name: "Toyota Yaris", src: "/models/yaris.jpg" },
  ],
};

const BrandPage: React.FC = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const navigate = useNavigate();
  const models = carModels[brandName || ""] || [];
  const { t } = useTranslation();

  const handleModelClick = (modelName: string) => {
    navigate(`/cekidemiri/${brandName}/${modelName.toLowerCase().replace(/\s+/g, "-").replace(/-+/g, "-")}`);
  };

  return (
    <Container sx={{ py: 6, mt: 2 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        {brandName?.toUpperCase()} {t("brandpage_text")}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {models.length > 0 ? (
          models.map((model, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "radial-gradient(circle at center, rgba(238, 231, 231, 0.1), rgba(83, 82, 82, 0.9))",
                  borderRadius: 3,
                  padding: 2,
                  boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.5), 0px 5px 15px rgba(0, 0, 0, 0.7)", // Glow effect
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)", boxShadow: "0px 15px 40px rgba(96, 89, 89, 0.8)" }, // Intense glow on hover
                }}
              >
                <Card
                  sx={{
                    background: "none",
                    boxShadow: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleModelClick(model.name.toLowerCase().replace(/\s+/g, "-"))}
                >
                  <CardMedia
                    component="img"
                    image={model.src}
                    alt={model.name}
                    sx={{
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: 3,
                    }}
                  />
                  <Typography textAlign="center" mt={1} sx={{ color: "white", fontWeight: "bold" }}>
                    {model.name}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography textAlign="center" sx={{ mt: 4, color: "white" }}>
            No models available for this brand.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default BrandPage;
