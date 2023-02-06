import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>
);

// UPDATE: Yes, docs show I need some changes:

// TODO: Adapting a new react-pro-sidebar version which has some changes and I found notes from a prior issue.
//   The below might be needed. Also note: It was necessary to use "as" alias when importing "Sidebar" now since
//   I was already naming the component "Sidebar". I might rename the component but this is a minor issue.
//   I'm more concerned about: <ProSidebarProvider>
// <ProSidebarProvider>
//   <App />
// </ProSidebarProvider>;

