import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import TerminalIcon from '@mui/icons-material/Terminal';
import BarChart from "../../components/BarChart";
import GaugeChartBasic from "../../components/GaugeChartBasic";
import GaugeChartAdvanced from "../../components/GaugeChartAdvanced";
import GaugeChartSpecial from "../../components/GaugeChartSpecial";
import GaugeChartSuper from "../../components/GaugeChartSuper";
// import PieChart from "../../components/PieChart";  // TODO: Maybe use this in place of the large ProgressCircle
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";


const SceneOverview = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Overview - Alternate Dashboard"
          subTitle="Custom dashboard with data visualization and mini apps" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10, 20px",
            }}
          >
            <TerminalIcon sx={{ mr: "10px" }} />CONSOLE SESSION</Button>
        </Box>
      </Box>

      {/* -------- GRID -------- */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="20px"
      >


        {/* -------- ROW 1 -------- */}

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Box width="200px" m="0" pt="10px">
              <GaugeChartBasic />
            </Box>
            <Box width="200px" m="0" ml="10px">
              <Typography variant="h5" fontWeight="600" sx={{ mt: "15px", mb: "15px" }}>
                Battery: &nbsp;&nbsp;67%
              </Typography>
            </Box>
          </Box>
        </Box>
        {/*<Box*/}
        {/*  gridColumn="span 3"*/}
        {/*  backgroundColor={colors.primary[400]}*/}
        {/*  display="flex"*/}
        {/*  alignItems="center"*/}
        {/*  justifyContent="center"*/}
        {/*>*/}
        {/*  <StatBox*/}
        {/*    title="12,361"*/}
        {/*    subTitle="Emails Sent"*/}
        {/*    progress="0.69"*/}
        {/*    increase="+14%"*/}
        {/*    icon={*/}
        {/*      <EmailIcon*/}
        {/*        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}*/}
        {/*      />}*/}
        {/*  />*/}
        {/*</Box>*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Box width="200px" m="0" pt="10px">
              <GaugeChartAdvanced />
            </Box>
            <Box width="200px" m="0" ml="10px">
              <Typography variant="h5" fontWeight="600" sx={{ mt: "15px", mb: "15px" }}>
                Efficiency: &nbsp;&nbsp;83%
              </Typography>
            </Box>
          </Box>
        </Box>
        {/*<Box*/}
        {/*  gridColumn="span 3"*/}
        {/*  backgroundColor={colors.primary[400]}*/}
        {/*  display="flex"*/}
        {/*  alignItems="center"*/}
        {/*  justifyContent="center"*/}
        {/*>*/}
        {/*  <StatBox*/}
        {/*    title="431,225"*/}
        {/*    subTitle="Sales"*/}
        {/*    progress="0.54"*/}
        {/*    increase="+21%"*/}
        {/*    icon={*/}
        {/*      <PointOfSaleIcon*/}
        {/*        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}*/}
        {/*      />}*/}
        {/*  />*/}
        {/*</Box>*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Box width="200px" m="0" pt="10px">
              <GaugeChartSuper />
            </Box>
            <Box width="200px" m="0" ml="10px">
              <Typography variant="h5" fontWeight="600" sx={{ mt: "15px", mb: "15px" }}>
                Boost: &nbsp;&nbsp;12%
              </Typography>
            </Box>
          </Box>
        </Box>
        {/*<Box*/}
        {/*  gridColumn="span 3"*/}
        {/*  backgroundColor={colors.primary[400]}*/}
        {/*  display="flex"*/}
        {/*  alignItems="center"*/}
        {/*  justifyContent="center"*/}
        {/*>*/}
        {/*  <StatBox*/}
        {/*    title="32,441"*/}
        {/*    subTitle="New Clients"*/}
        {/*    progress="0.30"*/}
        {/*    increase="+5%"*/}
        {/*    icon={*/}
        {/*      <PersonAddIcon*/}
        {/*        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}*/}
        {/*      />}*/}
        {/*  />*/}
        {/*</Box>*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Box width="200px" m="0" pt="10px">
              <GaugeChartSpecial />
            </Box>
            <Box width="200px" m="0" ml="10px">
              <Typography variant="h5" fontWeight="600" sx={{ mt: "15px", mb: "15px" }}>
                Converter: &nbsp;&nbsp;52&deg;C
              </Typography>
            </Box>
          </Box>
        </Box>
        {/*<Box*/}
        {/*  gridColumn="span 3"*/}
        {/*  backgroundColor={colors.primary[400]}*/}
        {/*  display="flex"*/}
        {/*  alignItems="center"*/}
        {/*  justifyContent="center"*/}
        {/*>*/}
        {/*  <StatBox*/}
        {/*    title="1,325,134"*/}
        {/*    subTitle="Monthly Visits"*/}
        {/*    progress="0.80"*/}
        {/*    increase="+43%"*/}
        {/*    icon={*/}
        {/*      <TrafficIcon*/}
        {/*        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}*/}
        {/*      />}*/}
        {/*  />*/}
        {/*</Box>*/}


        {/* -------- ROW 2 -------- */}


        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px", color: colors.greenAccent[500]
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* START SPAN 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Traffic by Country
          </Typography>
          <Box
            height="200px"
          >
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>


        {/* -------- ROW 3 -------- */}


        {/* START SPAN 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography variant="h5" fontWeight="600">
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        {/* START SPAN 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px" }}>
            Sales Volume
          </Typography>
          <Box
            height="250px"
            mt="-20px"
          >
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* -------- TRANSACTIONS -------- */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </Box>
          { mockTransactions.map(
            ( transaction, i ) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItem="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography
                    color={colors.grey[100]}
                  >
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            )
          )
          }
        </Box>


      </Box>{/* -- END GRID -- */}
    </Box>
  );
};

export default SceneOverview;

