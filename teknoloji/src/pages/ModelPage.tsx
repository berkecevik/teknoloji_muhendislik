import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Card, CardMedia, Modal, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "../components/AnimationFunc";
import { motion } from "framer-motion";

// Sample model images with multiple images per model
const modelImages: { [key: string]: string[] } = {
  "audi-q5": ["/models/audi-q5.jpg"],
  "chevrolet-aveo": ["/models/chevrolet-aveo.jpg"],
  "chevrolet-captiva": ["/models/chevrolet-captiva.jpg", "/models/chevrolet-captiva (2).jpg"],
  "citroen-berlingo": ["/models/citroen-berlingo.jpg", "/models/citroen-berlingo (2).jpg"],
  "citroen-c3": ["/models/citroen-c3.jpg"],
  "citroen-c4": ["/models/citroen-c4.jpg"],
  "dacia-dokker": ["/models/dacia-dokker1.jpg"],
  "dacia-duster": ["/models/dacia-duster1.jpg", "/models/dacia-duster2.jpg", "/models/dacia-duster3.jpg", "/models/dacia-duster4.jpg", "/models/dacia-duster5.jpg", "/models/dacia-duster6.jpg", "/models/dacia-duster7.jpg", "/models/dacia-duster8.jpg", "/models/dacia-duster9.jpg", "/models/dacia-duster10.jpg", "/models/dacia-duster11.jpg", "/models/dacia-duster12.jpg", "/models/dacia-duster13.jpg", "/models/dacia-duster14.jpg"],
  "dacia-jogger": ["/models/dacia-jogger1.jpg"],
  "dacia-lodgy": ["/models/dacia-lodgy1.jpg", "/models/dacia-lodgy2.jpg", "/models/dacia-lodgy3.jpg"],
  "dacia-logan": ["/models/dacia-logan.jpg", "/models/dacia-logan2.jpg", "/models/dacia-logan3.jpg", "/models/dacia-logan4.jpg", "/models/dacia-logan5.jpg", "/models/dacia-logan6.jpg", "/models/dacia-logan7.jpg", "/models/dacia-logan8.jpg", "/models/dacia-logan9.jpg", "/models/dacia-logan10.jpg"],
  "dacia-sandero": ["/models/dacia-sandero1.jpg", "/models/dacia-sandero2.jpg", "/models/dacia-sandero3.jpg"],
  "renault-clio": ["/models/renault-clio.jpg", "/models/renault-clio (2).jpg", "/models/renault-clio (3).jpg", "/models/renault-clio (4).jpg", "/models/renault-clio (5).jpg"],
  "renault-megane": ["/models/renault-megane.jpg", "/models/renault-megane (2).jpg", "/models/renault-megane (3).jpg", "/models/renault-megane (4).jpg", "/models/renault-megane (5).jpg", "/models/renault-megane (6).jpg", "/models/renault-megane (7).jpg"],
  "renault-symbol": ["/models/renault-symbol.jpg", "/models/renault-symbol (2).jpg", "/models/renault-symbol (3).jpg", "/models/renault-symbol (4).jpg", "/models/renault-symbol (5).jpg", "/models/renault-symbol (6).jpg", "/models/renault-symbol (7).jpg", "/models/renault-symbol (8).jpg", "/models/renault-symbol (9).jpg"],
  "toyota-corolla": ["/models/toyota-corolla.jpg"],
  "toyota-hilux": ["/models/toyota-hilux.jpg", "/models/toyota-hilux (2).jpg"],
  "toyota-proace": ["/models/toyota-proace.jpg"],
  "bmw-x3": ["/models/bmw-x3.jpg"],
  "hyundai-bayon": ["/models/hyundai-bayon.jpg"],
  "hyundai-ix35": ["/models/hyundai-ix35.jpg"],
  "hyundai-tucson": ["/models/hyundai-tucson.jpg"],
};


const ModelPage: React.FC = () => {
  const { brandName, modelName } = useParams<{ brandName: string; modelName: string }>();
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
