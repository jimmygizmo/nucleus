import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import GaugeChart from "react-gauge-chart";


const GaugeChartBasic = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <GaugeChart
      textColor={colors.grey[300]}
      needleColor={colors.greenAccent[400]}
      needleBaseColor={colors.greenAccent[400]}
      animDelay={200}
      animDuration={3000}
      style={{ width: "12rem", }}
      marginInPercent="0.02"
      hideText="true"
      id="gauge-chart2"
      nrOfLevels={20}
      percent={0.67}
      colors={[colors.blueAccent[800], colors.blueAccent[200],]}
    />
  );
};

export default GaugeChartBasic;

// https://www.npmjs.com/package/react-gauge-chart

