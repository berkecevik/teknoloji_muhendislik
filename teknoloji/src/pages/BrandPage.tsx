import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Grid, Card, CardMedia, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";


const carModels: { [key: string]: { name: string; src: string }[] } = {
  renault: [
    { name: "Renault Clio", src: "/covers/reno_clio.png" },
    { name: "Renault Megane", src: "/covers/reno_megane.png" },
    { name: "Renault Captur", src: "/covers/reno_captur.png" },
    { name: "Renault 12", src: "/covers/reno_12.png" },
    { name: "Renault Kadjar", src: "/covers/reno_kadjar.png" },
    { name: "Renault Kangoo", src: "/covers/reno_kangoo.png" },
    { name: "Renault Scenic", src: "/covers/reno_scenic.png" },
    { name: "Renault Symbol", src: "/covers/reno_symbol.png" },
    { name: "Renault Europa", src: "/covers/reno_europa.png" },
    { name: "Renault Laguna", src: "/covers/reno_laguna.png" },
    { name: "Renault Trafic", src: "/covers/reno_trafic.png" },
  ],
  chevrolet: [ 
    { name: "Chevrolet Aveo", src: "/covers/chev_aveo.png" },
    { name: "Chevrolet Captiva", src: "/covers/chev_captiva.png" },
  ],
  audi: [
    { name: "Audi Q5", src: "/covers/audi_q5.png" },
  ],
  skoda: [
    { name: "Skoda Octavia", src: "/covers/scoda_octavia.png" },
  ],
  ssangyong: [
    { name: "Ssangyong Rodius", src: "/covers/ssang_rodius.png" },
  ],
  subaru: [
    { name: "Subaru Forester", src: "/covers/subaru_forester.png" },
  ],
  suzuki: [
    { name: "Suzuki Grand", src: "/covers/suzuki_grand.png" },
    { name: "Suzuki Scross", src: "/covers/suzuki_scross.png" },
  ],
  tesla: [
    { name: "Tesla Modely", src: "/covers/tesla_modely.png" },
  ],
  volkswagen: [
    { name: "Volkswagen Amarok", src: "/covers/volks_amarok.png" },
    { name: "Volkswagen Caddy", src: "/covers/volks_caddy.png" },
    { name: "Volkswagen Caravelle", src: "/covers/volks_caravelle.png" },
    { name: "Volkswagen Passat", src: "/covers/volks_passat.png" },
    { name: "Volkswagen Tiguan", src: "/covers/volks_tiguan.png" },
    { name: "Volkswagen Troc", src: "/covers/volks_troc.png" },
    { name: "Volkswagen Volt", src: "/covers/volks_volt.png" },
  ],
  volvo: [
    { name: "Volvo Xc40", src: "/covers/volvo_xc40.png" },
  ],
  landrover: [
    { name: "Landrover Defender", src: "/covers/landrover_defender.png" },
    { name: "Landrover Freelander", src: "/covers/landrover_freelander.png" },
  ],
  mazda: [
    { name: "Mazda 626", src: "/covers/mazda_626.png" },
  ],
  mercedes: [
    { name: "Mercedes Viano", src: "/covers/mercedes_viano.png" },
  ],
  mitsubishi: [
    { name: "Mitsubishi Eclipse", src: "/covers/mitsubishi_eclipse.png" },
  ],
  nissan: [
    { name: "Nissan Juke", src: "/covers/nissan_juke.png" },
    { name: "Nissan Qashqai", src: "/covers/nissan_qashqai.png" },
  ],
  opel: [
    { name: "Opel Astra", src: "/covers/opel_astra.png" },
    { name: "Opel Combo", src: "/covers/opel_combo.png" },
    { name: "Opel Vectra", src: "/covers/opel_vectra.png" },
  ],
  peugeot: [
    { name: "Peugeot 206", src: "/covers/peugeot_206.png" },
    { name: "Peugeot 3008", src: "/covers/peugeot_3008.png" },
    { name: "Peugeot Rifter", src: "/covers/peugeot_rifter.png" },
  ],
  seat: [
    { name: "Seat Ateca", src: "/covers/seat_ateca.png" },
  ],
  lada: [
    { name: "Lada Niva", src: "/covers/lada_niva.png" },
  ],
  kia: [
    { name: "Kia Stonic", src: "/covers/kia_stonic.png" },
  ],
  jeep: [
    { name: "Jeep Crd", src: "/covers/jeep_crd.png" },
  ],
  isuzu: [
    { name: "Isuzu Dmax", src: "/covers/isuzu_dmax.png" },
  ],
  hyundai: [
    { name: "Hyundai Bayon", src: "/covers/hyundai_bayon.png" },
    { name: "Hyundai Ix35", src: "/covers/hyundai_ix35.png" },
    { name: "Hyundai Tucson", src: "/covers/hyundai_tucson.png" },
  ],
  honda: [
    { name: "Honda Civic", src: "/covers/honda_civic.png" },
    { name: "Honda Crv", src: "/covers/honda_crv.png" },
  ],
  ford: [
    { name: "Ford Connect", src: "/covers/ford_connect.png" },
    { name: "Ford Focus", src: "/covers/ford_focus.png" },
    { name: "Ford Kuga", src: "/covers/ford_kuga.png" },
    { name: "Ford Ranger", src: "/covers/ford_ranger.png" },
    { name: "Ford Tourneo", src: "/covers/ford_tourneo.png" },
  ],
  fiat: [
    { name: "Fiat Egea", src: "/covers/fiat_egea.png" },
    { name: "Fiat Doblo", src: "/covers/fiat_doblo.png" },
    { name: "Fiat Ducato", src: "/covers/fiat_ducato.png" },
    { name: "Fiat Fiorino", src: "/covers/fiat_fiorino.png" },
    { name: "Fiat Linea", src: "/covers/fiat_linea.png" },
    { name: "Fiat Marea", src: "/covers/fiat_marea.png" },
    { name: "Fiat Freemont", src: "/covers/fiat_freemont.png" },
    { name: "Fiat Palio", src: "/covers/fiat_palio.png" },
    { name: "Fiat Punto", src: "/covers/fiat_punto.png" },
    { name: "Fiat Tempra", src: "/covers/fiat_tempra.png" },
  ],
  tofas: [
    { name: "Tofas Sahin", src: "/covers/tofas_sahin.png" },
  ],
  citroen: [
    { name: "Citroen Berlingo", src: "/covers/citroen_berlingo.png" },
    { name: "Citroen C3", src: "/covers/citroen_c3.png" },
    { name: "Citroen C4", src: "/covers/citroen_c4.png" },
  ],
  dacia: [
    { name: "Dacia Dokker", src: "/covers/dacia_dokker.png" },
    { name: "Dacia Jogger", src: "/covers/dacia_jogger.png" },
    { name: "Dacia Lodgy", src: "/covers/dacia_lodgy.png" },
    { name: "Dacia Logan", src: "/covers/dacia_logan.png" },
    { name: "Dacia Sandero", src: "/covers/dacia_sandero.png" },
    { name: "Dacia Duster", src: "/covers/dacia_duster.png" },
  ],
  
  bmw: [
    { name: "BMW X3", src: "/covers/bmw_x3.png" },
  ],
  toyota: [
    { name: "Toyota Corolla", src: "/covers/toyota_corolla.png" },
    { name: "Toyota Hilux", src: "/covers/toyota_hilux.png" },
    { name: "Toyota Proace", src: "/covers/toyota_proace.png" },
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
    <Container sx={{ py: 6, mt: 2, color: "black" }}>
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
                  boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.5), 0px 5px 15px rgba(0, 0, 0, 0.7)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)", boxShadow: "0px 15px 40px rgba(96, 89, 89, 0.8)" },
                }}
              >
                <Card
                  sx={{
                    background: "none",
                    boxShadow: "none",
                    cursor: "pointer",
                    width: "100%", // Ensure it takes full width
                    maxWidth: 250, // Limit max width for uniformity
                    height: 300, // Fixed height for uniformity
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => handleModelClick(model.name.toLowerCase().replace(/\s+/g, "-"))}
                >
                  <CardMedia
                    component="img"
                    image={model.src}
                    alt={model.name}
                    sx={{
                      width: "100%", 
                      height: "200px", // Fixed image height
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
          <Typography textAlign="center" sx={{ mt: 4, color: "black" }}>
            {t("brandpage_notfound")}
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default BrandPage;

