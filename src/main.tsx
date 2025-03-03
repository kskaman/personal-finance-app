import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DataProvider from "./context/DataProvider.tsx";
import CustomThemeProvider from "./context/CustomThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomThemeProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </CustomThemeProvider>
  </StrictMode>
);
