import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { ResponsiveStream } from "@nivo/stream";
import { tokens } from "../theme";
import * as Config from "../config.js";
import { Alert, AlertTitle } from '@mui/material';

const viewName = "VehicleTypesByYearStream";

const StreamChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ compData, setCompData ] = useState(
    {
      loading: true,
    },
    // First render requires minimal valid state which should normally be the loading structure.
    // Use this normally disabled single first record to show a single 'empty' row initially instead.
    // In either case, loading normally happens in milliseconds and either first render option is
    // usually very short-lived. The fake row is more intended for testing or demo purposes, but
    // might be useful for cases needing more than just a 'loading' display at this initial render.
    // NOTE: LOADING state must also be set similarly at the start of the useEffect.
    // {
    //   data:
    //     {
    //       vehicleTypesYears:
    //         [
    //           {
    //             "_id": "63d7379a4b0cac4a70763fc7",
    //             "created": "2023-01-31T03:21:57.307Z",
    //             "updated": "2023-01-31T03:21:57.307Z",
    //             "year": 0,
    //             "cars": 0,
    //             "vans": 0,
    //             "suvs": 0,
    //             "pickups": 0,
    //             "total": 0,
    //           },
    //         ]
    //     }
    // },
  );


  useEffect(() => {
    const newCompData = compData;
    newCompData.loading = true;
    setCompData(newCompData);
    console.log("In useEffect - about to fetch for GQL query.");
    fetch(Config.apolloUri, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query ViewQueryNameVehicleTypesByYear {
            vehicleTypesYears {
              _id
              created
              updated
              year
              cars
              vans
              suvs
              pickups
              total
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((responseJson) => {
          console.log(viewName + " - responseJson:\n" + JSON.stringify(responseJson));
          setCompData( responseJson );
        }
      );
  },[]);


  if ( compData.loading ) return(
    <Alert severity="info">
      <AlertTitle>Loading ...</AlertTitle>
      Please wait a moment.
    </Alert>
  );
  if ( compData.errors ) return(
    <Alert severity="error">
      <AlertTitle>Oops! Something went wrong.</AlertTitle>
      Error message:&nbsp; <strong>{ JSON.stringify( compData.errors[0].message ) }</strong>
      <br /><br /><br />
      Full error details:&nbsp; <strong>{ JSON.stringify( compData.errors[0] ) }</strong>
    </Alert>
  );
  if ( !compData.data ) return(
    <Alert severity="error">
      <AlertTitle>Oops! Something went wrong.</AlertTitle>
      Error details:&nbsp; <strong>useQuery return value: undefined</strong>
    </Alert>
  );

  const tickArray = compData.data.vehicleTypesYears.map(
    (rec) => rec.year
  ).sort((a, b) => a - b)
  console.log(tickArray)


  return(

    <ResponsiveStream
      motionConfig="slow"
      data={ compData.data.vehicleTypesYears }
      // data={ SEE useState comments for valid fake data to use here in this view for debug }
      keys={["cars", "vans", "suvs", "pickups",]}
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
      // indexBy="year"
      // valueScale={{ type: 'linear' }}
      // indexScale={{ type: 'band', round: true }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60, }}
      axisTop={null}
      axisRight={null}
      axisBottom={ isDashboard ? null : {
        orient: 'bottom',
        tickSize: 5,
        // tickValues: tickArray,
        // THIS IS A HACK. Although tickArray is good, they all display at the origin.
        // We get lucky since we can easily may the years from the integer sequence. BUT,
        // if the year range changes in the data, this breaks. TODO: Fix tick display problem.
        format: (value) => value + 1975,
        tickPadding: 5,
        tickRotation: 90,
        legend: isDashboard ? undefined : "Year of Manufacture",
        legendOffset: 46,
        legendPosition: "middle",
      }}
      axisLeft={ isDashboard ? null : {
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Vehicles Manufactured in Thousands (* 1000)",
        legendOffset: -52,
        legendPosition: "middle",
      }}
      enableGridX={true}
      enableGridY={true}
      offsetType="diverging"
      colors={{ scheme: "paired" }}
      fillOpacity={0.85}
      borderColor={{ theme: "background" }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#2c998f',
          size: 4,
          padding: 2,
          stagger: true,
        },
        {
          id: 'squares',
          type: 'patternSquares',
          background: 'inherit',
          color: '#e4c912',
          size: 6,
          padding: 2,
          stagger: true,
        },
      ]}
      // fill={[
      //   {
      //     match: {
      //       id: 'suvs',
      //     },
      //     id: 'dots',
      //   },
      //   {
      //     match: {
      //       id: 'cars',
      //     },
      //     id: 'squares',
      //   },
      // ]}
      dotSize={8}
      dotColor={{ from: 'color' }}
      dotBorderWidth={2}
      dotBorderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.7
          ]
        ]
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999999",
          symbolSize: 12,
          symbolShape: "square",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000"
              }
            }
          ]
        }
      ]}
    />
  );
};

export default StreamChart;



// return(
//   <ResponsiveStream
//
//     enableGridX={true}
//     enableGridY={false}
//     offsetType="silhouette"
//     // --------------------------------
//     // EVERYTHING BELOW HERE FROM ORIGINAL BAR
//     // ITEMS DISABLED BELOW SINCE ORIGINAL BAR: indexBy, valueScale, indexScale
//     motionConfig="slow"
//     data={ data }
//     theme={{
//       // Good light/dark but faint grid lines required grid-line-stroke here and custom theme color added.
//       grid: {
//         line: {
//           stroke: colors.faintGridLines,
//         },  // line
//       },  // grid
//       axis: {
//         domain: {
//           line: {
//             stroke: colors.grey[100]
//           },  // line
//         },  // domain
//         legend: {
//           text: {
//             fill: colors.grey[100]
//           },  // text
//         },  // legend
//         ticks: {
//           line: {
//             stroke: colors.grey[100],
//             strokeWidth: 1
//           },  // line
//           text: {
//             fill: colors.grey[100]
//           },  // text
//         },  // ticks
//       },  // axis
//       legends: {
//         text: {
//           fill: colors.grey[100]
//         },  // text
//       },  // legends
//     }}
//     keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'tires' ]}
//     // indexBy="country"
//     margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//     padding={0.3}
//     // valueScale={{ type: 'linear' }}
//     // indexScale={{ type: 'band', round: true }}
//     colors={{ scheme: 'set3' }}
//     defs={[
//       {
//         id: 'dots',
//         type: 'patternDots',
//         background: 'inherit',
//         color: '#38bcb2',
//         size: 4,
//         padding: 1,
//         stagger: true,
//       },
//       {
//         id: 'lines',
//         type: 'patternLines',
//         background: 'inherit',
//         color: '#eed312',
//         rotation: -45,
//         lineWidth: 6,
//         spacing: 10,
//       }
//     ]}
//     // The following "fill" array of match/id objects is not present in the tut.
//     // (I think he clicked it off in the GUI?)
//     fill={[
//       {
//         match: { id: 'burger', },
//         id: 'dots'
//       },
//       {
//         match: { id: 'kebab', },
//         id: 'dots'
//       },
//       {
//         match: { id: 'tires', },
//         id: 'lines'
//       },
//       {
//         match: { id: 'hot dog', },
//         id: 'lines'
//       },
//     ]}
//     borderColor={{
//       from: 'color',
//       modifiers: [ [ 'darker',1.6 ] ],
//     }}
//     axisTop={null}
//     axisRight={null}
//     axisBottom={{
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: isDashboard ? undefined : "country",
//       legendPosition: 'middle',
//       legendOffset: 32,
//     }}
//     axisLeft={{
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: isDashboard ? undefined : "food",
//       legendPosition: 'middle',
//       legendOffset: -40,
//     }}
//     labelSkipWidth={12}
//     labelSkipHeight={12}
//     labelTextColor={{
//       from: 'color',
//       modifiers: [ [ 'darker', 1.6 ] ],
//     }}
//     legends={[
//       {
//         dataFrom: 'keys',
//         anchor: 'bottom-right',
//         direction: 'column',
//         justify: false,
//         translateX: 120,
//         translateY: 0,
//         itemsSpacing: 2,
//         itemWidth: 100,
//         itemHeight: 20,
//         itemDirection: 'left-to-right',
//         itemOpacity: 0.85,
//         symbolSize: 20,
//         effects: [
//           {
//             on: 'hover',
//             style: {
//               itemOpacity: 1,
//             }
//           }
//         ]
//       }
//     ]}
//     role="application"
//     ariaLabel="Nivo bar chart demo"
//     barAriaLabel={function (e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
//   />
// );

