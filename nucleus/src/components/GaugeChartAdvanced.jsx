import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import GaugeChart from "react-gauge-chart";


const GaugeChartAdvanced = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <GaugeChart
      textColor={colors.grey[300]}
      needleColor={colors.greenAccent[400]}
      needleBaseColor={colors.greenAccent[400]}
      animDelay={250}
      animDuration={3000}
      style={{ width: "12rem", }}
      marginInPercent="0.02"
      hideText="true"
      id="gauge-chart4"
      nrOfLevels={10}
      arcPadding={0.1}
      cornerRadius={3}
      percent={0.83}
      colors={[colors.blueAccent[800], colors.blueAccent[200],]}
    />
  );
};

export default GaugeChartAdvanced;

// https://www.npmjs.com/package/react-gauge-chart

