import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// See comments in docs and elsewhere about future upgrade of react-pro-sidebar and many changes that will bring.
// import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// UPDATE: Yes, docs show I need some changes:

// TODO: Eventually we will upgrade from 0.7.1 to 1.0.0 for react-pro-sidebar and then we will need this and many
//  other changes:
// <ProSidebarProvider>
//   <App />
// </ProSidebarProvider>;

