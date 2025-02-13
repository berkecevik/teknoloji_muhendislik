import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Card, CardMedia, Modal, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "../components/AnimationFunc";
import { motion } from "framer-motion";

// Sample model images with multiple images per model
const modelImages: { [key: string]: string[] } = {
  "audi-a3": ["/models/audi-a3.png"],
  "audi-q5": ["/models/audi-q5.jpg"],
  "bmw-x3": ["/models/bmw-x3.jpg"],
  "chevrolet-aveo": ["/models/chevrolet-aveo.jpg"],
  "chevrolet-captiva": ["/models/chevrolet-captiva.jpg", "/models/chevrolet-captiva (2).jpg"],
  "citroen-berlingo": ["/models/citroen-berlingo.jpg", "/models/citroen-berlingo (2).jpg"],
  "citroen-c3": ["/models/citroen-c3.jpg"],
  "citroen-c4": ["/models/citroen-c4.jpg"],
  "dacia-dokker": ["/models/dacia-dokker1.jpg"],
  "dacia-duster": [
    "/models/dacia-duster1.jpg", "/models/dacia-duster2.jpg", "/models/dacia-duster3.jpg",
    "/models/dacia-duster4.jpg", "/models/dacia-duster5.jpg", "/models/dacia-duster6.jpg",
    "/models/dacia-duster7.jpg", "/models/dacia-duster8.jpg", "/models/dacia-duster9.jpg",
    "/models/dacia-duster10.jpg", "/models/dacia-duster11.jpg", "/models/dacia-duster12.jpg",
    "/models/dacia-duster13.jpg", "/models/dacia-duster14.jpg"
  ],
  "dacia-jogger": ["/models/dacia-jogger1.jpg"],
  "dacia-lodgy": ["/models/dacia-lodgy1.jpg", "/models/dacia-lodgy2.jpg", "/models/dacia-lodgy3.jpg"],
  "dacia-logan": [
    "/models/dacia-logan.jpg", "/models/dacia-logan2.jpg", "/models/dacia-logan3.jpg",
    "/models/dacia-logan4.jpg", "/models/dacia-logan5.jpg", "/models/dacia-logan6.jpg",
    "/models/dacia-logan7.jpg", "/models/dacia-logan8.jpg", "/models/dacia-logan9.jpg",
    "/models/dacia-logan10.jpg"
  ],
  "dacia-sandero": ["/models/dacia-sandero1.jpg", "/models/dacia-sandero2.jpg", "/models/dacia-sandero3.jpg"],
  "fiat-egea": ['/models/fiat-cross.jpg'],
  "fiat-doblo": ['/models/fiat-doblo.jpg', '/models/fiat-doblo2.jpg', '/models/fiat-doblo3.jpg', '/models/fiat-doblo4.jpg',
    '/models/fiat-doblo (2).jpg', '/models/fiat-doblo (3).jpg', '/models/fiat-doblo (4).jpg',],
  "fiat-ducato": ['/models/fiat-ducato.jpg', '/models/fiat-ducato (2).jpg'],
  "fiat-fiorino": ['/models/fiat-fiorino.jpg', '/models/fiat-fiorino (2).jpg', '/models/fiat-fiorino (3).jpg', '/models/fiat-fiorino (4).jpg', '/models/fiat-fiorino (5).jpg', '/models/fiat-fiorino (6).jpg'],
  "fiat-freemont": ['/models/fiat-freemont.jpg'],
  "fiat-linea": ['/models/fiat-linea.jpg', '/models/fiat-linea (2).jpg'],
  "fiat-marea": ['/models/fiat-marea.jpg'],
  "fiat-palio": ['/models/fiat-palio.jpg', '/models/fiat-palio2.jpg'],
  "ford-connect": ['/models/ford-connect.jpg'],
  "ford-focus": ['/models/ford-focus.jpg', '/models/ford-focus (2).jpg'],
  "ford-kuga": ['/models/ford-kuga.jpg'],
  "ford-ranger": ['/models/ford-ranger.jpg', '/models/ford-ranger (2).jpg', '/models/ford-ranger (3).jpg'],
  "ford-tourneo": ['/models/ford-tourneo.jpg', '/models/ford-tourneo (2).jpg', '/models/ford-tourneo (3).jpg', '/models/ford-tourneo (4).jpg', '/models/ford-tourneo (5).jpg',
    '/models/ford-tourneo (6).jpg', '/models/ford-tourneo (7).jpg', '/models/ford-tourneo (8).jpg', '/models/ford-tourneo (9).jpg',],
  "honda-civic": ['/models/honda-civic.jpg', '/models/honda-civic (2).jpg', '/models/honda-civic (3).jpg',],
  "honda-crv": ['/models/honda-crv.jpg'],
  "hyundai-bayon": ['/models/hyundai-bayon.jpg'],
  "hyundai-ix35": ['/models/hyundai-ix35.jpg'],
  "hyundai-tucson": ['/models/hyundai-tucson.jpg'],
  "isuzu-dmax": ['/models/isuzu-dmax.jpg'],
  "jeep-crd": ['/models/jeep-crd.jpg'],
  "kia-stonic": ['/models/kia-stonic.jpg'],
  "lada-niva": ['/models/lada-niva.jpg'],
  "landrover-defender": ['/models/landrover-defender.jpg'],
  "landrover-freelander": ['/models/landrover-freelander.jpg'],
  "mazda-626": ['/models/mazda-626.jpg'],
  "mercedes-viano": ['/models/mercedes-viano.jpg'],
  "mitsubishi-eclipse": ['/models/mitsubishi-eclipse.jpg', '/models/mitsubishi-eclipse (2).jpg'],
  "nissan-juke": ['/models/nissan-juke.jpg'],
  "nissan-qashqai": ['/models/nissan-qashqai.jpg', '/models/nissan-qashqai (2).jpg'],
  "opel-astra": ['/models/opel-astra.jpg'],
  "opel-combo": ['/models/opel-combo.jpg'],
  "opel-vectra": ['/models/opel-vecta.jpg'],
  "peugeot-206": ['/models/peugeot-206.jpg'],
  "peugeot-3008": ['/models/peugeot-3008.jpg', '/models/peugeot-3008 (2).jpg'],
  "peugeot-rifter": ['/models/peugeot-rifter.jpg'],
  "renault-clio": ['/models/renault-clio.jpg', '/models/renault-clio (2).jpg', '/models/renault-clio (3).jpg', '/models/renault-clio (4).jpg', '/models/renault-clio (5).jpg'],
  "renault-kangoo": ['/models/renault-kangoo.jpg', '/models/renault-kangoo (2).jpg', '/models/renault-kangoo (3).jpg', '/models/renault-kangoo (4).jpg', '/models/renault-kangoo (5).jpg', '/models/renault-kangoo (6).jpg', '/models/renault-kangoo (7).jpg', '/models/renault-kangoo (8).jpg', '/models/renault-kangoo (9).jpg', '/models/renault-kangoo (10).jpg'],
  "renault-megane": ['/models/renault-megane.jpg', '/models/renault-megane (2).jpg', '/models/renault-megane (3).jpg', '/models/renault-megane (4).jpg', '/models/renault-megane (5).jpg', '/models/renault-megane (6).jpg', '/models/renault-megane (7).jpg'],
  "renault-symbol": ['/models/renault-symbol.jpg', '/models/renault-symbol (2).jpg', '/models/renault-symbol (3).jpg', '/models/renault-symbol (4).jpg', '/models/renault-symbol (5).jpg', '/models/renault-symbol (6).jpg', '/models/renault-symbol (7).jpg', '/models/renault-symbol (8).jpg', '/models/renault-symbol (9).jpg'],
  "reno-12": ['/models/reno-12.jpg', '/models/reno-12 (2).jpg'],
  "reno-captur": ['/models/reno-captur.jpg'],
  "reno-europa": ['/models/reno-europa.jpg'],
  "reno-kadjar": ['/models/reno-kadjar.jpg'],
  "reno-laguna": ['/models/reno-laguna.jpg'],
  "reno-scenic": ['/models/reno-scenic.jpg', '/models/reno-scenic (2).jpg', '/models/reno-scenic (3).jpg'],
  "reno-trafic": ['/models/reno-trafic.jpg'],
  "seat-ateca": ['/models/seat-ateca.jpg'],
  "skoda-octavia": ['/models/skoda-octavia.jpg'],
  "ssangyong-rodius": ['/models/ssangyong-rodius.jpg'],
  "subaru-forester": ['/models/subaru-forester.jpg', '/models/subaru-forester (2).jpg'],
  "suzuki-grand": ['/models/suzuki-grand.jpg'],
  "suzuki-scross": ['/models/suzuki-scross.jpg'],
  "tempra": ['/models/tempra.jpg'],
  "tesla-modely": ['/models/tesla-modely.jpg'],
  "tofas-sahin": ['/models/tofas_sahin.jpg'],
  "toyota-corolla": ['/models/toyota-corolla.jpg'],
  "toyota-hilux": ['/models/toyota-hilux.jpg', '/models/toyota-hilux (2).jpg'],
  "toyota-proace": ['/models/toyota-proace.jpg'],
  "volkswagen-amarok": ['/models/volkswagen-amarok.jpg', '/models/volkswagen-amarok (2).jpg', '/models/volkswagen-amarok (3).jpg'],
  "volkswagen-caddy": ['/models/volkswagen-caddy.jpg', '/models/volkswagen-caddy (2).jpg', '/models/volkswagen-caddy (3).jpg', '/models/volkswagen-caddy (4).jpg', '/models/volkswagen-caddy (5).jpg'],
  "volkswagen-caravelle": ['/models/volkswagen-carevella.jpg'],
  "volkswagen-passat": ['/models/volkswagen-passat.jpg', '/models/volkswagen-passat (2).jpg'],
  "volkswagen-tiguan": ['/models/volkswagen-tiguan.jpg', '/models/volkswagen-tiguan (2).jpg'],
  "volkswagen-troc": ['/models/volkswagen-troc.jpg'],
  "volkswagen-volt": ['/models/volkswagen-volt.jpg'],
  "volvo-xc40": ['/models/volvo-xc40.jpg'],
};


const ModelPage: React.FC = () => {
  const { modelName } = useParams<{ brandName: string; modelName: string }>();
  const modelKey = `${modelName?.toLowerCase()}`;
  const images = modelImages[modelKey] || [];
  const { t } = useTranslation();

  // State for modal
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Open modal function
  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // Close modal function
  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  return (
    <Section>
      <Container sx={{ py: 6, mt: 2 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          {modelName?.replace("-", " ").toUpperCase()}
        </Typography>

        {images.length > 0 ? (
          <Grid container spacing={2} justifyContent="center">
            {images.map((src, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card 
                    sx={{ maxWidth: "100%", mx: "auto", boxShadow: 5, cursor: "pointer" }} 
                    onClick={() => handleOpen(src)}
                  >
                    <CardMedia component="img" image={src} alt={`${modelName} ${index + 1}`} />
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography textAlign="center" sx={{ mt: 4 }}>
            {t("modelpage_text")}
          </Typography>
        )}

        {/* Modal for zooming images */}
        <Modal open={open} onClose={handleClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <motion.div 
            initial={{ scale: 0.7, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ scale: 0.7, opacity: 0 }} 
          >
            <Box 
              sx={{ 
                outline: "none", 
                bgcolor: "background.paper", 
                boxShadow: 24, 
                p: 2, 
                maxWidth: "90vw", 
                maxHeight: "90vh", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center" 
              }}
            >
              {selectedImage && <CardMedia component="img" image={selectedImage} sx={{ maxWidth: "100%", maxHeight: "90vh" }} />}
            </Box>
          </motion.div>
        </Modal>
      </Container>
    </Section>
  );
};

export default ModelPage;
