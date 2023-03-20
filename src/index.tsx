import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//import { Provider } from 'react-redux';
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import "./assets/main.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
