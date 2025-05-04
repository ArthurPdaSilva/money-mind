import { CssBaseline, ThemeProvider } from "@mui/material";
import { Home } from "./pages/Home";
import { theme } from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};
