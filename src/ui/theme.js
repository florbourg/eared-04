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
    color: "#262627",
    h1: {
      fontSize: '14px',
      lineHeight: '16px',
      marginBottom: '20px',
      color: '#DF3675',
    },
    h2: {
      fontSize: '30px',
      lineHeight: '34px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '22px',
      lineHeight: '28px',
    },
    h5: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    h6: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '16px',
      lineHeight: 1.75,
      fontWeight: 600,
    }

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
      primary: "#262627", 
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
