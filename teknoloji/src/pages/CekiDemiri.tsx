import React, { useState } from "react";
import { Container, Grid, Card, CardMedia, Typography, TextField, Box } from "@mui/material";
import Section from "../components/AnimationFunc"; // Using the same animation component
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Array of car brands with image paths
const carBrands = [
  { name: "Alfa Romeo", src: "/src/assets/logos/alfa-romeo.png" },
  { name: "Audi", src: "/src/assets/logos/audi.png" },
  { name: "BMW", src: "/src/assets/logos/bmw.png" },
  { name: "Chevrolet", src: "/src/assets/logos/chevrolet.png" },
  { name: "Citroen", src: "/src/assets/logos/citroen.png" },
  { name: "Dacia", src: "/src/assets/logos/dacia.png" },
  { name: "Fiat", src: "/src/assets/logos/fiat.png" },
  { name: "Ford", src: "/src/assets/logos/ford.png" },
  { name: "Honda", src: "/src/assets/logos/honda.png" },
  { name: "Hyundai", src: "/src/assets/logos/hyundai.png" },
  { name: "Isuzu", src: "/src/assets/logos/isuzu.png" },
  { name: "Iveco", src: "/src/assets/logos/iveco.png" },
  { name: "Jeep", src: "/src/assets/logos/jeep.png" },
  { name: "Kia", src: "/src/assets/logos/kia.png" },
  { name: "Lada", src: "/src/assets/logos/lada.png" },
  { name: "LandRover", src: "/src/assets/logos/land-rover.png" },
  { name: "Mazda", src: "/src/assets/logos/mazda.png" },
  { name: "Mercedes", src: "/src/assets/logos/mercedes.png" },
  { name: "MG", src: "/src/assets/logos/mg.png" },
  { name: "Mini", src: "/src/assets/logos/mini.png" },
  { name: "Mitsubishi", src: "/src/assets/logos/mitsubishi.png" },
  { name: "Nissan", src: "/src/assets/logos/nissan.png" },
  { name: "Opel", src: "/src/assets/logos/opel.png" },
  { name: "Peugeot", src: "/src/assets/logos/peugeot.png" },
  { name: "Renault", src: "/src/assets/logos/renault.png" },
  { name: "Seat", src: "/src/assets/logos/seat.png" },
  { name: "Skoda", src: "/src/assets/logos/skoda.png" },
  { name: "SsangYong", src: "/src/assets/logos/ssangyong.png" },
  { name: "Subaru", src: "/src/assets/logos/subaru.png" },
  { name: "Suzuki", src: "/src/assets/logos/suzuki.png" },
  { name: "Tesla", src: "/src/assets/logos/tesla.png" },
  { name: "Tofas", src: "/src/assets/logos/tofas.png" },
  { name: "Toyota", src: "/src/assets/logos/toyota.png" },
  { name: "Volkswagen", src: "/src/assets/logos/volkswagen.png" },
  { name: "Volvo", src: "/src/assets/logos/volvo.png" },
];

const CekiDemiri: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const handleCardClick = (brandName: string) => {
    navigate(`/cekidemiri/${brandName.toLowerCase()}`);
  };

  const filteredBrands = carBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Section>
      <Container sx={{ py: 6, mt: 2 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          {t("cekidemiri_title")}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <TextField
            label= {t("searchbar")}
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 400 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                    boxShadow: 3,
                    transition: "transform 0.2s",
                    "&:hover": { transform: "scale(1.05)" },
                    cursor: "pointer",
                  }}
                  onClick={() => handleCardClick(brand.name)}
                >
                  <CardMedia
                    component="img"
                    image={brand.src}
                    alt={brand.name}
                    sx={{ width: "100%", objectFit: "contain" }}
                  />
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
              {t("cekidemiri_notfound")}
            </Typography>
          )}
        </Grid>
      </Container>
    </Section>
  );
};

export default CekiDemiri;
