import { ThemeProvider } from "@mui/material/styles";
import theme from "../ui/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "../ui/components/Navbar";
import { Footer } from "../ui/components/Footer";

export const metadata = {
  title: "SPA - #04 EARED Personal Proyect",
  description:
    "Proyecto personal para el master de Accesibilidad Digital - Flor Bourg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
