import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia, CardContent } from "@mui/material";
import withLoading from "../components/withLoading"; // Import HOC
import { useTranslation } from "react-i18next";
import Section from "../components/AnimationFunc";


const Hakkimizda: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container sx={{ py: 6 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            {t("about_title")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t("about_subtitle")}
          </Typography>
        </Box>

        {/* Carousel Section */}
        <Carousel>
          {["/src/assets/hakkimizda/1.jpeg", "/src/assets/hakkimizda/2.jpeg",
          ].map((image, index) => (
            <Card key={index}>
              <CardMedia
                component="img"
                height="400"
                image={image}
                alt={`Services ${index + 1}`}
              />
            </Card>
          ))}
        </Carousel>

        {/* History Section */}
        {/* <Paper elevation={3} sx={{ p: 4, mb: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            {t("history_title")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("history_text")}
          </Typography>
        </Paper> */}

        {/* Expertise Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            {t("expertise_title")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("expertise_text1")}
          </Typography>
          {/* <Typography variant="body1" paragraph>
            {t("expertise_text2")}
          </Typography> */}
        </Paper>

        {/* Facility Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            {t("facility_title")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("facility_text")}
          </Typography>
        </Paper>

        {/* Vision & Mission Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                {t("vision_title")}
              </Typography>
              <Typography variant="body1">
                {t("vision_text")}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                {t("mission_title")}
              </Typography>
              <Typography variant="body1">
                {t("mission_text")}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};
export default withLoading(Hakkimizda);
