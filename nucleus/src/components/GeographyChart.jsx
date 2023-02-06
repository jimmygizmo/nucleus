import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData as data } from "../data/mockData";


const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <ResponsiveChoropleth
      data={ data }
      features={ geoFeatures.features }
      theme={{
        tooltip: {
          container: {
            background: colors.blueAccent[800]
          }
        },
        // Good light/dark but faint grid lines required grid-line-stroke here and custom theme color added.
        grid: {
          line: {
            stroke: colors.faintGridLines,
          },  // line
        },  // grid
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100]
            },  // line
          },  // domain
          legend: {
            text: {
              fill: colors.grey[100]
            },  // text
          },  // legend
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1
            },  // line
            text: {
              fill: colors.grey[100]
            },  // text
          },  // ticks
        },  // axis
        legends: {
          text: {
            fill: colors.grey[100]
          },  // text
        },  // legends
      }}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      // colors="nivo"  // won't event use a color theme for now - looks nice without
      domain={[ 0, 1000000 ]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={ isDashboard ? 40 : 150 }
      projectionTranslation={ isDashboard ? [ 0.49, 0.6 ] : [ 0.5, 0.5 ] }
      projectionRotation={[ 0, 0, 0 ]}
      // Tut does not have grid lines but I like them. Same way I did for line chart.
      enableGraticule={ !isDashboard}
      graticuleLineColor={ colors.faintGridLines }
      borderWidth={1.0}
      // borderColor="#ffffff"  // tut makes white but I like nivos near black color:
      borderColor="#152538"
      legends={
        !isDashboard ?
          [
            // Me: hover-itemTextColor is custom theme color. tut pure white = bad.
            {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: colors.grey[100],
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: colors.contrastMax,
                    itemOpacity: 1
                  }
                }
              ]
            },
          ] : undefined
      }  // legends
    />
  );
};

export default GeographyChart;


// defs removed:
// defs={[
//     {
//       id: 'dots',
//       type: 'patternDots',
//       background: 'inherit',
//       color: '#38bcb2',
//       size: 4,
//       padding: 1,
//       stagger: true
//     },
// {
//   id: 'lines',
//     type: 'patternLines',
//   background: 'inherit',
//   color: '#eed312',
//   rotation: -45,
//   lineWidth: 6,
//   spacing: 10
// },
// {
//   id: 'gradient',
//     type: 'linearGradient',
//   colors: [
//   {
//     offset: 0,
//     color: '#000'
//   },
//   {
//     offset: 100,
//     color: 'inherit'
//   }
// ]
// }
// ]}
//
// fill removed:
// fill={[
//     {
//       match: {
//         id: 'CAN'
//       },
//       id: 'dots'
//     },
// {
//   match: {
//     id: 'CHN'
//   },
//   id: 'lines'
// },
// {
//   match: {
//     id: 'ATA'
//   },
//   id: 'gradient'
// }
// ]}