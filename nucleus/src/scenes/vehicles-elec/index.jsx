import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import * as Config from "../../config.js";
import { Alert, AlertTitle } from '@mui/material';


const viewName = "VehicleElectric";

const SceneVehiclesElectric = () => {
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
      //       vehiclesElectric:
      //         {
      //           "_id": "63d7379a4b0cac4a70763fc9",
      //           "created": "2023-01-30T03:20:58.307Z",
      //           "updated": "2023-01-30T03:20:58.307Z",
      //           "brand": "_",
      //           "model": "_",
      //           "accel": 0,
      //           "topspeed": 0,
      //           "range": 0,
      //           "efficiency": 0,
      //           "fastcharge": "_",
      //           "rapidcharge": "_",
      //           "powertrain": "_",
      //           "plug": "_",
      //           "body": "_",
      //           "segment": "_",
      //           "seats": 0,
      //           "price": 0,
      //         },
      //     },
      // },
    );

  const columns = [
    // {
    //   field: "_id",
    //   headerName: "ID",
    //   flex: 0.5,
    // },
    // {
    //   field: "created",
    //   headerName: "Created",
    // },
    // {
    //   field: "updated",
    //   headerName: "Updated",
    // },
    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
    },
    {
      field: "model",
      headerName: "Model",
      flex: 2,
      cellClassName: "cell--green-accent--aa",
    },
    {
      field: "accel",
      headerName: "Acceleration",
      flex: 0.7,
    },
    {
      field: "topspeed",
      headerName: "Speed Max",
      flex: 0.7,
    },
    {
      field: "range",
      headerName: "Range",
      flex: 0.7,
    },
    {
      field: "efficiency",
      headerName: "Efficency",
      flex: 0.7,
    },
    {
      field: "fastcharge",
      headerName: "Fast Charge",
      flex: 0.7,
    },
    {
      field: "rapidcharge",
      headerName: "Rapid Charge",
      flex: 0.7,
    },
    {
      field: "powertrain",
      headerName: "Powertrain",
      flex: 0.7,
    },
    {
      field: "plug",
      headerName: "Plug",
      flex: 1,
    },
    {
      field: "body",
      headerName: "Body",
      flex: 1,
    },
    // {
    //   field: "segment",
    //   headerName: "Segment",
    //   flex: 0.5,
    // },
    {
      field: "seats",
      headerName: "Seats",
      flex: 0.5,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.9,
    },
  ];


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
          query ViewQueryNameVehicleElectric {
            vehiclesElectric {
              _id
              created
              updated
              brand
              model
              accel
              topspeed
              range
              efficiency
              fastcharge
              rapidcharge
              powertrain
              plug
              body
              segment
              seats
              price
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


  return(
    // For the sx in the Box below, the specific MUI class can be identified using Browser Developer Tools
    // and then can be MODIFIED IN THE SX:
    <Box m="20px">
      <Header
        title="Electric Vehicles 2020 - Europe"
        subTitle="New electric vehicles for sale in 2020 in Eastern Europe (Poland)"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .cell--green-accent--aa": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
          "& .MuiDataGrid-footerContainer": { backgroundColor: colors.blueAccent[700], borderTop: "none" },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`, borderTop: "none" },
        }}
      >
        <DataGrid
          getRowId={(row) => row._id}
          // rows={ SEE useState comments for a valid fake row to use here in this view for debug }
          rows={ compData.data.vehiclesElectric }
          columns={ columns }
          components={{ Toolbar: GridToolbar }}
          density="compact"
          initialState={{
            sorting: {
              sortModel: [{ field: "accel", sort: "asc" }],
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SceneVehiclesElectric;

