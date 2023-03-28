import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

//import { Provider } from 'react-redux';
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import "./assets/main.css";

const container = document.getElementById("root") as HTMLElement;

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
