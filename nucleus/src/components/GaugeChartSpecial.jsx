import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import GaugeChart from "react-gauge-chart";


const GaugeChartSpecial = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <GaugeChart
      textColor={colors.grey[300]}
      needleColor={colors.greenAccent[400]}
      needleBaseColor={colors.greenAccent[400]}
      animDelay={350}
      animDuration={3000}
      style={{ width: "12rem", }}
      marginInPercent="0.02"
      hideText="true"
      id="gauge-chart3"
      nrOfLevels={30}
      arcWidth={0.3}
      percent={0.35}
      colors={[colors.blueAccent[400], "#ff0022"]}
    />
  );
};

export default GaugeChartSpecial;

// https://www.npmjs.com/package/react-gauge-chart

