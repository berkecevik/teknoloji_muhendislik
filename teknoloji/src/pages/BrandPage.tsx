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
    { name: "Renault 12", src: "/models/clio.jpg" },
    { name: "Renault Kadjar", src: "/models/megane.jpg" },
    { name: "Renault Kangoo", src: "/models/captur.jpg" },
    { name: "Renault Scenic", src: "/models/clio.jpg" },
    { name: "Renault Symbol", src: "/models/megane.jpg" },
    { name: "Renault Europa", src: "/models/megane.jpg" },
    { name: "Renault Laguna", src: "/models/megane.jpg" },
    { name: "Renault Trafic", src: "/models/megane.jpg" },
  ],
  chevrolet: [ 
    { name: "Chevrolet Aveo", src: "/models/aveo.jpg" },
    { name: "Chevrolet Captiva", src: "/models/aveo.jpg" },
  ],
  audi: [
    { name: "Audi Q5", src: "/models/audi-a3.png" },
  ],
  skoda: [
    { name: "Skoda Octavia", src: "/models/audi-a3.png" },
  ],
  ssanyong: [
    { name: "Ssanyong Rode", src: "/models/audi-a3.png" },
  ],
  subaru: [
    { name: "Subaru Forester", src: "/models/audi-a3.png" },
  ],
  suzuki: [
    { name: "Suzuki Grand", src: "/models/audi-a3.png" },
    { name: "Suzuki Scross", src: "/models/audi-a3.png" },
  ],
  tesla: [
    { name: "Tesla Modely", src: "/models/audi-a3.png" },
  ],
  volkswagen: [
    { name: "Volkswagen Amarok", src: "/models/audi-a3.png" },
    { name: "Volkswagen Caddy", src: "/models/audi-a3.png" },
    { name: "Volkswagen Carevella", src: "/models/audi-a3.png" },
    { name: "Volkswagen Passat", src: "/models/audi-a3.png" },
    { name: "Volkswagen Tiguan", src: "/models/audi-a3.png" },
    { name: "Volkswagen Troc", src: "/models/audi-a3.png" },
    { name: "Volkswagen Volt", src: "/models/audi-a3.png" },
  ],
  volvo: [
    { name: "Volvo Xc40", src: "/models/audi-a3.png" },
  ],
  landrover: [
    { name: "Landrover Defender", src: "/models/audi-a3.png" },
    { name: "Landrover Freelander", src: "/models/audi-a3.png" },
  ],
  mazda: [
    { name: "Mazda 626", src: "/models/audi-a3.png" },
  ],
  mitsubishi: [
    { name: "Mitsubishi Eclipse", src: "/models/audi-a3.png" },
  ],
  nissan: [
    { name: "Nissan Juke", src: "/models/audi-a3.png" },
    { name: "Nissan Qashqai", src: "/models/audi-a3.png" },
  ],
  opel: [
    { name: "Opel Astra", src: "/models/audi-a3.png" },
    { name: "Opel Combo", src: "/models/audi-a3.png" },
    { name: "Opel Vecta", src: "/models/audi-a3.png" },
  ],
  peugeot: [
    { name: "Peugeot 206", src: "/models/audi-a3.png" },
    { name: "Peugeot 3008", src: "/models/audi-a3.png" },
    { name: "Peugeot Rifter", src: "/models/audi-a3.png" },
  ],
  seat: [
    { name: "Seat Ateca", src: "/models/audi-a3.png" },
  ],
  lada: [
    { name: "Lada Niva", src: "/models/audi-a3.png" },
  ],
  kia: [
    { name: "Kia Stonic", src: "/models/audi-a3.png" },
  ],
  jeep: [
    { name: "Jeep Crd", src: "/models/audi-a3.png" },
  ],
  isuzu: [
    { name: "Isuzu Dmax", src: "/models/audi-a3.png" },
  ],
  hyundai: [
    { name: "Hyundai Bayon", src: "/models/audi-a3.png" },
    { name: "Hyundai Ix35", src: "/models/audi-a3.png" },
    { name: "Hyundai Tucson", src: "/models/audi-a3.png" },
  ],
  honda: [
    { name: "Honda Civic", src: "/models/audi-a3.png" },
    { name: "Honda Crv", src: "/models/audi-a3.png" },
  ],
  ford: [
    { name: "Ford Connect", src: "/models/audi-a3.png" },
    { name: "Ford Focus", src: "/models/audi-a3.png" },
    { name: "Ford Kuga", src: "/models/audi-a3.png" },
    { name: "Ford Ranger", src: "/models/audi-a3.png" },
    { name: "Ford Tourneo", src: "/models/audi-a3.png" },
  ],
  fiat: [
    { name: "Fiat Cross", src: "/models/audi-a3.png" },
    { name: "Fiat Doblo", src: "/models/audi-a3.png" },
    { name: "Fiat Ducato", src: "/models/audi-a3.png" },
    { name: "Fiat Fiorino", src: "/models/audi-a3.png" },
    { name: "Fiat Linea", src: "/models/audi-a3.png" },
    { name: "Fiat Marea", src: "/models/audi-a3.png" },
    { name: "Fiat Freemont", src: "/models/audi-a3.png" },
    { name: "Fiat Palio", src: "/models/audi-a3.png" },
    { name: "Fiat Punto", src: "/models/audi-a3.png" },
    { name: "Fiat Sahin", src: "/models/audi-a3.png" },
    { name: "Fiat Tempra", src: "/models/audi-a3.png" },
  ],
  citroen: [
    { name: "Citroen Berlingo", src: "/models/audi-a3.png" },
    { name: "Citroen C3", src: "/models/audi-a3.png" },
    { name: "Citroen C4", src: "/models/audi-a3.png" },
  ],
  dacia: [
    { name: "Dacia Dokker", src: "/models/audi-a3.png" },
    { name: "Dacia Jogger", src: "/models/audi-a3.png" },
    { name: "Dacia Lodgy", src: "/models/audi-a3.png" },
    { name: "Dacia Logan", src: "/models/audi-a3.png" },
    { name: "Dacia Sandero", src: "/models/audi-a3.png" },
  ],
  
  bmw: [
    { name: "BMW X3", src: "/models/bmw-x3.jpg" },
  ],
  toyota: [
    { name: "Toyota Corolla", src: "/models/corolla.jpg" },
    { name: "Toyota Hilux", src: "/models/yaris.jpg" },
    { name: "Toyota Proace", src: "/models/yaris.jpg" },
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
