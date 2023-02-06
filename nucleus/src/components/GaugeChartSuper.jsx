import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import GaugeChart from "react-gauge-chart";


const GaugeChartSuper = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <GaugeChart
      textColor={colors.grey[300]}
      needleColor={colors.greenAccent[400]}
      needleBaseColor={colors.greenAccent[400]}
      animDelay={300}
      animDuration={3000}
      style={{ width: "12rem", }}
      marginInPercent="0.02"
      hideText="true"
      id="gauge-chart5"
      nrOfLevels={420}
      arcsLength={[0.3, 0.5, 0.2]}
      arcPadding={0.02}
      percent={0.12}
      colors={[colors.blueAccent[300], colors.blueAccent[500], "orange",]}
    />
  );
};

export default GaugeChartSuper;

// https://www.npmjs.com/package/react-gauge-chart

// This style helped the height but alignments and sizes went inside inside this component when the window was
// resized with this in place:  style={{ width: "90%", }}
// Generall, react-gauge-chart is weird with resizing the browser. This breaks in Safari with the width style.
// Also, Firefox in all cases has serious resizing problems with the entire MUI dashboard and I'm not sure if
// this is caused by react-gauge-charts. TODO: TEST FIREFOX RESIZE WITH OLD DASH WITH NO GAUGES.
// UPDATE: I tried a style of width 80% on the CONTAINING Box of this Gauge in the dash and had almost identical
// effect. I would say GaugeChart does not like non-default percentage widths. The default it has is 100% according
// to docs. TODO: But we need a way to fix the height/size problem. At wide browser widths, the gauges get too tall.
// I already increased the row height from 140px to 180px

