import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Box
        width={"100%"}
        backgroundColor={theme.palatte.background.alt}
        p={"1rem 6%"}
        textAlign={"center"}
      >
        <Typography>
          SociaPedia
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreen? "50%" : "93%"}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={"1.5rem"}
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight={"500"} variant="h5" sx={{mb:"1.5rem"}}>
          Welcome to Socipedia, the Social Media for Sociaopaths!
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
