import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MainContent: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
    <Typography variant="h4" component="h2" gutterBottom>
      Main Content
    </Typography>
    <Typography variant="body1" color="textSecondary">
      Discover Renault Teknoloji's innovative services.
    </Typography>
    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
      Learn More
    </Button>
  </Paper>
);

export default MainContent;