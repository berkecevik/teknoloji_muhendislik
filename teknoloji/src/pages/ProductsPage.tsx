import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Dialog } from "@mui/material";
import Section from "../components/AnimationFunc";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// Sample Product Data for Each Brand
const productData: Record<string, { name: string; image: string }[]> = {
  "auto-hak": [
    { name: "Auto Hak Çeki Demiri 1", image: "/src/assets/products/autohak1.png" },
    { name: "Auto Hak Çeki Demiri 2", image: "/src/assets/products/autohak2.png" },
  ],
  "galia": [
    { name: "Galia Çeki Demiri 1", image: "/src/assets/products/galia1.jpg" },
    { name: "Galia Çeki Demiri 2", image: "/src/assets/products/galia2.jpg" },
  ],
  "gdw": [
    { name: "GDW Çeki Demiri 1", image: "/src/assets/products/gdw1.jpg" },
    { name: "GDW Çeki Demiri 2", image: "/src/assets/products/gdw2.jpg" },
  ],
  "imiola": [
    { name: "Imiola Çeki Demiri 1", image: "/src/assets/products/imiola1.jpg" },
    { name: "Imiola Çeki Demiri 2", image: "/src/assets/products/imiola2.jpg" },
  ],
  "oris": [
    { name: "Oris Çeki Demiri 1", image: "/src/assets/products/oris1.jpg" },
    { name: "Oris Çeki Demiri 2", image: "/src/assets/products/oris2.jpg" },
  ],
  "steinhof": [
    { name: "Steinhof Çeki Demiri 1", image: "/src/assets/products/steinhof1.jpg" },
    { name: "Steinhof Çeki Demiri 2", image: "/src/assets/products/steinhof2.jpg" },
  ],
};

const ProductsPage: React.FC = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const formattedBrandName = brandName?.toLowerCase().replace(/\s+/g, "-") || "";
  const products = productData[formattedBrandName] || [];
  const { t } = useTranslation(); 
  // State for modal zoom
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section>
      <Container sx={{ py: 6, mt: 2 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          {brandName?.toUpperCase()} {t("productpage_title")}
        </Typography>

        {products.length === 0 ? (
          <Typography textAlign="center" color="text.secondary">
            {t("product_notfound")}
          </Typography>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      boxShadow: 5,
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "0.3s",
                      "&:hover": { boxShadow: 10 },
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedImage(product.image)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" textAlign="center">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Zoomed Image Modal */}
        <Dialog open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)}>
          {selectedImage && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Zoomed Product"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  display: "block",
                  margin: "auto",
                  borderRadius: "8px",
                }}
              />
            </motion.div>
          )}
        </Dialog>
      </Container>
    </Section>
  );
};

export default ProductsPage;
