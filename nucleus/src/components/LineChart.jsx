import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";


const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <ResponsiveLine
      motionConfig="slow"
      data={data}
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
              stroke: colors.grey[100],
            },  // line
          },  // domain
          legend: {
            text: {
              fill: colors.grey[100],
            },  // text
          },  // legend
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },  // line
            text: {
              fill: colors.grey[100],
            },  // text
          },  // ticks
        },  // axis
        legends: {
          text: {
            fill: colors.grey[100],
          },  // text
        },  // legends
      }}
      colors={{ scheme: 'paired' }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60, }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickValues: isDashboard ? 5 : undefined,  // limit ticks for dash display
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      enableGridX={ !isDashboard }  // grid lines will show in large view and with custom theme color for nice faint
      enableGridY={ !isDashboard }
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              }
            }
          ]
        }
      ]}
    />
  );
};

export default LineChart;

