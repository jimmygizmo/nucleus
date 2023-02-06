import {Box, IconButton, Typography, useTheme} from "@mui/material";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
// https://mui.com/material-ui/material-icons/
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ForwardIcon from "@mui/icons-material/Forward";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "@mui/material";

// This page uses a trick to combine MUI Link styling (nice) with React Router Link
// navigation (nice). We import Link from MUI unchanged and the styling happens to it!
// We import React Router's Link as "RouterLink" .. then for the JSX transpiling trick ..
// we use the component={RouterLink} inside the Link and we get the React Router Link
// behavior. Fantastic!
// BONUS! Aligned troublesome tiny icon next to a link (vertically) by adding display="inline-flex" to containing
// box. I tried a lot of things and only this worked!! Looks MUCH better. I think I can fix smartmetal FAVORITE
// star icon with this, perhaps.
// RE other vertical alignment problems like in my banner:
// UPDATE: It could be that vertical-align only works for display: block. UPDATE: No it did not work.


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  return(
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* ---- SEARCH BAR ---- */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}><SearchIcon /></IconButton>
      </Box>

      {/* ---- BANNER ---- */}
      <Box
        border="1px solid"
        borderColor={colors.greenAccent[300]}
        borderRadius="4px"
        backgroundColor={colors.blueAccent[800]}
        width="60%"
        p="4px 16px"
        // sx-textAlign-center - the ONLY way I could align horiz was using sx. NOTHING will align vertically so far.
        // UPDATE: It could be that vertical-align only works for display: block. UPDATE: No. Did not work
        sx={{ textAlign: "center" }}
      >
        <Typography
          fontSize="0.8rem"
        >
          Welcome to The Nucleus Stack!&nbsp;&nbsp;
          <Link
            // IMPORTANT!!! display="inline-flex" here is what got the icon to align in the text line and not expand it!!!
            display="inline-flex"
            component={RouterLink}
            fontWeight="bold"
            to="/faq"
            color={colors.greenAccent[300]}
          >
            Learn more

            {/* Tried IconButton here but all it would add is hover and the alignment/spacing goes out of wack. */}
            <ForwardIcon
              fontSize="small"
              m="0"
              p="0"
            />
          </Link>
        </Typography>
      </Box>


      {/* ---- ICONS ---- */}
      <Box display="flex">
        <IconButton display="flex" onClick={colorMode.toggleColorMode}>
          { theme.palette.mode === "dark" ?
            ( <DarkModeOutlinedIcon /> ) : ( <LightModeOutlinedIcon /> )
          }
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

