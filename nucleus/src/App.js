import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import SceneDashboard from "./scenes/dashboard";
import SceneOverview from "./scenes/overview";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoices";
// import ScenePrototype from "./scenes/prototype";
import SceneVehiclesElectric from "./scenes/vehicles-elec";
import SceneVehicleTypesByYear from "./scenes/vehicle-types";
// import Form from "./scenes/form";
// import Calendar from "./scenes/calendar";
// import FAQ from "./scenes/faq";
import SceneStream from "./scenes/stream";
// import Bar from "./scenes/bar";
// import Pie from "./scenes/pie";
// import Line from "./scenes/line";
// import Geography from "./scenes/geography";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<SceneDashboard />} />
              <Route path="/overview" element={<SceneOverview />} />
              {/*<Route path="/team" element={<Team />}></Route>*/}
              {/*<Route path="/contacts" element={<Contacts />}></Route>*/}
              {/*<Route path="/invoices" element={<Invoices />}></Route>*/}
              <Route path="/vehicles/electric" element={<SceneVehiclesElectric />}></Route>
              <Route path="/vehicles/types" element={<SceneVehicleTypesByYear />}></Route>
              {/*<Route path="/prototype" element={<ScenePrototype />}></Route>*/}
              {/*<Route path="/form" element={<Form />}></Route>*/}
              {/*<Route path="/calendar" element={<Calendar />}></Route>*/}
              {/*<Route path="/faq" element={<FAQ />}></Route>*/}
              <Route path="/stream" element={<SceneStream />}></Route>
              {/*<Route path="/bar" element={<Bar />}></Route>*/}
              {/*<Route path="/pie" element={<Pie />}></Route>*/}
              {/*<Route path="/line" element={<Line />}></Route>*/}
              {/*<Route path="/geography" element={<Geography />}></Route>*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

