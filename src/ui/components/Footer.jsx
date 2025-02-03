"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        top: "auto",
        bottom: 0,
        background: "#262626",
        padding: "10px",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
      }}
    >
      <Typography variant="h4" color={"#3CAF97"} fontWeight={"600"} gutterBottom>
        Contáctanos
      </Typography>
      <Typography variant="body1" color={"#3CAF97"} margin={0}>
        talleres@yotambien.com.ar
      </Typography>
      <Typography variant="body1" color={"#3CAF97"}>
        +54 (123) 456 - 789
      </Typography>
      <Typography variant="body1" color={"#3CAF97"}>
        Buenos Aires, Argentina
      </Typography>

      <Typography variant="body1" color={"#3CAF97"} fontSize={12}>
        Información legal - ©YoTambien! 2025
      </Typography>
    </AppBar>
  );
};
