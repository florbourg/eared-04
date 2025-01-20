"use client";
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const montserrat = Montserrat({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
    color: "#212121",
  },
  palette: {
    primary: {
      main: "#DF3675", 
      contrastText: "#ffffff", 
    },
    secondary: {
      main: "#3CAF97", 
      contrastText: "#ffffff", 
    },
    text: {
      primary: "#212121", 
      secondary: "#757575", 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#3CAF97",
          },
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: "#DF3675",
          },
        },
        containedInfo: {
          backgroundColor: "#F5F5F5",
          color: "#4D4D4D",
          "&:hover": {
            backgroundColor: "#D3D3D3",
          },
        },
        text: {
          color: "#DF3675",
          "&:hover": {
            backgroundColor: "#FCE4EC",
          },
        },
      },
      variants: [
        {
          props: { variant: "dark" },
          style: {
            backgroundColor: "#333333", 
            color: "#ffffff", 
            "&:hover": {
              backgroundColor: "#727272", 
            },
            "&.Mui-disabled": {
              backgroundColor: "#E1E1E1", 
              color: "#7D7D7D", 
            },
          },
        },
      ],
    },
  },
});

export default theme;
