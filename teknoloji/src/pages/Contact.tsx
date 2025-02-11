import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import withLoading from "../components/withLoading";
import { useTranslation } from "react-i18next";
import Section from "../components/AnimationFunc"; // Import the animation component

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section> {/* Wrap content inside Section for animation */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          {t("contact_title")}
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ display: "grid", gap: 2 }}>
          <TextField label={t("label_1")} variant="outlined" fullWidth />
          <TextField label={t("label_2")} variant="outlined" fullWidth type="email" />
          <TextField label={t("label_3")} variant="outlined" fullWidth multiline rows={4} />
          <Button variant="contained" color="primary" type="submit">
            {t("button_send")}
          </Button>
        </Box>
      </Container>
    </Section>
  );
};

export default withLoading(Contact);
