import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ElectricCarOutlinedIcon from '@mui/icons-material/ElectricCarOutlined';
// import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

// Other icons being considered for things like a quick/easy logo or another dash view:
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
// import SpeedIcon from '@mui/icons-material/Speed';
// import BrightnessHighOutlinedIcon from '@mui/icons-material/BrightnessHighOutlined';
// import BrightnessLowOutlinedIcon from '@mui/icons-material/BrightnessLowOutlined';

// TODO: sidebar styling of active and maybe also active during hover are not correct and it could be a problem in
// recent MUI or sidebar. this thread near the end might have a good solution until MUI fixes this. The issue needs testing
// and clarification. Most noticeable when switching to light mode, back and forth, with a data grid link active.
// UPDATE: Maybe the issue is gone now with a higher sidebar version.

// A sub/child component in the same file.
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100]}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ isCollapsed, setIsCollapsed ] = useState(false);
  const [ selected, setSelected ] = useState("Dashboard");

  return(
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important"
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* ---- LOGO AND MENU ICON ---- */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={ isCollapsed ?
              <HubOutlinedIcon
                sx={{
                  fontSize: "2em",
                  color: colors.blueAccent[300],
                }}
              />
              : undefined }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {
              !isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  ml="15px"
                  sx={{
                    "& .mainlogo": { fontFamily: "Racing Sans One" },
                  }}
                >
                  {/* IMPORTANT: Custom Main Logo FONT requires 3 things: 1. Class .mainlogo added to global css. */}
                  {/* 2. Special sx tag and & operator in the containing Box - important!  3. className of mainlogo  */}
                  {/* in the actual Typography element. */}
                  <Typography
                    variant="h2"
                    color={colors.blueAccent[300]}
                    className="mainlogo"
                  >
                    <strong>Nucleus</strong>
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <HubOutlinedIcon
                      sx={{
                        fontSize: "1.4em",
                        color: colors.blueAccent[300],
                      }}
                    />
                  </IconButton>
                </Box>
              )
            }
          </MenuItem>
          {/* ---- END LOGO AND MENU ICON ---- */}
          {/* ---- USER ---- */}
          {
            !isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../img/usergreen.svg`}
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      borderColor: colors.grey[900],
                      border: "1px solid"
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0"}}
                  >
                    Admin User
                  </Typography>
                  <Typography
                    variant="h5"
                    color={colors.greenAccent[400]}
                  >Status: Online</Typography>
                </Box>
              </Box>
            )
          }
          {/* ---- END USER ---- */}

          {/* ---- MENU ITEMS ---- */}
          <Box paddingLeft={ isCollapsed ? undefined : "10%" } >
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px", fontStyle: "italic"}}
            >
              Grids
            </Typography>
            <Item
              title="Electric Vehicles"
              to="/vehicles/electric"
              icon={<ElectricCarOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Vehicle Types Yearly"
              to="/vehicles/types"
              icon={<FactoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px", fontStyle: "italic"}}
            >
              Charts
            </Typography>
            <Item
              title="Stream Chart"
              to="/stream"
              icon={<SsidChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px", fontStyle: "italic"}}
            >
              Admin
            </Typography>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px", fontStyle: "italic"}}
            >
              Dev
            </Typography>
            <Item
              title="Overview Dashboard"
              to="/overview"
              icon={<VisibilityOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/*<Item*/}
            {/*  title="Prototype Report"*/}
            {/*  to="/prototype"*/}
            {/*  icon={<ArchitectureOutlinedIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}
            {/*<Item*/}
            {/*  title="Manage Team"*/}
            {/*  to="/team"*/}
            {/*  icon={<PeopleOutlinedIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}
            {/*<Item*/}
            {/*  title="Contacts Information"*/}
            {/*  to="/contacts"*/}
            {/*  icon={<ContactsOutlinedIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}
            {/*<Item*/}
            {/*  title="Invoices Balances"*/}
            {/*  to="/invoices"*/}
            {/*  icon={<ReceiptOutlinedIcon />}*/}
            {/*  selected={selected}*/}
            {/*  setSelected={setSelected}*/}
            {/*/>*/}

          </Box>

        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

