import router from "router";
// import "./App.css";
import { RouterProvider } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  return (
      <ThemeProvider theme={theme}>
    <RouterProvider router={router}>
        <CssBaseline />
        <div className="App"></div>
    </RouterProvider>
      </ThemeProvider>
  );
}

export default App;
