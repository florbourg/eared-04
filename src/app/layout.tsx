"use client";
import { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider, useThemeContext } from "@/ui/ThemeContext";
import { normalTheme, highContrastTheme } from "@/ui/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "@/ui/components/Navbar";
import { Footer } from "@/ui/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeProvider>
  );
}

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isHighContrast } = useThemeContext();

  return (
    <html lang="en">
      <body>
        <MUIThemeProvider
          theme={isHighContrast ? highContrastTheme : normalTheme}
        >
          <CssBaseline />
          <Navbar />
          {children}
          <Footer />
        </MUIThemeProvider>
      </body>
    </html>
  );
};
