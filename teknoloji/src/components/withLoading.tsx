import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Import your custom loading animation
import loadingAnimation from "../assets/loadings.gif"; // Adjust the path accordingly

const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); // Stop loading after 2 seconds
      }, 2000); // Adjust duration as needed

      return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (loading) {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: theme.palette.background.default,
          }}
        >
          <img
            src={loadingAnimation}
            alt="Loading..."
            style={{ width: "300px", height: "300px" }} // Adjust size
          />
        </Box>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
