import React from "react";
import { Container, Grid, Card, CardMedia, Typography } from "@mui/material";
import Section from "../components/AnimationFunc"; // Using same animation component
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Array of car brands with image paths
const markaIsim = [
  { name: "Auto Hak", src: "/src/assets/logos/autohak.png" },
  { name: "Galia", src: "/src/assets/logos/galia.png" },
  { name: "GDW", src: "/src/assets/logos/gdw.png" },
  { name: "Imiola", src: "/src/assets/logos/imiola.png" },
  { name: "Oris", src: "/src/assets/logos/oris.png" },
  { name: "Steinhof", src: "/src/assets/logos/steinhof.png" },
];
  

  const Marka: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); 
    const handleCardClick = (markaIsim: string) => {
      navigate(`/markalar/${markaIsim.toLowerCase().replace(/\s+/g, "-")}`);
    };
  
    return (
      <Section>
        <Container sx={{ py: 6, mt: 2}}>
          <Typography variant="h4" textAlign="center" gutterBottom>
            {t("markalar_title")}
          </Typography>
  
          <Grid container spacing={2} justifyContent="center">
            {markaIsim.map((brand, index) => (
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
            ))}
          </Grid>
        </Container>
      </Section>
    );
  };
  

export default Marka;
