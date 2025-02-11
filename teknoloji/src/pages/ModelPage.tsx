import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Card, CardMedia, Modal, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "../components/AnimationFunc";
import { motion } from "framer-motion";

// Sample model images with multiple images per model
const modelImages: { [key: string]: string[] } = {
  "renault-clio": ["/models/clio.jpg", "/models/clio-side.jpg"],
  "renault-megane": ["/models/megane.jpg", "/models/megane-side.jpg"],
  "audi-a3": ["/models/audi-q5.jpg", "/models/audi-q5.jpg", "/models/audi-q5.jpg", "/models/audi-q5.jpg"],
  "bmw-3-series": ["/models/bmw-3series.jpg", "/models/bmw-3series-side.jpg"],
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
