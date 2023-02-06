import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";


const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <ResponsiveBar
      motionConfig="slow"
      data={ data }
      keys={[ 'windshield', 'wipers', 'battery', 'tires' ]}
      enableLabel={ !isDashboard }
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
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'paired' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        }
      ]}
      // The following "fill" array of match/id objects is not present in the tut.
      // (I think he clicked it off in the GUI?)
      // fill={[
      //   {
      //     match: { id: 'wipers', },
      //     id: 'dots'
      //   },
      //   {
      //     match: { id: 'battery', },
      //     id: 'dots'
      //   },
      //   {
      //     match: { id: 'tires', },
      //     id: 'lines'
      //   },
      //   {
      //     match: { id: 'windshield', },
      //     id: 'lines'
      //   },
      // ]}
      borderColor={{
        from: 'color',
        modifiers: [ [ 'darker',1.6 ] ],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Country",
        legendPosition: 'middle',
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Yearly Volume in Thousands (* 1000)",
        legendPosition: 'middle',
        legendOffset: -44,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [ [ 'darker', 1.6 ] ],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              }
            }
          ]
        }
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
  );
};

export default BarChart;

